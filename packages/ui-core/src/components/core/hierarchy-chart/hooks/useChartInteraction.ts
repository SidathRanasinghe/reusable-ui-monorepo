// packages/ui-core/src/components/core/organizational-chart/hooks/useChartInteraction.ts
import { useState, useCallback } from "react";

import { HoverState } from "../types";

export const useChartInteraction = () => {
  const [hoverState, setHoverState] = useState<HoverState>({
    type: null,
    data: null,
    position: null,
  });

  const handleNodeHover = useCallback((node: any, event: React.MouseEvent) => {
    setHoverState({
      type: "node",
      data: node,
      position: { x: event.clientX, y: event.clientY },
    });
  }, []);

  const handleConnectionHover = useCallback(
    (connection: any, event: React.MouseEvent) => {
      setHoverState({
        type: "connection",
        data: connection,
        position: { x: event.clientX, y: event.clientY },
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoverState({
      type: null,
      data: null,
      position: null,
    });
  }, []);

  return {
    hoverState,
    handleNodeHover,
    handleConnectionHover,
    handleMouseLeave,
  };
};
