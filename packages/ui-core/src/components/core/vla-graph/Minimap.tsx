import React, { useCallback, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3-zoom";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MiniMapProps {
  svgRef: React.RefObject<SVGSVGElement>;
  zoomBehaviorRef: React.MutableRefObject<
    ZoomBehavior<SVGSVGElement, unknown> | undefined
  >;
  width?: number;
  height?: number;
  isFullView?: boolean;
}

interface MiniMapDims {
  width: number;
  height: number;
  headerHeight: number;
  padding: number;
}

const Minimap: React.FC<MiniMapProps> = ({
  svgRef,
  zoomBehaviorRef,
  isFullView,
}) => {
  const minimapContainerRef = useRef<HTMLDivElement>(null);
  const minimapSvgRef = useRef<SVGSVGElement>(null);
  const [isMinimized, setIsMinimized] = useState(true);
  const isDraggingRef = useRef(false);
  const [miniMapDims, setMiniMapDims] = useState<MiniMapDims>({
    width: 0,
    height: 200,
    headerHeight: 30,
    padding: 10,
  });

  // useEffect(() => {
  //   setMiniMapDims(prev => ({
  //     ...prev,
  //     height: isFullView ? 200 : 100,
  //   }));
  // }, [isFullView]);

  useEffect(() => {
    if (svgRef.current) {
      const mainSvgDims = svgRef.current?.getBoundingClientRect();
      setMiniMapDims(prev => ({
        ...prev,
        width: (mainSvgDims.width / mainSvgDims.height) * miniMapDims.height,
      }));
    }
  }, [svgRef.current]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    if (
      !svgRef.current ||
      !minimapSvgRef.current ||
      !zoomBehaviorRef.current ||
      !miniMapDims.width ||
      !miniMapDims.height
    )
      return;

    const mainSvg = d3.select(svgRef.current);
    const minimapSvg = d3.select(minimapSvgRef.current);

    // Clear previous content
    minimapSvg.selectAll("*").remove();

    // Set minimap SVG dimensions
    const minimapContentHeight = isMinimized
      ? miniMapDims.headerHeight
      : miniMapDims.height - miniMapDims.headerHeight;
    minimapSvg
      .attr("width", miniMapDims.width)
      .attr("height", minimapContentHeight);

    if (isMinimized) return;

    const minimapGroup = minimapSvg
      .append("g")
      .attr("class", "minimap-content");

    // Clone and append main content
    const mainContent = svgRef.current.querySelector("g");
    if (!mainContent) return;

    const clonedContent = mainContent.cloneNode(true) as SVGGElement;
    minimapGroup.node()?.appendChild(clonedContent);

    // Calculate bounds and scale
    const bounds = mainContent.getBBox();
    const availableWidth = miniMapDims.width - miniMapDims.padding * 2;
    const availableHeight = minimapContentHeight - miniMapDims.padding * 2;

    // Calculate scale to fit content while maintaining aspect ratio
    const scale = Math.min(
      availableWidth / bounds.width,
      availableHeight / bounds.height,
      0.5 // Maximum scale factor
    );

    // Calculate translation to center the content
    const centerX =
      (miniMapDims.width - bounds.width * scale) / 2 - bounds.x * scale;
    const centerY =
      (minimapContentHeight - bounds.height * scale) / 2 - bounds.y * scale;

    // Apply transform to cloned content
    d3.select(clonedContent)
      .style("pointer-events", "none")
      .attr("transform", `translate(${centerX},${centerY}) scale(${scale})`);

    // Create and setup viewport rectangle
    const viewport = minimapSvg
      .append("rect")
      .attr("class", "viewport")
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 1.5)
      .attr("pointer-events", "all")
      .style("cursor", "move");

    // Update viewport function
    const updateViewport = () => {
      const transform = d3.zoomTransform(mainSvg.node()!);
      const mainWidth = svgRef.current!.clientWidth;
      const mainHeight = svgRef.current!.clientHeight;

      // Calculate viewport dimensions
      const vpWidth = Math.min(
        (mainWidth / transform.k) * scale,
        miniMapDims.width - miniMapDims.padding * 2
      );
      const vpHeight = Math.min(
        (mainHeight / transform.k) * scale,
        minimapContentHeight - miniMapDims.padding * 2
      );

      // Calculate viewport position
      const vpX = centerX - (transform.x * scale) / transform.k;
      const vpY = centerY - (transform.y * scale) / transform.k;

      viewport
        .attr("x", vpX)
        .attr("y", vpY)
        .attr("width", vpWidth)
        .attr("height", vpHeight);
    };

    // Setup drag behavior
    const drag = d3
      .drag<SVGRectElement, unknown>()
      .on("start", () => {
        isDraggingRef.current = true;
      })
      .on("drag", event => {
        if (!zoomBehaviorRef.current) return;

        const transform = d3.zoomTransform(mainSvg.node()!);
        const dx = event.dx / scale;
        const dy = event.dy / scale;

        const newTransform = transform.translate(-dx, -dy);
        mainSvg.call(zoomBehaviorRef.current.transform, newTransform);
        updateViewport();
      })
      .on("end", () => {
        isDraggingRef.current = false;
        updateViewport();
      });

    viewport.call(drag);

    // Set up zoom event listener
    const handleZoom = () => {
      if (!isDraggingRef.current) {
        updateViewport();
      }
    };

    mainSvg.on("zoom.minimap", handleZoom);

    // Initial viewport update
    updateViewport();

    // Watch for changes in the main content
    const observer = new MutationObserver(() => {
      if (!isDraggingRef.current) {
        updateViewport();
      }
    });

    observer.observe(mainContent, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      mainSvg.on("zoom.minimap", null);
      viewport.on(".drag", null);
      minimapSvg.selectAll("*").remove();
      observer.disconnect();
    };
  }, [svgRef?.current, zoomBehaviorRef, isMinimized, isFullView]);

  const generateMinimap = useCallback(
    () => (
      <div
        ref={minimapContainerRef}
        className="absolute bottom-4 right-4 z-20 flex flex-col overflow-hidden rounded-sm border border-grey-100 bg-white/80 backdrop-blur-md transition-all duration-300 ease-in-out"
        style={{
          width: `${miniMapDims.width}px`,
          height: isMinimized
            ? `${miniMapDims.headerHeight}px`
            : `${miniMapDims.height}px`,
        }}
      >
        <div
          className="z-25 flex min-h-[30px] flex-none cursor-pointer items-center justify-between px-2"
          onClick={toggleMinimize}
        >
          <span className="font-hankenGrotesk text-sm font-light text-gray-900">
            Navigator
          </span>
          {isMinimized ? (
            <ChevronDown className="size-4 text-gray-900" />
          ) : (
            <ChevronUp className="size-4" />
          )}
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <svg
            ref={minimapSvgRef}
            className="size-full rounded-[2px] opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </div>

        {isMinimized && (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={toggleMinimize}
          />
        )}
      </div>
    ),
    [
      svgRef?.current,
      miniMapDims,
      minimapContainerRef.current,
      isMinimized,
      toggleMinimize,
      minimapSvgRef?.current,
    ]
  );

  return miniMapDims.width && isFullView ? generateMinimap() : null;
};

export default Minimap;
