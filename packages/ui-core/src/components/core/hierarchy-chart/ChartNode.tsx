// packages/ui-core/src/components/core/organizational-chart/components/ChartNode.tsx
import React, { forwardRef } from "react";

import { cn } from "../../../lib/utils";

import { ChartNodePosition, ChartTheme } from "./types";

export interface ChartNodeProps {
  node: ChartNodePosition;
  theme: ChartTheme;
  isHovered?: boolean;
  onHover?: (node: ChartNodePosition, event: React.MouseEvent) => void;
  onLeave?: () => void;
  onClick?: (node: ChartNodePosition, event: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
}

export const ChartNode = forwardRef<HTMLDivElement, ChartNodeProps>(
  (
    { node, theme, isHovered, onHover, onLeave, onClick, className, children },
    ref
  ) => {
    const handleMouseEnter = (event: React.MouseEvent) => {
      onHover?.(node, event);
    };

    const handleClick = (event: React.MouseEvent) => {
      onClick?.(node, event);
    };

    if (children) {
      return (
        <div
          ref={ref}
          className={cn(
            "absolute cursor-pointer transition-all duration-200",
            className
          )}
          style={{
            left: node.x - 140, // Assuming 280px width
            top: node.y - 60, // Assuming 120px height
            width: 280,
            height: 120,
            zIndex: isHovered ? 10 : 1,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={onLeave}
          onClick={handleClick}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "absolute cursor-pointer rounded-lg border p-4 shadow-sm transition-all duration-200",
          isHovered && "scale-105 shadow-lg",
          className
        )}
        style={{
          left: node.x - 140,
          top: node.y - 60,
          width: 280,
          height: 120,
          backgroundColor: isHovered
            ? theme.node.hoverBackground
            : theme.node.background,
          borderColor: isHovered ? theme.node.hoverBorder : theme.node.border,
          borderRadius: theme.node.borderRadius,
          boxShadow: isHovered
            ? theme.node.shadow
            : "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: isHovered ? 10 : 1,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onLeave}
        onClick={handleClick}
      >
        <div className="flex h-full items-center space-x-3">
          {node.avatar && (
            <div className="shrink-0">
              <img
                src={node.avatar}
                alt={node.name}
                className="size-12 rounded-full object-cover"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3
              className="truncate font-medium"
              style={{
                color: theme.text.primary,
                fontSize: theme.text.size.name,
              }}
            >
              {node.name}
            </h3>
            {node.title && (
              <p
                className="truncate text-sm"
                style={{
                  color: theme.text.secondary,
                  fontSize: theme.text.size.title,
                }}
              >
                {node.title}
              </p>
            )}
            {node.department && (
              <p
                className="truncate text-xs"
                style={{
                  color: theme.text.secondary,
                  fontSize: theme.text.size.department,
                }}
              >
                {node.department}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ChartNode.displayName = "ChartNode";
