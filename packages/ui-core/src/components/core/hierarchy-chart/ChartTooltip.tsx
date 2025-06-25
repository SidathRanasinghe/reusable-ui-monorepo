// packages/ui-core/src/components/core/organizational-chart/components/ChartTooltip.tsx
import React from "react";
import { createPortal } from "react-dom";

import { Card, CardContent } from "@ui/card";

import { ChartNodePosition, ConnectionLine } from "./types";

export interface ChartTooltipProps {
  data: ChartNodePosition | ConnectionLine | null;
  position: { x: number; y: number } | null;
  type: "node" | "connection" | null;
  renderTooltip?: (data: any, type: "node" | "connection") => React.ReactNode;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({
  data,
  position,
  type,
  renderTooltip,
}) => {
  if (!data || !position || !type) return null;

  const tooltipContent = renderTooltip ? (
    renderTooltip(data, type)
  ) : (
    <div className="p-2">
      {type === "node" ? (
        <div>
          <h4 className="font-medium">{(data as ChartNodePosition).name}</h4>
          {(data as ChartNodePosition).title && (
            <p className="text-sm text-gray-600">
              {(data as ChartNodePosition).title}
            </p>
          )}
          {(data as ChartNodePosition).email && (
            <p className="text-xs text-gray-500">
              {(data as ChartNodePosition).email}
            </p>
          )}
        </div>
      ) : (
        <div>
          <p className="text-sm">
            Connection: {(data as ConnectionLine).source.name} →{" "}
            {(data as ConnectionLine).target.name}
          </p>
        </div>
      )}
    </div>
  );

  return createPortal(
    <Card
      className="fixed z-50 max-w-xs"
      style={{
        left: position.x + 10,
        top: position.y - 10,
        pointerEvents: "none",
      }}
    >
      <CardContent className="p-0">{tooltipContent}</CardContent>
    </Card>,
    document.body
  );
};
