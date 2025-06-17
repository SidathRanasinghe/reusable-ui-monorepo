import React, { useCallback, useEffect, useRef } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3-zoom";

import { Link, NetworkGraphProps, Node } from "./types";
import { getDefaultSize, getLabelDistance, getNodeRadius } from "./utils";
import Minimap from "./Minimap";

const VlaGraph: React.FC<NetworkGraphProps> = ({
  nodes: initialNodes,
  links: initialLinks,
  width,
  height,
  defaultNodeStyles = {
    backgroundColor: "#222",
    padding: 10,
    border: "2px solid #999",
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
  isFullView = false,
  zoomLevel,
  fontSize = 12,
  onHoverNode,
  onBlurNode,
  onHoverLink,
  onBlurLink,
  onClickNode,
  onClickLink,
  onClick,
  onZoomChange,
  onClickCluster,
}: NetworkGraphProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isHoverFixedRef = useRef(false);
  const zoomBehaviorRef = useRef<ZoomBehavior<SVGSVGElement, unknown>>();
  const gRef = useRef<SVGGElement | null>(null);

  // Function to handle manual zoom
  const handleManualZoom = useCallback(
    (scale: number) => {
      if (!svgRef.current || !zoomBehaviorRef.current) return;

      const svg = d3.select(svgRef.current);

      // Calculate center point for zoom
      const svgWidth = svgRef.current.clientWidth;
      const svgHeight = svgRef.current.clientHeight;
      const centerX = svgWidth / 2;
      const centerY = svgHeight / 2;

      // Create new transform centered on the middle of the viewport
      const newTransform = d3.zoomIdentity
        .translate(centerX, centerY)
        .scale(scale)
        .translate(-centerX, -centerY);

      svg
        .transition()
        .duration(200)
        .call(zoomBehaviorRef.current.transform, newTransform);

      if (onZoomChange) onZoomChange(scale);
    },
    [onZoomChange]
  );

  // Watch for zoom level changes
  useEffect(() => {
    if (zoomLevel) {
      handleManualZoom(zoomLevel);
    }
  }, [zoomLevel, handleManualZoom]);

  const fitGraphToContainer = () => {
    if (!svgRef.current || !gRef.current) return;

    const svgNode = d3.select<SVGSVGElement, unknown>(svgRef.current);
    const bounds = gRef.current.getBBox();

    const containerRect = svgRef.current.getBoundingClientRect();
    const fullWidth = containerRect.width;
    const fullHeight = containerRect.height;
    const padding = 40;

    const scale = Math.min(
      fullWidth / (bounds.width + padding * 2),
      fullHeight / (bounds.height + padding * 2)
    );

    const tx = -bounds.x * scale + (fullWidth - bounds.width * scale) / 2;
    const ty = -bounds.y * scale + (fullHeight - bounds.height * scale) / 2;

    svgNode.call(
      zoomBehaviorRef?.current?.transform as any,
      d3.zoomIdentity.translate(tx, ty).scale(scale)
    );

    // Update zoom level
    if (onZoomChange) onZoomChange(scale, "ctrl");
  };

  const nodes: any[] = React.useMemo(
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

  const links: any[] = React.useMemo(
    () =>
      initialLinks.map(link => ({
        ...link,
        source: link.source || undefined,
        target: link.target || undefined,
        index: link.index || undefined,
      })),
    [initialLinks]
  );

  useEffect(() => {
    if (!svgRef.current) return;

    const observer = new ResizeObserver(() => {
      fitGraphToContainer();
    });

    observer.observe(svgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);
    if (width) svg.attr("width", width);
    if (height) svg.attr("height", height);

    // Create zoom behavior with proper typing
    zoomBehaviorRef.current = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", event => {
        g.attr("transform", event.transform);
        if (onZoomChange) onZoomChange(event.transform.k);
      });

    svg.call(zoomBehaviorRef.current);

    const g = svg.append("g");
    // g.attr("height", svgRef.current.getBoundingClientRect().height);
    gRef.current = g.node();

    // Add a defs section for the link label backgrounds
    const defs = svg.append("defs");

    // Create arrow markers for each unique link color
    const uniqueLinkColors = new Set(
      links.map(d => d.style?.linkColor || defaultLinkStyles.linkColor)
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
      .attr("fill", d => d || "#666")
      .attr("d", "M0,-5L10,0L0,5C1,3,1,-3,0,-5Z");

    // Create the force simulation with adjusted parameters
    const simulation = d3
      .forceSimulation(nodes as any)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(200)
      )
      .force("charge", d3.forceManyBody().strength(-4000))
      .force("x", d3.forceX())
      .force("y", d3.forceY())
      .force("collision", d3.forceCollide().radius(100))
      .force(
        "group",
        d3
          .forceX<any>()
          .strength(0.1)
          .x(d => {
            return (
              (svgRef?.current?.getBoundingClientRect()?.width || 200) * 0.75
            );
          })
      )
      .force(
        "group-y",
        d3
          .forceY<any>()
          .strength(0.1)
          .y(d => {
            return (
              (svgRef?.current?.getBoundingClientRect()?.height || 200) * 0.75
            );
          })
      )
      .alphaDecay(0.01)
      .alphaMin(0.001);

    // Create the links
    const link = g
      .append("g")
      .attr("class", "links")
      .selectAll("g")
      .data(links)
      .join("g");

    // Add paths for links with improved styling
    link
      .append("path")
      .attr(
        "stroke",
        d => d?.style?.linkColor || defaultLinkStyles.linkColor || "#666"
      )
      .attr(
        "stroke-width",
        d => d?.style?.linkWidth || defaultLinkStyles.linkWidth || 2
      )
      .attr("stroke-dasharray", d =>
        (d.style?.linkType || d.type || defaultLinkStyles.linkType) === "dashed"
          ? "5,5"
          : ""
      )
      .attr(
        "marker-end",
        d =>
          `url(#arrow-${(d?.style?.linkColor || defaultLinkStyles?.linkColor || "#666").replace("#", "")})`
      )
      .attr("fill", "none");

    // Create label containers
    const labelContainers = link.append("g").attr("class", "label-container");

    labelContainers.each(function (d: any) {
      const container = d3.select(this);

      // Add background rectangles for labels
      const labelRect = container
        .append("rect")
        .attr("rx", 4)
        .attr("ry", 4)
        .attr(
          "fill",
          d.style?.labelStyle?.backgroundColor ||
            defaultLabelStyles.backgroundColor
        )
        .attr("opacity", 0.9)
        .attr("stroke", "white")
        .attr("stroke-width", 2);

      // Add the text labels
      const labelText = container
        .append("text")
        .attr("class", "link-label")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("fill", d.style?.labelStyle?.fill || defaultLabelStyles.fill)
        .style(
          "font-size",
          `${d.style?.labelStyle?.fontSize || defaultLabelStyles.fontSize}px`
        )
        .style(
          "font-weight",
          d.style?.labelStyle?.fontWeight || defaultLabelStyles.fontWeight
        )
        .style("pointer-events", "none")
        .style("letter-spacing", "0.5")
        .text(d.label);

      // Size the background rectangles based on text size
      const labelBBox = (labelText.node() as SVGTextElement)?.getBBox() || {
        width: 0,
        height: 0,
      };
      const padding =
        d.style?.labelStyle?.padding || defaultLabelStyles.padding;
      labelRect
        .attr("x", -labelBBox.width / 2 - padding)
        .attr("y", -labelBBox.height / 2 - padding)
        .attr("width", labelBBox.width + padding * 2)
        .attr("height", labelBBox.height + padding * 2);

      if (d.message) {
        // Add message text
        const messageText = container
          .append("text")
          .attr("class", "link-message")
          .attr("dy", "-1.5em")
          .attr("text-anchor", "middle")
          .attr(
            "fill",
            d.style?.messageStyle?.color || defaultMessageStyles.color
          )
          .style(
            "font-size",
            `${d.style?.messageStyle?.fontSize || defaultMessageStyles.fontSize}px`
          )
          .style(
            "font-weight",
            d.style?.messageStyle?.fontWeight || defaultMessageStyles.fontWeight
          )
          .style("pointer-events", "none")
          .text(d.message);

        // Add background for message if specified
        if (d.style?.messageStyle?.backgroundColor !== "none") {
          const messageBBox = (
            messageText.node() as SVGTextElement
          )?.getBBox() || {
            width: 0,
            height: 0,
          };
          container
            .insert("rect", "text")
            .attr("class", "message-background")
            .attr("rx", 4)
            .attr("ry", 4)
            .attr(
              "fill",
              d.style?.messageStyle?.backgroundColor ||
                defaultMessageStyles.backgroundColor
            )
            .attr("x", -messageBBox.width / 2 - 4)
            .attr("y", -messageBBox.height - 4)
            .attr("width", messageBBox.width + 8)
            .attr("height", messageBBox.height + 4);
        }
      }
    });

    // Create the nodes
    const node = g
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended) as any
      );

    // Add nodes with improved styling
    node.each(function (d: Node) {
      const nodeGroup = d3.select(this);
      const nodeStyle = { ...defaultNodeStyles, ...d.style };
      const labelStyle = { ...defaultLabelStyles, ...nodeStyle.labelStyle };

      // Helper function to calculate dimensions with padding
      function getDimensionsWithPadding(
        baseWidth: number,
        baseHeight: number,
        padding: number = 0
      ) {
        return {
          width: baseWidth + padding * 2,
          height: baseHeight + padding * 2,
          x: -(baseWidth / 2 + padding),
          y: -(baseHeight / 2 + padding),
        };
      }

      switch (d.shape) {
        case "circle": {
          const radius =
            nodeStyle.width ||
            nodeStyle.height ||
            getDefaultSize(d.shape).width;
          const padding = nodeStyle.padding || 0;
          const totalRadius = radius + padding;

          // Base circle shape with padding
          nodeGroup
            .append("circle")
            .attr("r", totalRadius)
            .attr(
              "fill",
              nodeStyle.backgroundColor ||
                defaultNodeStyles.backgroundColor ||
                "#222"
            )
            .attr(
              "stroke",
              nodeStyle.borderColor || defaultNodeStyles.borderColor || "#999"
            )
            .attr(
              "stroke-width",
              nodeStyle.borderWidth || defaultNodeStyles.borderWidth || 0
            );

          if (d.image) {
            // Add clipPath for circle
            const clipId = `clip-circle-${d.id}`;
            nodeGroup
              .append("clipPath")
              .attr("id", clipId)
              .append("circle")
              .attr("r", radius); // Clip to inner circle without padding

            // Add image within circle
            nodeGroup
              .append("image")
              .attr("href", d.image)
              .attr("x", -radius + padding / 2)
              .attr("y", -radius + padding / 2)
              .attr("width", (radius - padding / 2) * 2)
              .attr("height", (radius - padding / 2) * 2)
              .attr("clip-path", `url(#${clipId})`);
          }
          break;
        }

        case "square": {
          const padding = nodeStyle.padding || 0;
          const baseWidth =
            (nodeStyle.width || getDefaultSize(d.shape).width) - padding;
          const baseHeight =
            (nodeStyle.height || getDefaultSize(d.shape).height) - padding;
          const dims = getDimensionsWithPadding(baseWidth, baseHeight, padding);

          // Base square shape
          const square = nodeGroup
            .append("rect")
            .attr("width", dims.width)
            .attr("height", dims.height)
            .attr("x", dims.x)
            .attr("y", dims.y)
            .attr(
              "fill",
              nodeStyle.backgroundColor ||
                defaultNodeStyles.backgroundColor ||
                "#222"
            )
            .attr(
              "stroke",
              nodeStyle.borderColor || defaultNodeStyles.borderColor || "#999"
            )
            .attr(
              "stroke-width",
              nodeStyle.borderWidth || defaultNodeStyles.borderWidth || 0
            );

          if (d.image) {
            // Add clipPath for square
            const clipId = `clip-square-${d.id}`;
            nodeGroup
              .append("clipPath")
              .attr("id", clipId)
              .append("rect")
              .attr("width", baseWidth)
              .attr("height", baseHeight)
              .attr("x", -baseWidth / 2)
              .attr("y", -baseHeight / 2);

            // Add image within square
            nodeGroup
              .append("image")
              .attr("href", d.image)
              .attr("x", -baseWidth / 2 + padding / 2)
              .attr("y", -baseHeight / 2 + padding / 2)
              .attr("width", baseWidth - padding)
              .attr("height", baseHeight - padding)
              .attr("clip-path", `url(#${clipId})`);
          }
          break;
        }

        case "rounded-square": {
          const padding = nodeStyle.padding || 0;
          const baseWidth =
            (nodeStyle.width || getDefaultSize(d.shape).width) - padding;
          const baseHeight =
            (nodeStyle.height || getDefaultSize(d.shape).height) - padding;
          const dims = getDimensionsWithPadding(baseWidth, baseHeight, padding);

          // Base rounded square shape
          const roundedSquare = nodeGroup
            .append("rect")
            .attr("width", dims.width)
            .attr("height", dims.height)
            .attr("x", dims.x)
            .attr("y", dims.y)
            .attr("rx", nodeStyle.borderRadius || 10)
            .attr("ry", nodeStyle.borderRadius || 10)
            .attr(
              "fill",
              nodeStyle.backgroundColor ||
                defaultNodeStyles.backgroundColor ||
                "#222"
            )
            .attr(
              "stroke",
              nodeStyle.borderColor || defaultNodeStyles.borderColor || "#999"
            )
            .attr(
              "stroke-width",
              nodeStyle.borderWidth || defaultNodeStyles.borderWidth || 0
            );

          if (d.image) {
            // Add clipPath for rounded square
            const clipId = `clip-rounded-square-${d.id}`;
            nodeGroup
              .append("clipPath")
              .attr("id", clipId)
              .append("rect")
              .attr("width", baseWidth)
              .attr("height", baseHeight)
              .attr("x", -baseWidth / 2)
              .attr("y", -baseHeight / 2)
              .attr("rx", nodeStyle.borderRadius || 10)
              .attr("ry", nodeStyle.borderRadius || 10);

            // Add image within rounded square
            nodeGroup
              .append("image")
              .attr("href", d.image)
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
            (nodeStyle.width || getDefaultSize(d.shape).width) - padding;
          const baseHeight =
            (nodeStyle.height || getDefaultSize(d.shape).height) - padding;
          const dims = getDimensionsWithPadding(baseWidth, baseHeight, padding);
          const isRounded = d.shape === "rounded-rectangle";

          // Base rectangle shape
          const rectangle = nodeGroup
            .append("rect")
            .attr("width", dims.width)
            .attr("height", dims.height)
            .attr("x", dims.x)
            .attr("y", dims.y)
            .attr("rx", isRounded ? nodeStyle.borderRadius || 10 : 0)
            .attr("ry", isRounded ? nodeStyle.borderRadius || 10 : 0)
            .attr(
              "fill",
              nodeStyle.backgroundColor ||
                defaultNodeStyles.backgroundColor ||
                "#222"
            )
            .attr(
              "stroke",
              nodeStyle.borderColor || defaultNodeStyles.borderColor || "#999"
            )
            .attr(
              "stroke-width",
              nodeStyle.borderWidth || defaultNodeStyles.borderWidth || 0
            );

          if (d.image) {
            // Add clipPath for rectangle
            const clipId = `clip-rect-${d.id}`;
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

            // Add image within rectangle
            nodeGroup
              .append("image")
              .attr("href", d.image)
              .attr("x", -baseWidth / 2 + padding / 2)
              .attr("y", -baseHeight / 2 + padding / 2)
              .attr("width", baseWidth - padding)
              .attr("height", baseHeight - padding)
              .attr("clip-path", `url(#${clipId})`);
          }
          break;
        }

        default: {
          const padding = nodeStyle.padding || 0;
          const baseWidth =
            (nodeStyle.width || getDefaultSize(d.shape).width) - padding;
          const baseHeight =
            (nodeStyle.height || getDefaultSize(d.shape).height) - padding;
          const dims = getDimensionsWithPadding(baseWidth, baseHeight, padding);

          // Default to rounded-square if shape is not recognized
          const defaultShape = nodeGroup
            .append("rect")
            .attr("width", dims.width)
            .attr("height", dims.height)
            .attr("x", dims.x)
            .attr("y", dims.y)
            .attr("rx", nodeStyle.borderRadius || 10)
            .attr("ry", nodeStyle.borderRadius || 10)
            .attr(
              "fill",
              nodeStyle.backgroundColor ||
                defaultNodeStyles.backgroundColor ||
                "#222"
            )
            .attr(
              "stroke",
              nodeStyle.borderColor || defaultNodeStyles.borderColor || "#999"
            )
            .attr(
              "stroke-width",
              nodeStyle.borderWidth || defaultNodeStyles.borderWidth || 0
            );

          if (d.image) {
            // Add clipPath for default shape
            const clipId = `clip-default-${d.id}`;
            nodeGroup
              .append("clipPath")
              .attr("id", clipId)
              .append("rect")
              .attr("width", baseWidth)
              .attr("height", baseHeight)
              .attr("x", -baseWidth / 2)
              .attr("y", -baseHeight / 2)
              .attr("rx", nodeStyle.borderRadius || 10)
              .attr("ry", nodeStyle.borderRadius || 10);

            // Add image within default shape
            nodeGroup
              .append("image")
              .attr("href", d.image)
              .attr("x", -baseWidth / 2 + padding / 2)
              .attr("y", -baseHeight / 2 + padding / 2)
              .attr("width", baseWidth - padding)
              .attr("height", baseHeight - padding)
              .attr("clip-path", `url(#${clipId})`);
          }
        }
      }

      // Add node name text if no image
      if (!d.image) {
        nodeGroup
          .append("text")
          .attr("class", `node-name${d.name?.length > 8 ? " truncate" : ""}`)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "central")
          .attr(
            "fill",
            nodeStyle.backgroundColor === "#ffffff"
              ? labelStyle.color || "#1E2023"
              : "#ffffff"
          )
          .style("font-size", "16px")
          .style("font-weight", "bold")
          .text(d.name);
      }

      const words = d.label.split("\n");
      const labelGroup = nodeGroup
        .append("g")
        .attr("class", "node-label-group")
        .attr("transform", `translate(0, ${getLabelDistance(d)})`);

      // break text into lines
      function breakTextIntoLines(text: string, maxCharsPerLine = 10) {
        if (!text) return [];

        // split by explicit line breaks
        const segments = text.split("\n");

        // break long segments into shorter lines
        const lines = segments.flatMap(segment => {
          const words: string[] = segment.split(" ");
          const lines = [];
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

        return lines;
      }

      // Create text elements for each line
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
            .attr(
              "fill",
              labelStyle.color || defaultLabelStyles.color || "#ffffff"
            )
            .style("font-size", `${labelStyle.fontSize}px`)
            .style(
              "font-weight",
              wordIndex === 0
                ? "500"
                : labelStyle.fontWeight ||
                    defaultLabelStyles.fontWeight ||
                    "400"
            )
            .text(line);
        });
      });

      // Update the background rectangle calculations to account for multiple lines
      const bbox = labelGroup.node()?.getBBox() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      };
      if (d.shape === "rounded-square") {
        labelGroup
          .insert("rect", "text")
          .attr(
            "width",
            bbox.width +
              (labelStyle.padding || defaultLabelStyles.padding || 4) * 2
          )
          .attr(
            "height",
            bbox.height +
              (labelStyle.padding || defaultLabelStyles.padding || 4) * 2
          )
          .attr(
            "x",
            bbox.x - (labelStyle.padding || defaultLabelStyles.padding || 4)
          )
          .attr(
            "y",
            bbox.y - (labelStyle.padding || defaultLabelStyles.padding || 4)
          )
          .attr(
            "fill",
            labelStyle.backgroundColor ||
              defaultLabelStyles.backgroundColor ||
              "rgba(0, 0, 0, 0.5)"
          )
          .attr("opacity", 0.7)
          .attr("rx", 2)
          .attr("ry", 2);
      }

      // Add a background for better readability on dark nodes
      if (d.shape === "rounded-square") {
        const bbox = labelGroup.node()?.getBBox() || {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
        };
        labelGroup
          .insert("rect", "text")
          .attr(
            "width",
            bbox.width +
              (labelStyle.padding || defaultLabelStyles.padding || 4) * 2
          )
          .attr(
            "height",
            bbox.height +
              (labelStyle.padding || defaultLabelStyles.padding || 4) * 2
          )
          .attr(
            "x",
            bbox.x - (labelStyle.padding || defaultLabelStyles.padding || 4)
          )
          .attr(
            "y",
            bbox.y - (labelStyle.padding || defaultLabelStyles.padding || 4)
          )
          .attr(
            "fill",
            labelStyle.backgroundColor ||
              defaultLabelStyles.backgroundColor ||
              "rgba(0, 0, 0, 0.5)"
          )
          .attr("opacity", 0.7)
          .attr("rx", 2)
          .attr("ry", 2);
      }
    });

    // Helper function to safely get node data
    function safeGetNode(nodeId: string): Node | undefined {
      return nodes.find(n => n.id === nodeId);
    }

    // Update positions on each tick with improved layout
    simulation.on("tick", () => {
      // Update link paths
      link.selectAll("path").attr("d", (d: any) => {
        const sourceNode = safeGetNode(d.source.id || d.source);
        const targetNode = safeGetNode(d.target.id || d.target);

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

        // Calculate control point for the quadratic curve
        const midX = (sourceX + targetX) / 2;
        const midY = (sourceY + targetY) / 2;
        const curvature = d.shape === "curved" ? 0.2 : 0;
        const controlX = midX - curvature * (targetY - sourceY);
        const controlY = midY + curvature * (targetX - sourceX);

        return `M${sourceX},${sourceY} Q${controlX},${controlY} ${targetX},${targetY}`;
      });

      // Update label container positions and rotations
      labelContainers.attr("transform", (d: any) => {
        const sourceNode = safeGetNode(d.source.id || d.source);
        const targetNode = safeGetNode(d.target.id || d.target);

        if (!sourceNode || !targetNode) return "";

        const sourceX = sourceNode.x || 0;
        const sourceY = sourceNode.y || 0;
        const targetX = targetNode.x || 0;
        const targetY = targetNode.y || 0;

        // Calculate the position at 50% along the quadratic curve
        const t = 0.5;
        const curveX =
          (1 - t) * (1 - t) * sourceX +
          2 * (1 - t) * t * ((sourceX + targetX) / 2) +
          t * t * targetX;
        const curveY =
          (1 - t) * (1 - t) * sourceY +
          2 * (1 - t) * t * ((sourceY + targetY) / 2) +
          t * t * targetY;

        // Calculate the angle of the tangent at this point
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
      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Updated function to handle hover effects
    function handleElementHover(
      element: Node | Link | null,
      isClick: boolean = false
    ) {
      if (element || isClick) {
        const connectedNodeIds = new Set<string | number>();
        const connectedLinkIds = new Set<string | number>();

        if (element) {
          if ("id" in element) {
            // It's a Node
            connectedNodeIds.add(element.id);
            links.forEach(link => {
              const sourceId =
                typeof link.source === "string"
                  ? link.source
                  : (link.source as any).id;
              const targetId =
                typeof link.target === "string"
                  ? link.target
                  : (link.target as any).id;
              if (sourceId === element.id || targetId === element.id) {
                connectedNodeIds.add(sourceId);
                connectedNodeIds.add(targetId);
                connectedLinkIds.add(`${sourceId}-${targetId}`);
              }
            });
          } else {
            // It's a Link
            const sourceId =
              typeof element.source === "string"
                ? element.source
                : (element.source as any).id;
            const targetId =
              typeof element.target === "string"
                ? element.target
                : (element.target as any).id;
            connectedNodeIds.add(sourceId);
            connectedNodeIds.add(targetId);
            connectedLinkIds.add(`${sourceId}-${targetId}`);
          }
        }

        node.style("opacity", d => (connectedNodeIds.has(d.id) ? 1 : 0.2));
        link.style("opacity", d => {
          const sourceId =
            typeof d.source === "string" ? d.source : (d.source as any).id;
          const targetId =
            typeof d.target === "string" ? d.target : (d.target as any).id;
          return connectedLinkIds.has(`${sourceId}-${targetId}`) ? 1 : 0.2;
        });
        // link.style("stroke", d => {
        //   const sourceId = typeof d.source === "string" ? d.source : (d.source as any).id;
        //   const targetId = typeof d.target === "string" ? d.target : (d.target as any).id;
        //   // return connectedLinkIds.has(`${sourceId}-${targetId}`) ? "#C4C8CE" : "#C4C8CE";
        //   return "#f0f2f5";
        // });
        labelContainers.style("opacity", d => {
          const sourceId =
            typeof d.source === "string" ? d.source : (d.source as any).id;
          const targetId =
            typeof d.target === "string" ? d.target : (d.target as any).id;
          return connectedLinkIds.has(`${sourceId}-${targetId}`) ? 1 : 0.2;
        });

        if (isClick) {
          isHoverFixedRef.current = true;
        }
      } else if (!isClick) {
        node.style("opacity", 1);
        link.style("opacity", 1);
        labelContainers.style("opacity", 1);
      }
    }

    // Add hover functionality
    node
      .on("mouseover", (event, d) => {
        if (!isHoverFixedRef.current) {
          d3.select(event.currentTarget).style("cursor", "pointer");
          const [x, y] = d3.pointer(event, svg.node());

          handleElementHover(d);
        }
      })
      .on("mouseout", event => {
        if (!isHoverFixedRef.current) {
          d3.select(event.currentTarget).style("cursor", null);

          handleElementHover(null);
        }
      })
      .on("click", (event, d) => {
        event.stopPropagation();
        const [x, y] = d3.pointer(event, svg.node());

        handleElementHover(d, true);
      });

    link
      .on("mouseover", (event, d) => {
        if (!isHoverFixedRef.current) {
          d3.select(event.currentTarget).style("cursor", "pointer");
          const [x, y] = d3.pointer(event, svg.node());

          handleElementHover(d);
        }
      })
      .on("mouseout", event => {
        if (!isHoverFixedRef.current) {
          d3.select(event.currentTarget).style("cursor", null);

          handleElementHover(null);
        }
      })
      .on("click", (event, d) => {
        event.stopPropagation();
        const [x, y] = d3.pointer(event, svg.node());

        handleElementHover(d, true);
      });

    // Add a click event listener to the SVG to handle click-away
    svg.on("click", () => {
      isHoverFixedRef.current = false;
      handleElementHover(null);
    });

    // Initial simulation
    simulation.alpha(1).restart();

    return () => {
      simulation.stop();
    };
  }, [nodes, links]);

  const handleClickAway = () => {
    if (isHoverFixedRef.current) {
      isHoverFixedRef.current = false;
      // Reset node and link opacities
      if (svgRef.current) {
        d3.select(svgRef.current)
          .selectAll(".nodes g, .links g")
          .style("opacity", 1)
          .style("cursor", null);
      }
    }
  };

  return (
    <div
      className="relative size-full overflow-hidden rounded-lg bg-white [&_svg]:cursor-default"
      onClick={handleClickAway}
    >
      <svg ref={svgRef} className="size-full" />
      <Minimap
        svgRef={svgRef}
        zoomBehaviorRef={zoomBehaviorRef}
        isFullView={isFullView}
      />
    </div>
  );
};

export default VlaGraph;
