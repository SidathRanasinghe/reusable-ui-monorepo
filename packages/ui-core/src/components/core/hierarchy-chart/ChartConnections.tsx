// packages/ui-core/src/components/core/organizational-chart/components/ChartConnections.tsx
import React from "react";

import { ConnectionLine, ChartTheme } from "./types";

export interface ChartConnectionsProps {
  connections: ConnectionLine[];
  theme: ChartTheme;
  hoveredConnection?: ConnectionLine;
  onConnectionHover?: (
    connection: ConnectionLine,
    event: React.MouseEvent
  ) => void;
  onConnectionLeave?: () => void;
}

export const ChartConnections: React.FC<ChartConnectionsProps> = ({
  connections,
  theme,
  hoveredConnection,
  onConnectionHover,
  onConnectionLeave,
}) => {
  const createPath = (connection: ConnectionLine) => {
    const { source, target } = connection;
    const midY = (source.y + target.y) / 2;

    return `
      M ${source.x} ${source.y + 60}
      L ${source.x} ${midY}
      L ${target.x} ${midY}
      L ${target.x} ${target.y - 60}
    `;
  };

  const getStrokeDashArray = (type: ConnectionLine["type"]) => {
    switch (type) {
      case "dashed":
        return "8,4";
      case "dotted":
        return "2,2";
      default:
        return "none";
    }
  };

  return (
    <g className="connections">
      {connections.map((connection, index) => {
        const isHovered = hoveredConnection === connection;
        const strokeColor = isHovered
          ? theme.connection.hoverColor
          : connection.color || theme.connection.color;
        const strokeWidth = isHovered
          ? theme.connection.hoverWidth
          : connection.width || theme.connection.width;

        return (
          <g key={index}>
            {/* Invisible wider path for easier hover interaction */}
            <path
              d={createPath(connection)}
              stroke="transparent"
              strokeWidth={20}
              fill="none"
              style={{ cursor: "pointer" }}
              onMouseEnter={e => onConnectionHover?.(connection, e)}
              onMouseLeave={onConnectionLeave}
            />

            {/* Visible path */}
            <path
              d={createPath(connection)}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={getStrokeDashArray(connection.type)}
              fill="none"
              markerEnd="url(#arrowhead)"
              className="transition-all duration-200"
            />
          </g>
        );
      })}

      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill={
              hoveredConnection
                ? theme.connection.hoverColor
                : theme.connection.color
            }
            className="transition-all duration-200"
          />
        </marker>
      </defs>
    </g>
  );
};
