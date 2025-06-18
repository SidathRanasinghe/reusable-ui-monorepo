import { useCallback, useRef } from "react";
import * as d3 from "d3";

import { Node, Link } from "../types";

interface UseHoverEffectsProps {
  svgRef: React.RefObject<SVGSVGElement>;
  nodes: Node[];
  links: Link[];
  enableHover: boolean;
  onNodeHover?: (node: Node | null, event?: MouseEvent) => void;
  onNodeBlur?: (node: Node, event?: MouseEvent) => void;
  onLinkHover?: (link: Link | null, event?: MouseEvent) => void;
  onLinkBlur?: (link: Link, event?: MouseEvent) => void;
  onNodeClick?: (node: Node, event?: MouseEvent) => void;
  onLinkClick?: (link: Link, event?: MouseEvent) => void;
  onCanvasClick?: (event?: MouseEvent) => void;
}

interface HoverState {
  hoveredNode: Node | null;
  hoveredLink: Link | null;
  highlightedNodes: Set<string>;
  highlightedLinks: Set<string>;
}

export const useHoverEffects = ({
  svgRef,
  nodes,
  links,
  enableHover,
  onNodeHover,
  onNodeBlur,
  onLinkHover,
  onLinkBlur,
  onNodeClick,
  onLinkClick,
  onCanvasClick,
}: UseHoverEffectsProps) => {
  const hoverStateRef = useRef<HoverState>({
    hoveredNode: null,
    hoveredLink: null,
    highlightedNodes: new Set(),
    highlightedLinks: new Set(),
  });

  // Get connected nodes and links for highlighting
  const getConnectedElements = useCallback(
    (nodeId: string) => {
      const connectedNodes = new Set<string>();
      const connectedLinks = new Set<string>();

      connectedNodes.add(nodeId); // Include the hovered node itself

      links.forEach(link => {
        const sourceId =
          typeof link.source === "object" ? link.source.id : link.source;
        const targetId =
          typeof link.target === "object" ? link.target.id : link.target;

        if (sourceId === nodeId || targetId === nodeId) {
          connectedLinks.add(link.id || `${sourceId}-${targetId}`);
          connectedNodes.add(sourceId);
          connectedNodes.add(targetId);
        }
      });

      return { connectedNodes, connectedLinks };
    },
    [links]
  );

  // Apply hover effects to SVG elements
  const applyHoverEffects = useCallback(
    (
      highlightedNodes: Set<string>,
      highlightedLinks: Set<string>,
      isHovering: boolean
    ) => {
      if (!svgRef.current || !enableHover) return;

      const svg = d3.select(svgRef.current);

      // Update node styles
      svg
        .selectAll(".nodes g")
        .style("opacity", (d: any) => {
          if (!isHovering) return 1;
          return highlightedNodes.has(d.id) ? 1 : 0.3;
        })
        .style("filter", (d: any) => {
          if (!isHovering) return "none";
          return highlightedNodes.has(d.id)
            ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))"
            : "none";
        });

      // Update link styles
      svg.selectAll(".links g").style("opacity", (d: any) => {
        if (!isHovering) return 1;
        const linkId =
          d.id ||
          `${typeof d.source === "object" ? d.source.id : d.source}-${typeof d.target === "object" ? d.target.id : d.target}`;
        return highlightedLinks.has(linkId) ? 1 : 0.1;
      });

      // Highlight connected links
      svg.selectAll(".links path").style("stroke-width", (d: any) => {
        if (!isHovering) return d.style?.linkWidth || 2;
        const linkId =
          d.id ||
          `${typeof d.source === "object" ? d.source.id : d.source}-${typeof d.target === "object" ? d.target.id : d.target}`;
        return highlightedLinks.has(linkId)
          ? (d.style?.linkWidth || 2) + 1
          : d.style?.linkWidth || 2;
      });
    },
    [svgRef, enableHover]
  );

  // Handle node hover
  const handleNodeHover = useCallback(
    (event: MouseEvent | null, node: Node | null) => {
      if (!enableHover) return;

      const previousNode = hoverStateRef.current.hoveredNode;

      if (node) {
        // Mouse enter
        if (previousNode?.id !== node.id) {
          // Clear previous hover state
          if (previousNode && onNodeBlur) {
            onNodeBlur(previousNode, event || undefined);
          }

          // Set new hover state
          const { connectedNodes, connectedLinks } = getConnectedElements(
            node.id
          );

          hoverStateRef.current = {
            ...hoverStateRef.current,
            hoveredNode: node,
            highlightedNodes: connectedNodes,
            highlightedLinks: connectedLinks,
          };

          applyHoverEffects(connectedNodes, connectedLinks, true);

          if (onNodeHover) {
            onNodeHover(node, event || undefined);
          }
        }
      } else {
        // Mouse leave
        if (previousNode) {
          hoverStateRef.current = {
            ...hoverStateRef.current,
            hoveredNode: null,
            highlightedNodes: new Set(),
            highlightedLinks: new Set(),
          };

          applyHoverEffects(new Set(), new Set(), false);

          if (onNodeBlur) {
            onNodeBlur(previousNode, event || undefined);
          }
        }
      }
    },
    [
      enableHover,
      getConnectedElements,
      applyHoverEffects,
      onNodeHover,
      onNodeBlur,
    ]
  );

  // Handle link hover
  const handleLinkHover = useCallback(
    (event: MouseEvent | null, link: Link | null) => {
      if (!enableHover) return;

      const previousLink = hoverStateRef.current.hoveredLink;

      if (link) {
        // Mouse enter
        if (previousLink !== link) {
          // Clear previous hover state
          if (previousLink && onLinkBlur) {
            onLinkBlur(previousLink, event || undefined);
          }

          // Set new hover state
          const sourceId =
            typeof link.source === "object" ? link.source.id : link.source;
          const targetId =
            typeof link.target === "object" ? link.target.id : link.target;
          const linkId = link.id || `${sourceId}-${targetId}`;

          const highlightedNodes = new Set([sourceId, targetId]);
          const highlightedLinks = new Set([linkId]);

          hoverStateRef.current = {
            ...hoverStateRef.current,
            hoveredLink: link,
            highlightedNodes,
            highlightedLinks,
          };

          applyHoverEffects(highlightedNodes, highlightedLinks, true);

          if (onLinkHover) {
            onLinkHover(link, event || undefined);
          }
        }
      } else {
        // Mouse leave
        if (previousLink) {
          hoverStateRef.current = {
            ...hoverStateRef.current,
            hoveredLink: null,
            highlightedNodes: new Set(),
            highlightedLinks: new Set(),
          };

          applyHoverEffects(new Set(), new Set(), false);

          if (onLinkBlur) {
            onLinkBlur(previousLink, event || undefined);
          }
        }
      }
    },
    [enableHover, applyHoverEffects, onLinkHover, onLinkBlur]
  );

  // Handle canvas click
  const handleCanvasClick = useCallback(
    (event: MouseEvent) => {
      // Clear any hover effects
      hoverStateRef.current = {
        hoveredNode: null,
        hoveredLink: null,
        highlightedNodes: new Set(),
        highlightedLinks: new Set(),
      };

      applyHoverEffects(new Set(), new Set(), false);

      if (onCanvasClick) {
        onCanvasClick(event);
      }
    },
    [applyHoverEffects, onCanvasClick]
  );

  // Utility methods for external control
  const methods = {
    // Manually highlight specific nodes and links
    highlightElements: (nodeIds: string[], linkIds: string[] = []) => {
      const highlightedNodes = new Set(nodeIds);
      const highlightedLinks = new Set(linkIds);

      hoverStateRef.current = {
        ...hoverStateRef.current,
        highlightedNodes,
        highlightedLinks,
      };

      applyHoverEffects(highlightedNodes, highlightedLinks, true);
    },

    // Clear all highlighting
    clearHighlights: () => {
      hoverStateRef.current = {
        hoveredNode: null,
        hoveredLink: null,
        highlightedNodes: new Set(),
        highlightedLinks: new Set(),
      };

      applyHoverEffects(new Set(), new Set(), false);
    },

    // Get current hover state
    getHoverState: () => ({ ...hoverStateRef.current }),

    // Highlight node and its connections
    highlightNodeConnections: (nodeId: string) => {
      const { connectedNodes, connectedLinks } = getConnectedElements(nodeId);

      hoverStateRef.current = {
        ...hoverStateRef.current,
        highlightedNodes: connectedNodes,
        highlightedLinks: connectedLinks,
      };

      applyHoverEffects(connectedNodes, connectedLinks, true);
    },

    // Find shortest path between two nodes and highlight it
    highlightPath: (startNodeId: string, endNodeId: string) => {
      // Simple pathfinding - you might want to implement a more sophisticated algorithm
      const visited = new Set<string>();
      const queue = [{ nodeId: startNodeId, path: [startNodeId] }];

      while (queue.length > 0) {
        const { nodeId, path } = queue.shift()!;

        if (nodeId === endNodeId) {
          // Found path, highlight it
          const pathLinks = new Set<string>();
          for (let i = 0; i < path.length - 1; i++) {
            const link = links.find(l => {
              const sourceId =
                typeof l.source === "object" ? l.source.id : l.source;
              const targetId =
                typeof l.target === "object" ? l.target.id : l.target;
              return (
                (sourceId === path[i] && targetId === path[i + 1]) ||
                (sourceId === path[i + 1] && targetId === path[i])
              );
            });
            if (link) {
              const linkId =
                link.id ||
                `${typeof link.source === "object" ? link.source.id : link.source}-${typeof link.target === "object" ? link.target.id : link.target}`;
              pathLinks.add(linkId);
            }
          }

          methods.highlightElements(path, Array.from(pathLinks));
          return path;
        }

        if (visited.has(nodeId)) continue;
        visited.add(nodeId);

        // Find connected nodes
        links.forEach(link => {
          const sourceId =
            typeof link.source === "object" ? link.source.id : link.source;
          const targetId =
            typeof link.target === "object" ? link.target.id : link.target;

          if (sourceId === nodeId && !visited.has(targetId)) {
            queue.push({ nodeId: targetId, path: [...path, targetId] });
          } else if (targetId === nodeId && !visited.has(sourceId)) {
            queue.push({ nodeId: sourceId, path: [...path, sourceId] });
          }
        });
      }

      return null; // No path found
    },
  };

  return {
    handleNodeHover,
    handleLinkHover,
    handleCanvasClick,
    ...methods,
  };
};
