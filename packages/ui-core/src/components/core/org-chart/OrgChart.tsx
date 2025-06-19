import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { createRoot } from "react-dom/client";

import { Card, CardContent } from "../../ui/card";

export interface OrgNode {
  y?: number;
  x?: number;
  id: string;
  name: string;
  role?: string;
  ownership?: "Direct" | "Indirect" | "Subsidiary";
  percentage?: number;
  country?: string;
  logo: string;
  children?: OrgNode[];
}

export interface OrgNodeComponentProps {
  data: OrgNode;
}

export interface OrgChartProps {
  data: OrgNode;
  NodeComponent: React.FC<OrgNodeComponentProps>;
  width?: number;
  height?: number;
  nodeWidth?: number;
  nodeHeight?: number;
  levelHeight?: number;
  horizontalSpacing?: number;
  styles?: {
    backgroundColor?: string;
    lineColor?: string;
    lineWidth?: number;
  };
  onNodeHover?: (node: OrgNode | null) => React.ReactNode;
  onEdgeHover?: (source: OrgNode, target: OrgNode | null) => React.ReactNode;
}

const OrgChart: React.FC<OrgChartProps> = ({
  data,
  NodeComponent,
  width = 1500,
  height = 1000,
  nodeWidth = 300,
  nodeHeight = 120,
  levelHeight = 200,
  horizontalSpacing = 20,
  styles = {},
  onNodeHover,
  onEdgeHover,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const rootsRef = useRef<Map<string, any>>(new Map());
  const [hoveredNode, setHoveredNode] = useState<OrgNode | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<{
    source: OrgNode;
    target: OrgNode;
    x: number | null;
    y: number | null;
  } | null>(null);
  const [transform, setTransform] = useState<d3.ZoomTransform>(d3.zoomIdentity);

  useEffect(() => {
    const cleanup = () => {
      rootsRef.current.forEach(root => {
        try {
          root.unmount();
        } catch (e) {
          // Silence unmount errors
        }
      });
      rootsRef.current.clear();
    };

    cleanup();

    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create container for zooming
    const container = svg
      .attr("width", width)
      .attr("height", height)
      .attr("class", "bg-white")
      .attr("style", `background: ${styles.backgroundColor}`)
      .append("g");

    // Setup zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 3])
      .on("zoom", event => {
        container.attr("transform", event.transform);
        setTransform(event.transform);
      });

    svg.call(zoom);

    const linksContainer = container.append("g").attr("class", "links");
    const nodesContainer = container.append("g").attr("class", "nodes");

    // Custom layout function (same as before)
    const customLayout = (root: d3.HierarchyNode<OrgNode>) => {
      const levels: d3.HierarchyNode<OrgNode>[][] = [];
      root.eachBefore(node => {
        if (!levels[node.depth]) levels[node.depth] = [];
        levels[node.depth].push(node);
      });

      levels.forEach((level, i) => {
        const levelWidth =
          level.length * (nodeWidth + horizontalSpacing) - horizontalSpacing;
        let startX = (width - levelWidth) / 2;
        level.forEach(node => {
          node.x = startX + nodeWidth / 2;
          node.y = i * levelHeight + nodeHeight / 2;
          startX += nodeWidth + horizontalSpacing;
        });
      });
      return root;
    };

    const root = d3.hierarchy(data);
    customLayout(root);

    // Draw links with hover functionality
    const drawConnector = (
      source: d3.HierarchyNode<OrgNode>,
      target: d3.HierarchyNode<OrgNode>
    ) => {
      const midY = ((source.y || 0) + (target.y || 0)) / 2;
      const arrowOffset = 15;

      const group = linksContainer
        .append("g")
        .attr("class", "connector")
        .lower()
        .on("mouseenter", e => {
          const rect = svgRef.current?.getBoundingClientRect();
          if (!rect) return;
          setHoveredEdge({
            source: source.data,
            target: target.data,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        })
        .on("mouseleave", () => setHoveredEdge(null));

      const isDashedPath = target.data.ownership === "Indirect";

      // Draw lines
      const lines = [
        {
          x1: source.x,
          y1: (source.y || 0) + nodeHeight / 2,
          x2: source.x,
          y2: midY,
        },
        {
          x1: source.x,
          y1: midY,
          x2: target.x,
          y2: midY,
        },
        {
          x1: target.x,
          y1: midY,
          x2: target.x,
          y2: (target.y || 0) - nodeHeight / 2 + arrowOffset,
        },
      ];

      lines.forEach(line => {
        group
          .append("line")
          .attr("x1", line.x1 || 0)
          .attr("y1", line.y1 || 0)
          .attr("x2", line.x2 || 0)
          .attr("y2", line.y2 || 0)
          .attr("stroke", styles.lineColor || "#9DA4AE")
          .attr("stroke-width", styles.lineWidth || 2)
          .attr("stroke-dasharray", isDashedPath ? "4,4" : "none");
      });

      // Add diamonds only at connection points
      const diamondSize = 15;
      const diamond = `M 0,-${diamondSize / 2} L ${diamondSize / 2},0 L 0,${diamondSize / 2} L -${diamondSize / 2},0 Z`;

      // Only add diamonds at line intersections
      [
        { x: source.x, y: midY },
        { x: target.x, y: midY },
      ].forEach(point => {
        group
          .append("path")
          .attr("d", diamond)
          .attr("transform", `translate(${point.x},${point.y})`)
          .attr("fill", styles.lineColor || "#9DA4AE");
      });

      // Add arrow at target
      const arrowSize = 12;
      const arrowPath = `M 0,0 L ${arrowSize},-${arrowSize / 2} L ${arrowSize},${arrowSize / 2} Z`;

      group
        .append("path")
        .attr("d", arrowPath)
        .attr(
          "transform",
          `translate(${target.x},${(target.y || 0) - nodeHeight / 2}) rotate(270)`
        )
        .attr("fill", styles.lineColor || "#9DA4AE");

      // Hover effects
      group
        .selectAll("line,path")
        .on("mouseenter", function () {
          group
            .selectAll("line,path")
            .attr("stroke", "#60a5fa")
            .attr("fill", "#60a5fa");
        })
        .on("mouseleave", function () {
          group
            .selectAll("line,path")
            .attr("stroke", styles.lineColor || "#9DA4AE")
            .attr("fill", styles.lineColor || "#9DA4AE");
        });
    };

    root.links().forEach(link => drawConnector(link.source, link.target));

    // Draw nodes with hover functionality
    const nodes = nodesContainer
      .selectAll(".node")
      .data(root.descendants())
      .enter()
      .append("foreignObject")
      .attr("x", d => (d.x || 0) - nodeWidth / 2)
      .attr("y", d => (d.y || 0) - nodeHeight / 2)
      .attr("width", nodeWidth)
      .attr("height", nodeHeight)
      .attr("class", "node")
      .attr("id", d => `node-${d.data.id}`)
      .attr("style", "overflow: visible;")
      .each(function (d) {
        const id = `node-${d.data.id}`;
        if (!rootsRef.current.has(id)) {
          const container = document.createElement("div");
          container.className = "size-full";
          this.appendChild(container);

          try {
            const root = createRoot(container);
            rootsRef.current.set(id, { root, container });
            root.render(<NodeComponent data={d.data} />);
          } catch (e) {
            // Silence render errors
          }
        }
      })
      .on("mouseenter", (e, d) => {
        e.stopPropagation();
        setHoveredNode({
          ...d.data,
          x: e.clientX || e.x,
          y: e.clientY || e.y,
        });
      })
      .on("mouseleave", e => {
        e.stopPropagation();
        setHoveredNode(null);
      });

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="relative w-full overflow-hidden bg-white p-8">
      <svg ref={svgRef} className="mx-auto" />

      {/* Node Hover Card */}
      {hoveredNode && onNodeHover && (
        <Card
          style={{
            position: "fixed",
            left: transform.applyX(hoveredNode.x || 0) + 10,
            top: transform.applyY(hoveredNode.y || 0) + 10,
          }}
        >
          <CardContent>{onNodeHover(hoveredNode)}</CardContent>
        </Card>
      )}

      {/* Edge Hover Card */}
      {hoveredEdge && onEdgeHover && (
        <Card
          style={{
            position: "fixed",
            left: transform.applyX((hoveredEdge.x || 0) + 10),
            top: transform.applyY((hoveredEdge.y || 0) + 10),
          }}
        >
          <CardContent>
            {onEdgeHover(hoveredEdge.source, hoveredEdge.target)}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrgChart;

/**
 *
 * How to use this component
 *
 */

// const sampleData: OrgNode = {
// 	id: "root",
// 	name: "Microsoft Corporation",
// 	logo: "/placeholder.svg?height=40&width=40",
// 	children: [
// 		{
// 			id: "cloud",
// 			name: "Cloud + AI",
// 			role: "Division",
// 			ownership: "Direct" as const,
// 			percentage: 100,
// 			country: "US",
// 			logo: "/placeholder.svg?height=40&width=40",
// 			children: [
// 				{
// 					id: "azure",
// 					name: "Azure",
// 					role: "Product Division",
// 					ownership: "Direct" as const,
// 					percentage: 100,
// 					country: "US",
// 					logo: "/placeholder.svg?height=40&width=40",
// 					children: [
// 						{
// 							id: "openai",
// 							name: "OpenAI Partnership",
// 							role: "Strategic Investment",
// 							ownership: "Indirect" as const,
// 							percentage: 49,
// 							country: "US",
// 							logo: "/placeholder.svg?height=40&width=40",
// 						},
// 					],
// 				},
// 				{
// 					id: "github",
// 					name: "GitHub",
// 					role: "Subsidiary",
// 					ownership: "Subsidiary" as const,
// 					percentage: 100,
// 					country: "US",
// 					logo: "/placeholder.svg?height=40&width=40",
// 				},
// 			],
// 		},
// 		{
// 			id: "gaming",
// 			name: "Gaming",
// 			role: "Division",
// 			ownership: "Direct" as const,
// 			percentage: 100,
// 			country: "US",
// 			logo: "/placeholder.svg?height=40&width=40",
// 			children: [
// 				{
// 					id: "xbox",
// 					name: "Xbox",
// 					role: "Product Division",
// 					ownership: "Direct" as const,
// 					percentage: 100,
// 					country: "US",
// 					logo: "/placeholder.svg?height=40&width=40",
// 				},
// 				{
// 					id: "activision",
// 					name: "Activision Blizzard",
// 					role: "Acquisition",
// 					ownership: "Subsidiary" as const,
// 					percentage: 100,
// 					country: "US",
// 					logo: "/placeholder.svg?height=40&width=40",
// 				},
// 			],
// 		},
// 	],
// };

// <div>
// 	<OrgChart
// 		data={sampleData}
// 		NodeComponent={CustomNodeComponent}
// 		width={1200}
// 		height={800}
// 		styles={{ backgroundColor: "#F5F6F7" }}
// 		onNodeHover={(node) => node && <CustomHoverContent node={node} />}
// 		onEdgeHover={(source, target) => (
// 			<div>
// 				Edge: {source.name} → {target?.name}
// 			</div>
// 		)}
// 	/>
// </div>;

// interface HoverCardContentProps {
// 	node: OrgNode;
// }

// export const CustomHoverContent: React.FC<HoverCardContentProps> = ({
// 	node,
// }) => {
// 	return (
// 		<div className="p-4 space-y-3">
// 			<div className="flex items-center gap-3">
// 				<img
// 					src={node.logo}
// 					alt={`${node.name} logo`}
// 					className="w-12 h-12 rounded"
// 				/>
// 				<div>
// 					<h4 className="font-semibold">{node.name}</h4>
// 					{node.role && <p className="text-sm text-gray-500">{node.role}</p>}
// 				</div>
// 			</div>

// 			{node.ownership && (
// 				<div className="text-sm">
// 					<span className="text-gray-500">Ownership Type:</span>
// 					<span className="ml-2 font-medium">{node.ownership}</span>
// 				</div>
// 			)}

// 			{node.percentage && (
// 				<div>
// 					<div className="text-sm text-gray-500 mb-1">Ownership Percentage</div>
// 					<div className="flex items-center gap-2">
// 						<div className="flex-1 h-2 bg-gray-100 rounded-full">
// 							<div
// 								className="h-full bg-blue-500 rounded-full"
// 								style={{ width: `${node.percentage}%` }}
// 							/>
// 						</div>
// 						<span className="text-sm font-medium">{node.percentage}%</span>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export const CustomNodeComponent: React.FC = ({ data }: any) => {
// 	return (
// 		<div className="p-4 size-full bg-white shadow-sm rounded-lg border border-gray-100">
// 			<div className="flex items-center gap-3 mb-2">
// 				<img
// 					src={data.logo}
// 					alt={`${data.name} logo`}
// 					className="w-10 h-10 rounded bg-gray-100"
// 				/>
// 				<div>
// 					<h3 className="font-medium text-gray-900">{data.name}</h3>
// 					{data.role && <p className="text-sm text-gray-500">{data.role}</p>}
// 				</div>
// 				{data.country && (
// 					<img
// 						src={`https://flagcdn.com/w40/${data.country.toLowerCase()}.png`}
// 						alt={`${data.country} flag`}
// 						className="w-6 h-4 ml-auto"
// 					/>
// 				)}
// 			</div>

// 			{data.percentage !== undefined && (
// 				<div className="mt-3">
// 					<div className="flex justify-between text-sm mb-1.5">
// 						{data.ownership && (
// 							<span className="text-gray-500">{data.ownership}</span>
// 						)}
// 						<span className="font-medium text-gray-900">
// 							{data.percentage}%
// 						</span>
// 					</div>
// 					<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
// 						<div
// 							className="h-full bg-blue-500 rounded-full"
// 							style={{ width: `${data.percentage}%` }}
// 						/>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };
