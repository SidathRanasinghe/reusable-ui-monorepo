import React, { useCallback, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3-zoom";
import { ChevronDown, ChevronUp, Maximize2, Minimize2 } from "lucide-react";

export interface MinimapProps {
  svgRef: React.RefObject<SVGSVGElement>;
  zoomBehaviorRef: React.MutableRefObject<
    ZoomBehavior<SVGSVGElement, unknown> | undefined
  >;

  // Customization props
  width?: number;
  height?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  theme?: "light" | "dark";
  className?: string;

  // Control props
  isCollapsible?: boolean;
  isResizable?: boolean;
  defaultCollapsed?: boolean;
  showControls?: boolean;

  // Style customization
  backgroundColor?: string;
  borderColor?: string;
  viewportColor?: string;
  opacity?: number;

  // Size constraints
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;

  // Callbacks
  onToggle?: (collapsed: boolean) => void;
  onResize?: (width: number, height: number) => void;
}

interface MinimapDimensions {
  width: number;
  height: number;
  headerHeight: number;
  padding: number;
}

const Minimap: React.FC<MinimapProps> = ({
  svgRef,
  zoomBehaviorRef,
  width = 200,
  height = 150,
  position = "bottom-right",
  theme = "light",
  className = "",
  isCollapsible = true,
  isResizable = false,
  defaultCollapsed = true,
  showControls = true,
  backgroundColor,
  borderColor,
  viewportColor = "#3b82f6",
  opacity = 0.9,
  minWidth = 120,
  maxWidth = 400,
  minHeight = 80,
  maxHeight = 300,
  onToggle,
  onResize,
}) => {
  const minimapContainerRef = useRef<HTMLDivElement>(null);
  const minimapSvgRef = useRef<SVGSVGElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [currentDimensions, setCurrentDimensions] = useState<MinimapDimensions>(
    {
      width,
      height,
      headerHeight: showControls ? 32 : 0,
      padding: 8,
    }
  );
  const isDraggingViewportRef = useRef(false);
  const isResizingRef = useRef(false);

  // Calculate responsive width based on main SVG aspect ratio
  useEffect(() => {
    if (svgRef.current && !isResizingRef.current) {
      const mainSvgRect = svgRef.current.getBoundingClientRect();
      const aspectRatio = mainSvgRect.width / mainSvgRect.height;
      const calculatedWidth = Math.min(
        Math.max(height * aspectRatio, minWidth),
        maxWidth
      );

      setCurrentDimensions(prev => ({
        ...prev,
        width: calculatedWidth,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [svgRef.current, height, minWidth, maxWidth]);

  // Position classes
  const getPositionClasses = () => {
    const baseClasses = "absolute z-20";
    switch (position) {
      case "top-left":
        return `${baseClasses} top-4 left-4`;
      case "top-right":
        return `${baseClasses} top-4 right-4`;
      case "bottom-left":
        return `${baseClasses} bottom-4 left-4`;
      case "bottom-right":
      default:
        return `${baseClasses} bottom-4 right-4`;
    }
  };

  // Theme classes
  const getThemeClasses = () => {
    if (theme === "dark") {
      return {
        container: "bg-gray-800/90 border-gray-600 text-white",
        header: "text-gray-100",
        svg: "opacity-80 hover:opacity-100",
      };
    }
    return {
      container: "bg-white/90 border-gray-200 text-gray-900",
      header: "text-gray-700",
      svg: "opacity-80 hover:opacity-100",
    };
  };

  const themeClasses = getThemeClasses();

  const toggleCollapse = useCallback(() => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle?.(newState);
  }, [isCollapsed, onToggle]);

  // Resize handler for resizable minimap
  const handleResize = useCallback(
    (newWidth: number, newHeight: number) => {
      const constrainedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
      const constrainedHeight = Math.min(
        Math.max(newHeight, minHeight),
        maxHeight
      );

      setCurrentDimensions(prev => ({
        ...prev,
        width: constrainedWidth,
        height: constrainedHeight,
      }));

      onResize?.(constrainedWidth, constrainedHeight);
    },
    [minWidth, maxWidth, minHeight, maxHeight, onResize]
  );

  // Main minimap rendering effect
  useEffect(() => {
    if (
      !svgRef.current ||
      !minimapSvgRef.current ||
      !zoomBehaviorRef.current ||
      isCollapsed
    )
      return;

    const mainSvg = d3.select(svgRef.current);
    const minimapSvg = d3.select(minimapSvgRef.current);

    // Clear previous content
    minimapSvg.selectAll("*").remove();

    // Set minimap SVG dimensions
    const contentHeight =
      currentDimensions.height - currentDimensions.headerHeight;
    minimapSvg
      .attr("width", currentDimensions.width)
      .attr("height", contentHeight);

    const minimapGroup = minimapSvg
      .append("g")
      .attr("class", "minimap-content");

    // Clone main content
    const mainContent = svgRef.current.querySelector("g");
    if (!mainContent) return;

    const clonedContent = mainContent.cloneNode(true) as SVGGElement;
    minimapGroup.node()?.appendChild(clonedContent);

    // Calculate scaling and positioning
    const bounds = mainContent.getBBox();
    if (!bounds.width || !bounds.height) return;

    const availableWidth =
      currentDimensions.width - currentDimensions.padding * 2;
    const availableHeight = contentHeight - currentDimensions.padding * 2;

    const scale = Math.min(
      availableWidth / bounds.width,
      availableHeight / bounds.height,
      0.8 // Maximum scale to prevent over-sizing
    );

    const centerX =
      (currentDimensions.width - bounds.width * scale) / 2 - bounds.x * scale;
    const centerY =
      (contentHeight - bounds.height * scale) / 2 - bounds.y * scale;

    // Apply transform to cloned content with reduced opacity for better visibility
    d3.select(clonedContent)
      .style("pointer-events", "none")
      .style("opacity", "0.6")
      .attr("transform", `translate(${centerX},${centerY}) scale(${scale})`);

    // Create viewport indicator
    const viewport = minimapSvg
      .append("rect")
      .attr("class", "minimap-viewport")
      .attr("fill", "none")
      .attr("stroke", viewportColor)
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "3,3")
      .attr("pointer-events", "all")
      .style("cursor", "move");

    // Update viewport position and size
    const updateViewport = () => {
      const transform = d3.zoomTransform(mainSvg.node()!);
      const mainRect = svgRef.current!.getBoundingClientRect();

      const vpWidth = Math.min(
        (mainRect.width / transform.k) * scale,
        availableWidth
      );
      const vpHeight = Math.min(
        (mainRect.height / transform.k) * scale,
        availableHeight
      );

      const vpX = Math.max(
        currentDimensions.padding,
        Math.min(
          centerX - (transform.x * scale) / transform.k,
          currentDimensions.width - vpWidth - currentDimensions.padding
        )
      );
      const vpY = Math.max(
        currentDimensions.padding,
        Math.min(
          centerY - (transform.y * scale) / transform.k,
          contentHeight - vpHeight - currentDimensions.padding
        )
      );

      viewport
        .attr("x", vpX)
        .attr("y", vpY)
        .attr("width", vpWidth)
        .attr("height", vpHeight);
    };

    // Viewport drag behavior
    const drag = d3
      .drag<SVGRectElement, unknown>()
      .on("start", () => {
        isDraggingViewportRef.current = true;
        viewport.style("cursor", "grabbing");
      })
      .on("drag", event => {
        if (!zoomBehaviorRef.current) return;

        const transform = d3.zoomTransform(mainSvg.node()!);
        const dx = event.dx / scale;
        const dy = event.dy / scale;

        const newTransform = transform.translate(
          -dx * transform.k,
          -dy * transform.k
        );
        mainSvg.call(zoomBehaviorRef.current.transform, newTransform);
      })
      .on("end", () => {
        isDraggingViewportRef.current = false;
        viewport.style("cursor", "move");
      });

    viewport.call(drag);

    // Listen to main SVG zoom events
    const handleZoom = () => {
      if (!isDraggingViewportRef.current) {
        updateViewport();
      }
    };

    mainSvg.on("zoom.minimap", handleZoom);
    updateViewport();

    // Observe changes in main content
    const observer = new MutationObserver(() => {
      if (!isDraggingViewportRef.current) {
        // Debounce updates
        requestAnimationFrame(updateViewport);
      }
    });

    observer.observe(mainContent, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      mainSvg.on("zoom.minimap", null);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    svgRef.current,
    zoomBehaviorRef.current,
    isCollapsed,
    currentDimensions,
    viewportColor,
  ]);

  if (!svgRef.current) return null;

  const containerStyle = {
    width: `${currentDimensions.width}px`,
    height: isCollapsed
      ? `${currentDimensions.headerHeight}px`
      : `${currentDimensions.height}px`,
    backgroundColor,
    borderColor,
    opacity,
  };

  return (
    <div
      ref={minimapContainerRef}
      className={` ${getPositionClasses()} ${themeClasses.container} ${className} flex flex-col overflow-hidden rounded-lg border shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out`}
      style={containerStyle}
    >
      {/* Header */}
      {showControls && (
        <div
          className={`flex min-h-[32px] flex-none items-center justify-between px-3 py-1 ${isCollapsible ? "cursor-pointer hover:bg-black/5" : ""} ${themeClasses.header} `}
          onClick={isCollapsible ? toggleCollapse : undefined}
        >
          <span className="select-none text-xs font-medium">Navigator</span>
          <div className="flex items-center gap-1">
            {isResizable && !isCollapsed && (
              <button
                className="rounded p-1 hover:bg-black/10"
                onClick={e => {
                  e.stopPropagation();
                  // Toggle between preset sizes
                  const newHeight =
                    currentDimensions.height === height ? height * 1.5 : height;
                  handleResize(currentDimensions.width, newHeight);
                }}
              >
                {currentDimensions.height === height ? (
                  <Maximize2 className="size-3" />
                ) : (
                  <Minimize2 className="size-3" />
                )}
              </button>
            )}
            {isCollapsible && (
              <div className="p-1">
                {isCollapsed ? (
                  <ChevronUp className="size-3" />
                ) : (
                  <ChevronDown className="size-3" />
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      {!isCollapsed && (
        <div className="relative flex flex-1 items-center justify-center overflow-hidden">
          <svg
            ref={minimapSvgRef}
            className={`size-full transition-opacity duration-200 ${themeClasses.svg}`}
          />

          {/* Resize handle for resizable minimap */}
          {isResizable && (
            <div
              className="absolute bottom-0 right-0 size-3 cursor-se-resize opacity-50 hover:opacity-100"
              onMouseDown={e => {
                e.preventDefault();
                isResizingRef.current = true;
                const startX = e.clientX;
                const startY = e.clientY;
                const startWidth = currentDimensions.width;
                const startHeight = currentDimensions.height;

                const handleMouseMove = (e: MouseEvent) => {
                  const deltaX = e.clientX - startX;
                  const deltaY = e.clientY - startY;
                  handleResize(startWidth + deltaX, startHeight + deltaY);
                };

                const handleMouseUp = () => {
                  isResizingRef.current = false;
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
                };

                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
              }}
            >
              <div className="size-full translate-x-1/2 translate-y-1/2 rotate-45 bg-gray-400" />
            </div>
          )}
        </div>
      )}

      {/* Click overlay for collapsed state */}
      {isCollapsed && isCollapsible && (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={toggleCollapse}
        />
      )}
    </div>
  );
};

export default Minimap;
