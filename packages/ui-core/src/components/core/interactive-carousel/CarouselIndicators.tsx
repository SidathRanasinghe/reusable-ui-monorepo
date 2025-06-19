import React, { useCallback, useMemo } from "react";

import { CarouselApi } from "../../ui/carousel";
import { cn } from "../../../lib/utils";

import {
  IndicatorConfig,
  IndicatorVariant,
  IndicatorPosition,
  IndicatorAlignment,
  CarouselSlide,
} from "./types";

interface CarouselIndicatorsProps {
  config: IndicatorConfig;
  currentSlide: number;
  totalSlides: number;
  slides: CarouselSlide[];
  api?: CarouselApi;
  onSlideChange?: (index: number) => void;
  onFocus?: (index: number) => void;
  onBlur?: (index: number) => void;
}

const getIndicatorStyles = (
  variant: IndicatorVariant,
  isActive: boolean,
  activeClassName?: string,
  inactiveClassName?: string,
  disabled?: boolean
): string => {
  const baseStyles = cn(
    "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    !disabled && "cursor-pointer"
  );

  // Custom class overrides
  if (activeClassName && isActive) {
    return cn(baseStyles, activeClassName);
  }

  if (inactiveClassName && !isActive) {
    return cn(baseStyles, inactiveClassName);
  }

  const variantStyles: Record<IndicatorVariant, string> = {
    dots: cn(
      "size-2 rounded-full border-2 border-transparent",
      isActive
        ? "bg-primary scale-110 border-primary/20"
        : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
    ),
    lines: cn(
      "h-1 rounded-full transition-all duration-300",
      isActive
        ? "w-8 bg-primary shadow-sm"
        : "w-4 bg-gray-300 hover:bg-gray-400 hover:w-6"
    ),
    numbers: cn(
      "min-w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center border-2",
      isActive
        ? "bg-primary text-white border-primary shadow-sm scale-105"
        : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:border-gray-400 hover:scale-105"
    ),
    thumbnails: cn(
      "relative overflow-hidden rounded border-2 transition-all duration-200",
      isActive
        ? "border-primary shadow-md scale-105"
        : "border-gray-300 hover:border-gray-400 hover:scale-102 opacity-70 hover:opacity-90"
    ),
    progress: cn("h-1 bg-gray-300 rounded-full overflow-hidden", "relative"),
    none: "",
  };

  return cn(baseStyles, variantStyles[variant] || variantStyles.dots);
};

const getContainerStyles = (
  position: IndicatorPosition,
  alignment: IndicatorAlignment,
  variant: IndicatorVariant
): string => {
  const alignmentMap: Record<IndicatorAlignment, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  const baseStyles = "flex";
  const alignmentClass = alignmentMap[alignment] || alignmentMap.center;

  // Position-specific styles
  const positionStyles: Record<IndicatorPosition, string> = {
    top: "order-first",
    bottom: "order-last",
    left: "flex-col items-center",
    right: "flex-col items-center",
  };

  // Variant-specific container styles
  const variantContainerStyles: Record<IndicatorVariant, string> = {
    dots: "gap-2",
    lines: "gap-3",
    numbers: "gap-1",
    thumbnails: "gap-2",
    progress: "gap-0",
    none: "",
  };

  return cn(
    baseStyles,
    alignmentClass,
    positionStyles[position],
    variantContainerStyles[variant],
    position === "left" || position === "right" ? "py-2" : "px-2"
  );
};

const getThumbnailSize = (thumbnailSize?: number): React.CSSProperties => {
  const size = thumbnailSize || 40;
  return {
    width: `${size}px`,
    height: `${size}px`,
  };
};

const ProgressIndicator: React.FC<{
  currentSlide: number;
  totalSlides: number;
  className?: string;
}> = ({ currentSlide, totalSlides, className }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div
      className={cn(
        "h-1 w-32 overflow-hidden rounded-full bg-gray-300",
        className
      )}
    >
      <div
        className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={currentSlide + 1}
        aria-valuemin={1}
        aria-valuemax={totalSlides}
        aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
      />
    </div>
  );
};

