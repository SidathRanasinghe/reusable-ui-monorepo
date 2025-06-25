// packages/ui-core/src/components/core/organizational-chart/hooks/useChartLayout.ts
import { useMemo } from "react";

import { ChartNode, ChartNodePosition, ChartLayout } from "../types";

export const useChartLayout = (data: ChartNode, layout: ChartLayout) => {
  return useMemo(() => {
    const { nodeWidth, nodeHeight, horizontalSpacing, verticalSpacing } =
      layout;

    // Convert tree to flat array with positions
    const flattenTree = (
      node: ChartNode,
      depth = 0,
      width?: string,
      height?: string,
      parent?: ChartNodePosition
    ): ChartNodePosition[] => {
      const nodeWithPosition: ChartNodePosition = {
        ...node,
        x: 0, // Will be calculated later
        y: depth * (nodeHeight + verticalSpacing),
        depth,
        width,
        height,
        parent,
      };

      let result = [nodeWithPosition];

      if (node.children) {
        node.children.forEach(child => {
          result = result.concat(
            flattenTree(child, depth + 1, width, height, nodeWithPosition)
          );
        });
      }

      return result;
    };

    const nodes = flattenTree(data);

    // Group nodes by depth for horizontal positioning
    const nodesByDepth = nodes.reduce(
      (acc, node) => {
        if (!acc[node.depth]) acc[node.depth] = [];
        acc[node.depth].push(node);
        return acc;
      },
      {} as Record<number, ChartNodePosition[]>
    );

    // Calculate horizontal positions
    Object.values(nodesByDepth).forEach(levelNodes => {
      const totalWidth =
        levelNodes.length * nodeWidth +
        (levelNodes.length - 1) * horizontalSpacing;
      let currentX = -totalWidth / 2;

      levelNodes.forEach(node => {
        node.x = currentX + nodeWidth / 2;
        currentX += nodeWidth + horizontalSpacing;
      });
    });

    // Generate connection lines
    const connections = nodes
      .filter(node => node.parent)
      .map(node => ({
        source: node.parent!,
        target: node,
        type: "solid" as const,
      }));

    // Calculate chart bounds
    const bounds = nodes.reduce(
      (acc, node) => ({
        minX: Math.min(acc.minX, node.x - nodeWidth / 2),
        maxX: Math.max(acc.maxX, node.x + nodeWidth / 2),
        minY: Math.min(acc.minY, node.y - nodeHeight / 2),
        maxY: Math.max(acc.maxY, node.y + nodeHeight / 2),
      }),
      { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
    );

    const chartWidth =
      bounds.maxX - bounds.minX + layout.padding.left + layout.padding.right;
    const chartHeight =
      bounds.maxY - bounds.minY + layout.padding.top + layout.padding.bottom;

    // Adjust positions to account for padding and centering
    const adjustedNodes = nodes.map(node => ({
      ...node,
      x: node.x - bounds.minX + layout.padding.left,
      y: node.y - bounds.minY + layout.padding.top,
    }));

    const adjustedConnections = connections.map(conn => ({
      ...conn,
      source: {
        ...conn.source,
        x: conn.source.x - bounds.minX + layout.padding.left,
        y: conn.source.y - bounds.minY + layout.padding.top,
      },
      target: {
        ...conn.target,
        x: conn.target.x - bounds.minX + layout.padding.left,
        y: conn.target.y - bounds.minY + layout.padding.top,
      },
    }));

    return {
      nodes: adjustedNodes,
      connections: adjustedConnections,
      bounds: {
        width: chartWidth,
        height: chartHeight,
      },
    };
  }, [data, layout]);
};
