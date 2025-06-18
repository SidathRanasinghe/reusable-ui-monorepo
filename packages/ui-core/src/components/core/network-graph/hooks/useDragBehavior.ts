import { useCallback, useMemo } from "react";
import * as d3 from "d3";

import { Node } from "../types";

export interface DragEvent extends d3.D3DragEvent<SVGGElement, Node, Node> {
  subject: Node;
}

interface UseDragBehaviorProps {
  simulation: d3.Simulation<Node, any> | null;
  enableDrag: boolean;
  onNodeDragStart?: (node: Node, event: DragEvent) => void;
  onNodeDrag?: (node: Node, event: DragEvent) => void;
  onNodeDragEnd?: (node: Node, event: DragEvent) => void;
}

export const useDragBehavior = ({
  simulation,
  enableDrag,
  onNodeDragStart,
  onNodeDrag,
  onNodeDragEnd,
}: UseDragBehaviorProps) => {
  const handleDragStart = useCallback(
    (event: DragEvent, d: Node) => {
      // Prevent event bubbling
      event.sourceEvent?.stopPropagation();

      // Call custom drag start handler
      if (onNodeDragStart) {
        onNodeDragStart(d, event);
      }

      if (!simulation) return;

      // Reheat the simulation to handle the drag
      if (!event.active) {
        simulation.alphaTarget(0.3).restart();
      }

      // Fix the node position
      d.fx = d.x;
      d.fy = d.y;
    },
    [simulation, onNodeDragStart]
  );

  const handleDrag = useCallback(
    (event: DragEvent, d: Node) => {
      // Update node position
      d.fx = event.x;
      d.fy = event.y;

      // Call custom drag handler
      if (onNodeDrag) {
        onNodeDrag(d, event);
      }
    },
    [onNodeDrag]
  );

  const handleDragEnd = useCallback(
    (event: DragEvent, d: Node) => {
      // Call custom drag end handler
      if (onNodeDragEnd) {
        onNodeDragEnd(d, event);
      }

      if (!simulation) return;

      // Cool down the simulation
      if (!event.active) {
        simulation.alphaTarget(0);
      }

      // Optionally release the node (uncomment to allow nodes to float after drag)
      // d.fx = null;
      // d.fy = null;

      // Keep the node fixed at the dropped position (current behavior)
      // This provides better UX as users expect dragged nodes to stay where they drop them
    },
    [simulation, onNodeDragEnd]
  );

  // Create drag behavior
  const dragBehavior = useMemo(() => {
    if (!enableDrag) return null;

    return d3
      .drag<SVGGElement, Node>()
      .on("start", handleDragStart)
      .on("drag", handleDrag)
      .on("end", handleDragEnd)
      .filter(event => {
        // Allow dragging with left mouse button only
        // Prevent dragging when meta/ctrl key is pressed (for selection)
        return !event.ctrlKey && !event.metaKey && event.button === 0;
      });
  }, [enableDrag, handleDragStart, handleDrag, handleDragEnd]);

  // Utility methods for external control
  const methods = useMemo(
    () => ({
      // Pin a node at its current position
      pinNode: (nodeId: string, nodes: Node[]) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node) {
          node.fx = node.x;
          node.fy = node.y;
        }
      },

      // Unpin a node
      unpinNode: (nodeId: string, nodes: Node[]) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node) {
          node.fx = null;
          node.fy = null;
          // Reheat simulation to let the node float
          if (simulation) {
            simulation.alpha(0.1).restart();
          }
        }
      },

      // Pin all nodes
      pinAllNodes: (nodes: Node[]) => {
        nodes.forEach(node => {
          node.fx = node.x;
          node.fy = node.y;
        });
      },

      // Unpin all nodes
      unpinAllNodes: (nodes: Node[]) => {
        nodes.forEach(node => {
          node.fx = null;
          node.fy = null;
        });
        if (simulation) {
          simulation.alpha(0.3).restart();
        }
      },

      // Check if a node is pinned
      isNodePinned: (nodeId: string, nodes: Node[]) => {
        const node = nodes.find(n => n.id === nodeId);
        return node ? node.fx !== null && node.fx !== undefined : false;
      },

      // Get all pinned nodes
      getPinnedNodes: (nodes: Node[]) => {
        return nodes.filter(node => node.fx !== null && node.fx !== undefined);
      },

      // Move a node to specific coordinates
      moveNodeTo: (nodeId: string, x: number, y: number, nodes: Node[]) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node) {
          node.fx = x;
          node.fy = y;
          if (simulation) {
            simulation.alpha(0.1).restart();
          }
        }
      },
    }),
    [simulation]
  );

  return {
    dragBehavior,
    ...methods,
  };
};
