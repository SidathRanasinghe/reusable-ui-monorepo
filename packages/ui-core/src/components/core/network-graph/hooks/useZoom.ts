import { useCallback, useMemo } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3-zoom";

import { UseZoomReturn, ZoomEventHandler } from "../types";

interface UseZoomProps {
  svgRef: React.RefObject<SVGSVGElement>;
  zoomBehaviorRef: React.MutableRefObject<
    ZoomBehavior<SVGSVGElement, unknown> | undefined
  >;
  minZoom?: number;
  maxZoom?: number;
  onZoomChange?: ZoomEventHandler;
}

export const useZoom = ({
  svgRef,
  zoomBehaviorRef,
  minZoom = 0.1,
  maxZoom = 4,
  onZoomChange,
}: UseZoomProps): UseZoomReturn => {
  const handleZoom = useCallback(
    (scale: number) => {
      if (!svgRef.current || !zoomBehaviorRef.current) return;

      const svg = d3.select(svgRef.current);
      const currentTransform = d3.zoomTransform(svg.node()!);

      // Calculate new transform maintaining center point
      const rect = svgRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const newTransform = d3.zoomIdentity
        .translate(centerX, centerY)
        .scale(scale)
        .translate(-centerX, -centerY)
        .translate(currentTransform.x, currentTransform.y);

      svg.call(zoomBehaviorRef.current.transform, newTransform);

      if (onZoomChange) {
        onZoomChange(scale);
      }
    },
    [svgRef, zoomBehaviorRef, onZoomChange]
  );

  const fitGraphToContainer = useCallback(() => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;

    const svg = d3.select(svgRef.current);
    const graphGroup = svg.select("g");

    if (graphGroup.empty()) return;

    try {
      const bounds = (graphGroup.node() as SVGGElement).getBBox();
      const containerRect = svgRef.current.getBoundingClientRect();

      if (bounds.width === 0 || bounds.height === 0) return;

      const padding = 50;
      const scaleX = (containerRect.width - padding * 2) / bounds.width;
      const scaleY = (containerRect.height - padding * 2) / bounds.height;
      const scale = Math.min(scaleX, scaleY, maxZoom);

      // Clamp scale to min/max zoom levels
      const clampedScale = Math.max(minZoom, Math.min(maxZoom, scale));

      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      const boundsX = bounds.x + bounds.width / 2;
      const boundsY = bounds.y + bounds.height / 2;

      const transform = d3.zoomIdentity
        .translate(centerX, centerY)
        .scale(clampedScale)
        .translate(-boundsX, -boundsY);

      svg
        .transition()
        .duration(750)
        .call(zoomBehaviorRef.current.transform, transform);

      if (onZoomChange) {
        onZoomChange(clampedScale);
      }
    } catch (error) {
      console.warn("Error fitting graph to container:", error);
    }
  }, [svgRef, zoomBehaviorRef, minZoom, maxZoom, onZoomChange]);

  const zoomIn = useCallback(() => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;

    const svg = d3.select(svgRef.current);
    const currentTransform = d3.zoomTransform(svg.node()!);
    const newScale = Math.min(currentTransform.k * 1.5, maxZoom);

    svg
      .transition()
      .duration(300)
      .call(zoomBehaviorRef.current.scaleBy, newScale / currentTransform.k);

    if (onZoomChange) {
      onZoomChange(newScale);
    }
  }, [svgRef, zoomBehaviorRef, maxZoom, onZoomChange]);

  const zoomOut = useCallback(() => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;

    const svg = d3.select(svgRef.current);
    const currentTransform = d3.zoomTransform(svg.node()!);
    const newScale = Math.max(currentTransform.k / 1.5, minZoom);

    svg
      .transition()
      .duration(300)
      .call(zoomBehaviorRef.current.scaleBy, newScale / currentTransform.k);

    if (onZoomChange) {
      onZoomChange(newScale);
    }
  }, [svgRef, zoomBehaviorRef, minZoom, onZoomChange]);

  const resetZoom = useCallback(() => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;

    const svg = d3.select(svgRef.current);

    svg
      .transition()
      .duration(500)
      .call(zoomBehaviorRef.current.transform, d3.zoomIdentity);

    if (onZoomChange) {
      onZoomChange(1);
    }
  }, [svgRef, zoomBehaviorRef, onZoomChange]);

  return useMemo(
    () => ({
      handleZoom,
      fitGraphToContainer,
      zoomIn,
      zoomOut,
      resetZoom,
    }),
    [handleZoom, fitGraphToContainer, zoomIn, zoomOut, resetZoom]
  );
};
