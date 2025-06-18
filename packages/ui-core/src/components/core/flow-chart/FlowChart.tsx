import React, { SVGProps } from "react";
import ReactFlow, { Background, Edge, MarkerType, Node } from "reactflow";
import "reactflow/dist/style.css";
import {
  ArrowDownToLine,
  BetweenVerticalStart,
  Database,
  LandPlot,
  PackageCheck,
  Save,
} from "lucide-react";

interface Condition {
  field: string;
  operator: string;
  value: string;
  logicalOperator?: "AND" | "OR";
}

interface FlowChartProps {
  conditions: Condition[];
  isMinimalView: boolean;
}

interface IconProps {
  pathFill?: string;
  props: SVGProps<SVGSVGElement>;
}

const RunIcon = ({ pathFill, props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666ZM7.12904 10.5638L10.2758 8.70598C10.797 8.39825 10.797 7.60171 10.2758 7.29398L7.12904 5.43611C6.62251 5.13705 6.00004 5.52629 6.00004 6.14209V9.85785C6.00004 10.4736 6.62251 10.8629 7.12904 10.5638Z"
        fill={pathFill || "#656970"}
      />
    </svg>
  );
};

const FlowChart: React.FC<FlowChartProps> = ({ conditions, isMinimalView }) => {
  const renderRelatedIcon = (condition: Condition) => {
    if (condition.field === "Hits") {
      return <BetweenVerticalStart className="size-4 text-dark-300" />;
    } else if (condition.field === "Confidence Level") {
      return <PackageCheck className="size-4 text-dark-300" />;
    } else if (condition.field === "Country") {
      return <LandPlot className="size-4 text-dark-300" />;
    } else if (condition.value) {
      return <ArrowDownToLine className="size-4 text-dark-300" />;
    } else {
      return <BetweenVerticalStart className="size-4 text-dark-300" />;
    }
  };

  const generateNodesAndEdges = (conditions: Condition[]) => {
    const nodes: Node[] = [
      {
        id: "1",
        position: { x: 200, y: 0 },
        data: {
          label: (
            <div className="bg-tranparent flex h-fit w-full items-center justify-center gap-1">
              <Save className="size-3 text-dark-300" />
              <span className="font-hankenGrotesk !text-sub-caption-xs text-dark-300">
                Data Source
              </span>
            </div>
          ),
        },
        type: "input",
        style: {
          backgroundColor: "#E8ECF1",
          borderRadius: "9999px",
          border: "none",
          padding: "4px 8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      },
      {
        id: "2",
        position: { x: 200, y: 75 },
        data: {
          label: (
            <div className="bg-tranparent flex h-fit w-full items-center justify-center gap-1">
              <RunIcon props={{ className: "size-4" }} pathFill="#1E2023" />
              <span className="font-hankenGrotesk !text-sub-caption-xs text-dark-300">
                Run Query
              </span>
            </div>
          ),
        },
        style: {
          backgroundColor: "#E8ECF1",
          borderRadius: "9999px",
          border: "none",
          padding: "4px 8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      },
    ];

    const edges: Edge[] = [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#b1b6be",
          width: 16,
          height: 16,
        },
        style: {
          stroke: "#b1b6be",
        },
      },
    ];

    let currentX = 200;
    let currentY = 150;

    conditions.forEach((condition, index) => {
      const nodeId = `${index + 3}`;
      currentY += 75;

      nodes.push({
        id: nodeId,
        position: { x: currentX, y: currentY },
        data: {
          label: (
            <div className="bg-tranparent flex h-fit w-full items-center justify-center gap-2">
              {renderRelatedIcon(condition)}
              <span className="font-hankenGrotesk !text-sub-caption-xs !leading-[0] text-dark-300">
                {condition.field} {condition.operator} {condition.value}
              </span>
            </div>
          ),
        },
        style: {
          backgroundColor: "#FFFFFF",
          borderRadius: "9999px",
          border: "1px solid #A3A4A6",
          padding: "4px 8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      });

      edges.push({
        id: `e${index + 2}-${nodeId}`,
        source: `${index + 2}`,
        target: nodeId,
        label: `${condition.field} ${condition.operator} ${condition.value}`,
        animated: condition.logicalOperator === "OR",
        labelBgStyle: { fill: "none" },
        labelStyle: {
          backgroundColor: "transparent !important",
          fill: "#1E2023",
          padding: "16px 16px",
          borderRadius: "3px",
        },
        labelBgPadding: [16, 16],
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#b1b6be",
          width: 16,
          height: 16,
        },
        style: {
          stroke: "#b1b6be",
        },
      });

      if (condition.logicalOperator === "OR") {
        currentX += 200;
        currentY = 150;
      }
    });

    const outputNodeId = `${nodes.length + 1}`;
    nodes.push({
      id: outputNodeId,
      position: { x: currentX, y: currentY + 75 },
      data: {
        label: (
          <div className="bg-tranparent flex h-fit w-full items-center justify-center gap-1">
            <Database className="size-4 text-[#2445ff]" />
            <span className="font-hankenGrotesk !text-sub-caption-xs text-[#2445ff]">
              Query results
            </span>
          </div>
        ),
      },
      type: "output",
      style: {
        backgroundColor: "#FFFFFF",
        borderRadius: "9999px",
        border: "1px solid #2445ff80",
        padding: "4px 8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
    });

    edges.push({
      id: `e${nodes.length - 1}-${outputNodeId}`,
      source: `${nodes.length - 1}`,
      target: outputNodeId,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#2445ff",
      },
      style: {
        stroke: "#2445ff",
      },
    });

    return { nodes, edges };
  };

  const { nodes, edges } = generateNodesAndEdges(conditions);

  return (
    <div
      id="qlw"
      style={{
        height: isMinimalView ? "500px" : "100%",
        width: "100%",
        background: "transparent",
      }}
    >
      <ReactFlow nodes={nodes} edges={edges} fitView={true}>
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
