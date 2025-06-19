import React, { useCallback, useEffect, useRef, useMemo } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3-zoom";

import { Link, NetworkGraphProps, Node } from "./types";
import { getDefaultSize, getLabelDistance, getNodeRadius } from "./utils";
import { useNetworkGraph } from "./hooks/useNetworkGraph";
import { useZoom } from "./hooks/useZoom";
import { useSimulation } from "./hooks/useSimulation";
import { useDragBehavior } from "./hooks/useDragBehavior";
import { useHoverEffects } from "./hooks/useHoverEffects";
import Minimap from "./Minimap";

const NetworkGraph: React.FC<NetworkGraphProps> = ({
  nodes: initialNodes,
  links: initialLinks,
  width,
  height,
  className = "",

  // Default styles
  defaultNodeStyles = {
    backgroundColor: "#222",
    padding: 10,
    borderColor: "#999",
    borderWidth: 0,
  },
  defaultLinkStyles = {
    linkColor: "#666",
    linkWidth: 2,
    linkType: "solid",
  },
  defaultLabelStyles = {
    fill: "#ffffff",
    fontSize: 12,
    fontWeight: "normal",
    padding: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  defaultMessageStyles = {
    color: "#2445FF",
    fontSize: 12,
    fontWeight: "normal",
    backgroundColor: "none",
  },

  // Features
  enableMinimap = true,
  enableZoom = true,
  enableDrag = true,
  enableHover = true,

  // Simulation settings
  simulationConfig = {
    linkDistance: 200,
    chargeStrength: -4000,
    collisionRadius: 100,
    alphaDecay: 0.01,
    alphaMin: 0.001,
  },

  // Layout settings
  fitOnMount = true,
  centerForce = 0.1,

  // Zoom settings
  zoomLevel,
  minZoom = 0.1,
  maxZoom = 4,

  // Theme
  theme = "light",

  // Event handlers
  onNodeHover,
  onNodeBlur,
  onLinkHover,
  onLinkBlur,
  onNodeClick,
  onLinkClick,
  onCanvasClick,
  onZoomChange,
  onNodeDragStart,
  onNodeDrag,
  onNodeDragEnd,

  // Advanced customization
  customNodeRenderer,
  customLinkRenderer,
  customLabelRenderer,

  // Performance
  enableVirtualization = false,
  maxRenderNodes = 1000,
  maxRenderLinks = 2000,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomBehaviorRef = useRef<ZoomBehavior<SVGSVGElement, unknown>>();

  // Process and memoize data
  const processedNodes = useMemo(
    () =>
      initialNodes.map(node => ({
        ...node,
        x: node.x || undefined,
        y: node.y || undefined,
        vx: node.vx || undefined,
        vy: node.vy || undefined,
        index: node.index || undefined,
      })),
    [initialNodes]
  );

  const processedLinks = useMemo(
    () =>
      initialLinks.map(link => ({
        ...link,
        source: link.source || undefined,
        target: link.target || undefined,
        index: link.index || undefined,
      })),
    [initialLinks]
  );

  // Apply theme-based defaults
  const themedDefaults = useMemo(() => {
    const isDark = theme === "dark";
    return {
      nodeStyles: {
        backgroundColor: isDark ? "#374151" : "#f3f4f6",
        borderColor: isDark ? "#6b7280" : "#d1d5db",
        ...defaultNodeStyles,
      },
      linkStyles: {
        linkColor: isDark ? "#9ca3af" : "#6b7280",
        ...defaultLinkStyles,
      },
      labelStyles: {
        fill: isDark ? "#ffffff" : "#1f2937",
        backgroundColor: isDark
          ? "rgba(0, 0, 0, 0.7)"
          : "rgba(255, 255, 255, 0.9)",
        ...defaultLabelStyles,
      },
    };
  }, [theme, defaultNodeStyles, defaultLinkStyles, defaultLabelStyles]);

  // Custom hooks for functionality
  const { dimensions, updateDimensions } = useNetworkGraph({
    containerRef,
    width,
    height,
  });

  const { handleZoom, fitGraphToContainer } = useZoom({
    svgRef,
    zoomBehaviorRef,
    minZoom,
    maxZoom,
    onZoomChange,
  });

  const simulation = useSimulation({
    nodes: processedNodes,
    links: processedLinks,
    dimensions,
    config: simulationConfig,
    centerForce,
  });

  const { dragBehavior } = useDragBehavior({
    simulation: simulation.simulation,
    enableDrag,
    onNodeDragStart,
    onNodeDrag,
    onNodeDragEnd,
  });

  const { handleNodeHover, handleLinkHover, handleCanvasClick } =
    useHoverEffects({
      svgRef,
      nodes: processedNodes,
      links: processedLinks,
      enableHover,
      onNodeHover,
      onNodeBlur,
      onLinkHover,
      onLinkBlur,
      onNodeClick,
      onLinkClick,
      onCanvasClick,
    });

  // Handle external zoom level changes
  useEffect(() => {
    if (zoomLevel && handleZoom) {
      handleZoom(zoomLevel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomLevel]);

  // Handle fit on mount
  useEffect(() => {
    if (fitOnMount && fitGraphToContainer) {
      const timer = setTimeout(() => {
        fitGraphToContainer();
      }, 100);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitOnMount]);

  // Render node function
  const renderNode = useCallback(
    (
      nodeGroup: d3.Selection<SVGGElement, Node, null, undefined>,
      node: Node
    ) => {
      if (customNodeRenderer) {
        return customNodeRenderer(nodeGroup, node, themedDefaults.nodeStyles);
      }

      const nodeStyle = { ...themedDefaults.nodeStyles, ...node.style };
      const labelStyle = {
        ...themedDefaults.labelStyles,
        ...nodeStyle.labelStyle,
      };

      // Helper function to calculate dimensions with padding
      const getDimensionsWithPadding = (
        baseWidth: number,
        baseHeight: number,
        padding: number = 0
      ) => ({
        width: baseWidth + padding * 2,
        height: baseHeight + padding * 2,
        x: -(baseWidth / 2 + padding),
        y: -(baseHeight / 2 + padding),
      });

      switch (node.shape) {
        case "circle": {
          const radius =
            nodeStyle.width ||
            nodeStyle.height ||
            getDefaultSize(node.shape).width;
          const padding = nodeStyle.padding || 0;
          const totalRadius = radius + padding;

          nodeGroup
            .append("circle")
            .attr("r", totalRadius)
            .attr("fill", nodeStyle.backgroundColor)
            .attr("stroke", nodeStyle.borderColor)
            .attr("stroke-width", nodeStyle.borderWidth);

          if (node.image) {
            const clipId = `clip-circle-${node.id}`;
            nodeGroup
              .append("clipPath")
              .attr("id", clipId)
              .append("circle")
              .attr("r", radius);

            nodeGroup
              .append("image")
              .attr("href", node.image)
              .attr("x", -radius + padding / 2)
              .attr("y", -radius + padding / 2)
              .attr("width", (radius - padding / 2) * 2)
              .attr("height", (radius - padding / 2) * 2)
              .attr("clip-path", `url(#${clipId})`);
          }
          break;
        }

        case "square":
        case "rounded-square": {
          const padding = nodeStyle.padding || 0;
          const baseWidth =
            (nodeStyle.width || getDefaultSize(node.shape).width) - padding;
          const baseHeight =
            (nodeStyle.height || getDefaultSize(node.shape).height) - padding;
          const dims = getDimensionsWithPadding(baseWidth, baseHeight, padding);
          const isRounded = node.shape === "rounded-square";

          nodeGroup
            .append("rect")
            .attr("width", dims.width)
            .attr("height", dims.height)
            .attr("x", dims.x)
            .attr("y", dims.y)
            .attr("rx", isRounded ? nodeStyle.borderRadius || 10 : 0)
            .attr("ry", isRounded ? nodeStyle.borderRadius || 10 : 0)
            .attr("fill", nodeStyle.backgroundColor)
            .attr("stroke", nodeStyle.borderColor)
            .attr("stroke-width", nodeStyle.borderWidth);

          if (node.image) {
            const clipId = `clip-${node.shape}-${node.id}`;
            nodeGroup
              .append("clipPath")
              .attr("id", clipId)
              .append("rect")
              .attr("width", baseWidth)
              .attr("height", baseHeight)
              .attr("x", -baseWidth / 2)
              .attr("y", -baseHeight / 2)
              .attr("rx", isRounded ? nodeStyle.borderRadius || 10 : 0)
              .attr("ry", isRounded ? nodeStyle.borderRadius || 10 : 0);

            nodeGroup
              .append("image")
              .attr("href", node.image)
              .attr("x", -baseWidth / 2 + padding / 2)
              .attr("y", -baseHeight / 2 + padding / 2)
              .attr("width", baseWidth - padding)
              .attr("height", baseHeight - padding)
              .attr("clip-path", `url(#${clipId})`);
          }
          break;
        }

        case "rectangle":
        case "rounded-rectangle": {
          const padding = nodeStyle.padding || 0;
          const baseWidth =
            (nodeStyle.width || getDefaultSize(node.shape).width) - padding;
          const baseHeight =
            (nodeStyle.height || getDefaultSize(node.shape).height) - padding;
          const dims = getDimensionsWithPadding(baseWidth, baseHeight, padding);
          const isRounded = node.shape === "rounded-rectangle";

          nodeGroup
            .append("rect")
            .attr("width", dims.width)
            .attr("height", dims.height)
            .attr("x", dims.x)
            .attr("y", dims.y)
            .attr("rx", isRounded ? nodeStyle.borderRadius || 10 : 0)
            .attr("ry", isRounded ? nodeStyle.borderRadius || 10 : 0)
            .attr("fill", nodeStyle.backgroundColor)
            .attr("stroke", nodeStyle.borderColor)
            .attr("stroke-width", nodeStyle.borderWidth);

          if (node.image) {
            const clipId = `clip-rect-${node.id}`;
            nodeGroup
              .append("clipPath")
              .attr("id", clipId)
              .append("rect")
              .attr("width", baseWidth)
              .attr("height", baseHeight)
              .attr("x", -baseWidth / 2)
              .attr("y", -baseHeight / 2)
              .attr("rx", isRounded ? nodeStyle.borderRadius || 10 : 0)
              .attr("ry", isRounded ? nodeStyle.borderRadius || 10 : 0);

            nodeGroup
              .append("image")
              .attr("href", node.image)
              .attr("x", -baseWidth / 2 + padding / 2)
              .attr("y", -baseHeight / 2 + padding / 2)
              .attr("width", baseWidth - padding)
              .attr("height", baseHeight - padding)
              .attr("clip-path", `url(#${clipId})`);
          }
          break;
        }

        default: {
          // Default to rounded-square for unknown shapes
          const padding = nodeStyle.padding || 0;
          const baseWidth =
            (nodeStyle.width || getDefaultSize("rounded-square").width) -
            padding;
          const baseHeight =
            (nodeStyle.height || getDefaultSize("rounded-square").height) -
            padding;
          const dims = getDimensionsWithPadding(baseWidth, baseHeight, padding);

          nodeGroup
            .append("rect")
            .attr("width", dims.width)
            .attr("height", dims.height)
            .attr("x", dims.x)
            .attr("y", dims.y)
            .attr("rx", nodeStyle.borderRadius || 10)
            .attr("ry", nodeStyle.borderRadius || 10)
            .attr("fill", nodeStyle.backgroundColor)
            .attr("stroke", nodeStyle.borderColor)
            .attr("stroke-width", nodeStyle.borderWidth);
        }
      }

      // Add node name text if no image
      if (!node.image && node.name) {
        nodeGroup
          .append("text")
          .attr("class", `node-name${node.name.length > 8 ? " truncate" : ""}`)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "central")
          .attr(
            "fill",
            nodeStyle.backgroundColor === "#ffffff" ? "#1E2023" : "#ffffff"
          )
          .style("font-size", "16px")
          .style("font-weight", "bold")
          .text(node.name);
      }

      // Add labels
      if (node.label) {
        const words = node.label.split("\n");
        const labelGroup = nodeGroup
          .append("g")
          .attr("class", "node-label-group")
          .attr("transform", `translate(0, ${getLabelDistance(node)})`);

        const breakTextIntoLines = (text: string, maxCharsPerLine = 10) => {
          if (!text) return [];
          const segments = text.split("\n");
          return segments.flatMap(segment => {
            const words = segment.split(" ");
            const lines: string[] = [];
            let currentLine = "";

            words.forEach(word => {
              if (currentLine.length + word.length <= maxCharsPerLine) {
                currentLine += (currentLine.length === 0 ? "" : " ") + word;
              } else {
                if (currentLine.length > 0) lines.push(currentLine);
                currentLine = word;
              }
            });

            if (currentLine.length > 0) {
              lines.push(currentLine);
            }

            return lines;
          });
        };

        words.forEach((label: string, wordIndex: number) => {
          const lines = breakTextIntoLines(label);

          lines.forEach((line, lineIndex) => {
            labelGroup
              .append("text")
              .attr("class", "node-label")
              .attr(
                "dy",
                (lineIndex + wordIndex * lines.length) *
                  (labelStyle.fontSize || 12) *
                  1.2
              )
              .attr("text-anchor", "middle")
              .attr("fill", labelStyle.fill)
              .style("font-size", `${labelStyle.fontSize}px`)
              .style(
                "font-weight",
                wordIndex === 0 ? "500" : labelStyle.fontWeight || "400"
              )
              .text(line);
          });
        });

        // Add background for labels if specified
        if (
          labelStyle.backgroundColor &&
          labelStyle.backgroundColor !== "none"
        ) {
          const bbox = labelGroup.node()?.getBBox();
          if (bbox) {
            labelGroup
              .insert("rect", "text")
              .attr("width", bbox.width + (labelStyle.padding || 4) * 2)
              .attr("height", bbox.height + (labelStyle.padding || 4) * 2)
              .attr("x", bbox.x - (labelStyle.padding || 4))
              .attr("y", bbox.y - (labelStyle.padding || 4))
              .attr("fill", labelStyle.backgroundColor)
              .attr("opacity", 0.7)
              .attr("rx", 2)
              .attr("ry", 2);
          }
        }
      }
    },
    [themedDefaults, customNodeRenderer]
  );

  // Main effect for rendering the graph
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);
    svg.selectAll("*").remove();

    // Set dimensions
    if (width) svg.attr("width", width);
    if (height) svg.attr("height", height);

    // Setup zoom behavior
    if (enableZoom) {
      zoomBehaviorRef.current = d3
        .zoom<SVGSVGElement, unknown>()
        .scaleExtent([minZoom, maxZoom])
        .on("zoom", event => {
          g.attr("transform", event.transform);
          if (onZoomChange) onZoomChange(event.transform.k);
        });

      svg.call(zoomBehaviorRef.current);
    }

    const g = svg.append("g");

    // Create defs for markers and patterns
    const defs = svg.append("defs");

    // Create arrow markers
    const uniqueLinkColors = new Set(
      processedLinks.map(
        link => link.style?.linkColor || themedDefaults.linkStyles.linkColor
      )
    );

    defs
      .selectAll("marker")
      .data(Array.from(uniqueLinkColors))
      .join("marker")
      .attr("id", d => `arrow-${d?.replace("#", "")}`)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 8)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("fill", d => d || themedDefaults.linkStyles.linkColor)
      .attr("d", "M0,-5L10,0L0,5C1,3,1,-3,0,-5Z");

    // Filter data for virtualization if enabled
    const nodesToRender = enableVirtualization
      ? processedNodes.slice(0, maxRenderNodes)
      : processedNodes;
    const linksToRender = enableVirtualization
      ? processedLinks.slice(0, maxRenderLinks)
      : processedLinks;

    // Create links
    const linkGroup = g
      .append("g")
      .attr("class", "links")
      .selectAll("g")
      .data(linksToRender)
      .join("g");

    // Render links
    if (customLinkRenderer) {
      linkGroup.each(function (d) {
        customLinkRenderer(
          d3.select(this as any),
          d,
          themedDefaults.linkStyles
        );
      });
    } else {
      linkGroup
        .append("path")
        .attr(
          "stroke",
          d => d.style?.linkColor || themedDefaults.linkStyles.linkColor
        )
        .attr(
          "stroke-width",
          d => d.style?.linkWidth || themedDefaults.linkStyles.linkWidth
        )
        .attr("stroke-dasharray", d =>
          (d.style?.linkType || themedDefaults.linkStyles.linkType) === "dashed"
            ? "5,5"
            : ""
        )
        .attr(
          "marker-end",
          d =>
            `url(#arrow-${(d.style?.linkColor || themedDefaults.linkStyles.linkColor).replace("#", "")})`
        )
        .attr("fill", "none");

      // Add link labels
      const labelContainers = linkGroup
        .append("g")
        .attr("class", "label-container");

      labelContainers.each(function (d: Link) {
        if (!d.label) return;

        const container = d3.select(this);
        const labelStyle = {
          ...themedDefaults.labelStyles,
          ...d.style?.labelStyle,
        };

        const labelRect = container
          .append("rect")
          .attr("rx", 4)
          .attr("ry", 4)
          .attr("fill", labelStyle.backgroundColor)
          .attr("opacity", 0.9)
          .attr("stroke", "white")
          .attr("stroke-width", 2);

        const labelText = container
          .append("text")
          .attr("class", "link-label")
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .attr("fill", labelStyle.fill)
          .style("font-size", `${labelStyle.fontSize}px`)
          .style("font-weight", labelStyle.fontWeight)
          .style("pointer-events", "none")
          .text(d.label);

        const labelBBox = (labelText.node() as SVGTextElement)?.getBBox();
        if (labelBBox) {
          const padding = labelStyle.padding || 4;
          labelRect
            .attr("x", -labelBBox.width / 2 - padding)
            .attr("y", -labelBBox.height / 2 - padding)
            .attr("width", labelBBox.width + padding * 2)
            .attr("height", labelBBox.height + padding * 2);
        }

        // Add message if present
        if (d.message) {
          const messageStyle = {
            ...defaultMessageStyles,
            ...d.style?.messageStyle,
          };
          container
            .append("text")
            .attr("class", "link-message")
            .attr("dy", "-1.5em")
            .attr("text-anchor", "middle")
            .attr("fill", messageStyle.color)
            .style("font-size", `${messageStyle.fontSize}px`)
            .style("font-weight", messageStyle.fontWeight)
            .style("pointer-events", "none")
            .text(d.message);
        }
      });
    }

    // Create nodes
    const nodeGroup = g
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(nodesToRender)
      .join("g");

    if (enableDrag && dragBehavior) {
      nodeGroup.call(dragBehavior as any);
    }

    // Render nodes
    nodeGroup.each(function (d) {
      renderNode(d3.select(this as any), d);
    });

    // Add event listeners
    if (enableHover) {
      nodeGroup
        .on("mouseover", handleNodeHover)
        .on("mouseout", (event, d) => handleNodeHover(event, null))
        .on("click", (event, d) => {
          event.stopPropagation();
          if (onNodeClick) onNodeClick(d, event);
        });

      linkGroup
        .on("mouseover", handleLinkHover)
        .on("mouseout", (event, d) => handleLinkHover(event, null))
        .on("click", (event, d) => {
          event.stopPropagation();
          if (onLinkClick) onLinkClick(d, event);
        });

      svg.on("click", handleCanvasClick);
    }

    // Update positions on simulation tick
    // Update positions on simulation tick
    if (simulation && simulation.simulation) {
      simulation.simulation.on("tick", () => {
        // Update link positions
        linkGroup.selectAll("path").attr("d", (d: any) => {
          const sourceNode = nodesToRender.find(
            n => n.id === (d.source.id || d.source)
          );
          const targetNode = nodesToRender.find(
            n => n.id === (d.target.id || d.target)
          );

          if (!sourceNode || !targetNode) return "";

          const sourceRadius = getNodeRadius(sourceNode, true);
          const targetRadius = getNodeRadius(targetNode, false);
          const dx = (targetNode.x || 0) - (sourceNode.x || 0);
          const dy = (targetNode.y || 0) - (sourceNode.y || 0);
          const angle = Math.atan2(dy, dx);

          const sourceX = (sourceNode.x || 0) + sourceRadius * Math.cos(angle);
          const sourceY = (sourceNode.y || 0) + sourceRadius * Math.sin(angle);
          const targetX = (targetNode.x || 0) - targetRadius * Math.cos(angle);
          const targetY = (targetNode.y || 0) - targetRadius * Math.sin(angle);

          const midX = (sourceX + targetX) / 2;
          const midY = (sourceY + targetY) / 2;
          const curvature = d.shape === "curved" ? 0.2 : 0;
          const controlX = midX - curvature * (targetY - sourceY);
          const controlY = midY + curvature * (targetX - sourceX);

          return `M${sourceX},${sourceY} Q${controlX},${controlY} ${targetX},${targetY}`;
        });

        // Update label positions
        linkGroup.selectAll(".label-container").attr("transform", (d: any) => {
          const sourceNode = nodesToRender.find(
            n => n.id === (d.source.id || d.source)
          );
          const targetNode = nodesToRender.find(
            n => n.id === (d.target.id || d.target)
          );

          if (!sourceNode || !targetNode) return "";

          const sourceX = sourceNode.x || 0;
          const sourceY = sourceNode.y || 0;
          const targetX = targetNode.x || 0;
          const targetY = targetNode.y || 0;

          const t = 0.5;
          const curveX =
            (1 - t) * (1 - t) * sourceX +
            2 * (1 - t) * t * ((sourceX + targetX) / 2) +
            t * t * targetX;
          const curveY =
            (1 - t) * (1 - t) * sourceY +
            2 * (1 - t) * t * ((sourceY + targetY) / 2) +
            t * t * targetY;

          const tangentX =
            2 * (1 - t) * ((sourceX + targetX) / 2 - sourceX) +
            2 * t * (targetX - (sourceX + targetX) / 2);
          const tangentY =
            2 * (1 - t) * ((sourceY + targetY) / 2 - sourceY) +
            2 * t * (targetY - (sourceY + targetY) / 2);
          const tangentAngle = (Math.atan2(tangentY, tangentX) * 180) / Math.PI;

          return `translate(${curveX},${curveY}) rotate(${tangentAngle})`;
        });

        // Update node positions
        nodeGroup.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
      });

      simulation.simulation.alpha(1).restart();
    }

    return () => {
      if (simulation && simulation.simulation) {
        simulation.simulation.stop();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    processedNodes,
    processedLinks,
    dimensions,
    themedDefaults,
    enableZoom,
    enableDrag,
    enableHover,
    enableVirtualization,
    maxRenderNodes,
    maxRenderLinks,
    minZoom,
    maxZoom,
    dragBehavior,
    simulation,
  ]);

  const containerClasses = [
    "network-graph-container",
    "relative size-full overflow-hidden rounded-lg",
    theme === "dark" ? "bg-gray-900" : "bg-white",
    "[&_svg]:cursor-default",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className={containerClasses}>
      <svg ref={svgRef} className="size-full" />
      {enableMinimap && (
        <Minimap svgRef={svgRef} zoomBehaviorRef={zoomBehaviorRef} />
      )}
    </div>
  );
};

export default NetworkGraph;