const ThumbnailIndicator: React.FC<{
  slide: CarouselSlide;
  index: number;
  isActive: boolean;
  onClick: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  size?: number;
  className?: string;
}> = ({
  slide,
  index,
  isActive,
  onClick,
  onFocus,
  onBlur,
  size,
  className,
}) => {
  // Extract thumbnail from slide content or metadata
  const thumbnail = slide.metadata?.thumbnail || slide.metadata?.image;

  return (
    <button
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}
      style={getThumbnailSize(size)}
      role="tab"
      aria-selected={isActive}
      aria-label={slide.ariaLabel || `Go to slide ${index + 1}`}
      tabIndex={isActive ? 0 : -1}
      data-testid={`carousel-thumbnail-${index}`}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={slide.ariaLabel || `Slide ${index + 1} thumbnail`}
          className="size-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-gray-200 text-xs text-gray-500">
          {index + 1}
        </div>
      )}
      {isActive && <div className="absolute inset-0 rounded bg-primary/20" />}
    </button>
  );
};

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  config,
  currentSlide,
  totalSlides,
  slides,
  api,
  onSlideChange,
  onFocus,
  onBlur,
}) => {
  const {
    variant = "dots",
    position = "bottom",
    alignment = "center",
    className = "",
    activeClassName,
    inactiveClassName,
    showNumbers = false,
    clickable = true,
    thumbnailSize = 40,
    maxVisible,
    ariaLabel = "Carousel navigation",
  } = config;

  // Calculate visible range for maxVisible prop
  const visibleRange = useMemo(() => {
    if (!maxVisible || maxVisible >= totalSlides) {
      return { start: 0, end: totalSlides - 1 };
    }

    const half = Math.floor(maxVisible / 2);
    let start = Math.max(0, currentSlide - half);
    const end = Math.min(totalSlides - 1, start + maxVisible - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < maxVisible) {
      start = Math.max(0, end - maxVisible + 1);
    }

    return { start, end };
  }, [currentSlide, totalSlides, maxVisible]);

  const handleIndicatorClick = useCallback(
    (index: number) => {
      if (!clickable) return;

      api?.scrollTo(index);
      onSlideChange?.(index);
    },
    [api, clickable, onSlideChange]
  );

  const handleFocus = useCallback(
    (index: number) => {
      onFocus?.(index);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (index: number) => {
      onBlur?.(index);
    },
    [onBlur]
  );

  const containerStyles = getContainerStyles(position, alignment, variant);

  // Don't render if variant is none or only one slide
  if (variant === "none" || totalSlides <= 1) {
    return null;
  }

  // Render progress indicator
  if (variant === "progress") {
    return (
      <div className={cn(containerStyles, className)} role="progressbar">
        <ProgressIndicator
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          className="mx-auto"
        />
        <div className="sr-only" aria-live="polite">
          Slide {currentSlide + 1} of {totalSlides}
        </div>
      </div>
    );
  }

  // Generate indicators array
  const indicators = [];
  const startIndex = maxVisible ? visibleRange.start : 0;
  const endIndex = maxVisible ? visibleRange.end : totalSlides - 1;

  for (let index = startIndex; index <= endIndex; index++) {
    const isActive = currentSlide === index;
    const slide = slides[index];

    if (variant === "thumbnails") {
      indicators.push(
        <ThumbnailIndicator
          key={index}
          slide={slide}
          index={index}
          isActive={isActive}
          onClick={() => handleIndicatorClick(index)}
          onFocus={() => handleFocus(index)}
          onBlur={() => handleBlur(index)}
          size={thumbnailSize}
          className={getIndicatorStyles(
            variant,
            isActive,
            activeClassName,
            inactiveClassName,
            slide?.disabled
          )}
        />
      );
    } else {
      indicators.push(
        <button
          key={index}
          onClick={() => handleIndicatorClick(index)}
          onFocus={() => handleFocus(index)}
          onBlur={() => handleBlur(index)}
          className={getIndicatorStyles(
            variant,
            isActive,
            activeClassName,
            inactiveClassName,
            slide?.disabled
          )}
          disabled={!clickable || slide?.disabled}
          role="tab"
          aria-selected={isActive}
          aria-label={slide?.ariaLabel || `Go to slide ${index + 1}`}
          tabIndex={isActive ? 0 : -1}
          data-testid={`carousel-indicator-${index}`}
        >
          {(variant === "numbers" || showNumbers) && <span>{index + 1}</span>}
        </button>
      );
    }
  }

  // Add ellipsis indicators if using maxVisible
  if (maxVisible && maxVisible < totalSlides) {
    if (visibleRange.start > 0) {
      indicators.unshift(
        <div
          key="ellipsis-start"
          className="flex items-center justify-center px-1 text-xs text-gray-400"
        >
          ...
        </div>
      );
    }
    if (visibleRange.end < totalSlides - 1) {
      indicators.push(
        <div
          key="ellipsis-end"
          className="flex items-center justify-center px-1 text-xs text-gray-400"
        >
          ...
        </div>
      );
    }
  }

  return (
    <div
      className={cn(containerStyles, className)}
      role="tablist"
      aria-label={ariaLabel}
      data-testid="carousel-indicators"
    >
      {indicators}

      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {totalSlides}
      </div>
    </div>
  );
};
