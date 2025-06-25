import React, { forwardRef, useMemo } from "react";

import { cn } from "../../../lib/utils";

import {
  ChartLayout,
  ChartTheme,
  ChartNodePosition,
  ConnectionLine,
  HierarchyChartProps,
} from "./types";
import { useChartLayout } from "./hooks/useChartLayout";
import { useChartInteraction } from "./hooks/useChartInteraction";
import { ChartNode as ChartNodeComponent } from "./ChartNode";
import { ChartConnections } from "./ChartConnections";
import { ChartTooltip } from "./ChartTooltip";

const defaultLayout: ChartLayout = {
  nodeWidth: 280,
  nodeHeight: 120,
  horizontalSpacing: 40,
  verticalSpacing: 80,
  padding: {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
};

const defaultTheme: ChartTheme = {
  background: "#ffffff",
  node: {
    background: "#ffffff",
    border: "#e5e7eb",
    borderRadius: 8,
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    hoverBackground: "#f9fafb",
    hoverBorder: "#3b82f6",
  },
  connection: {
    color: "#9ca3af",
    width: 2,
    hoverColor: "#3b82f6",
    hoverWidth: 3,
  },
  text: {
    primary: "#111827",
    secondary: "#6b7280",
    size: {
      name: "1rem",
      title: "0.875rem",
      department: "0.75rem",
    },
  },
};

export const HierarchyChart = forwardRef<HTMLDivElement, HierarchyChartProps>(
  (
    {
      data,
      layout: layoutOverrides = {},
      theme: themeOverrides = {},
      className,
      style,
      onNodeClick,
      onNodeHover,
      onConnectionHover,
      renderNode,
      renderTooltip,
      showTooltips = true,
      interactive = true,
      zoomable = false,
      pannable = false,
      ...props
    },
    ref
  ) => {
    const layout = useMemo(
      () => ({ ...defaultLayout, ...layoutOverrides }),
      [layoutOverrides]
    );
    const theme = useMemo(
      () => ({
        ...defaultTheme,
        ...themeOverrides,
        node: { ...defaultTheme.node, ...themeOverrides.node },
        connection: {
          ...defaultTheme.connection,
          ...themeOverrides.connection,
        },
        text: {
          ...defaultTheme.text,
          ...themeOverrides.text,
          size: { ...defaultTheme.text.size, ...themeOverrides.text?.size },
        },
      }),
      [themeOverrides]
    );

    const { nodes, connections, bounds } = useChartLayout(data, layout);
    const {
      hoverState,
      handleNodeHover,
      handleConnectionHover,
      handleMouseLeave,
    } = useChartInteraction();

    const handleNodeHoverInternal = (
      node: ChartNodePosition,
      event: React.MouseEvent
    ) => {
      if (interactive) {
        handleNodeHover(node, event);
        onNodeHover?.(node, event);
      }
    };

    const handleConnectionHoverInternal = (
      connection: ConnectionLine,
      event: React.MouseEvent
    ) => {
      if (interactive) {
        handleConnectionHover(connection, event);
        onConnectionHover?.(connection, event);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative overflow-auto", className)}
        style={{
          backgroundColor: theme.background,
          ...style,
        }}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          className="relative"
          style={{
            width: bounds.width,
            height: bounds.height,
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          {/* SVG for connections */}
          <svg
            className="pointer-events-none absolute inset-0"
            width={bounds.width}
            height={bounds.height}
            style={{ pointerEvents: interactive ? "auto" : "none" }}
          >
            <ChartConnections
              connections={connections}
              theme={theme}
              hoveredConnection={
                hoverState.type === "connection"
                  ? (hoverState.data as ConnectionLine)
                  : undefined
              }
              onConnectionHover={handleConnectionHoverInternal}
              onConnectionLeave={handleMouseLeave}
            />
          </svg>

          {/* Nodes */}
          {nodes.map(node => {
            const isHovered =
              hoverState.type === "node" &&
              (hoverState.data as ChartNodePosition)?.id === node.id;
            const nodeProps = {
              node,
              theme,
              isHovered,
              onHover: handleNodeHoverInternal,
              onLeave: handleMouseLeave,
              onClick: onNodeClick,
            };

            if (renderNode) {
              return <div key={node.id}>{renderNode(node, nodeProps)}</div>;
            }

            return <ChartNodeComponent key={node.id} {...nodeProps} />;
          })}

          {/* Tooltip */}
          {showTooltips && interactive && (
            <ChartTooltip
              data={hoverState.data}
              position={hoverState.position}
              type={hoverState.type}
              renderTooltip={renderTooltip}
            />
          )}
        </div>
      </div>
    );
  }
);

HierarchyChart.displayName = "HierarchyChart";
