import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../../../lib/utils";
import { CarouselNext, CarouselPrevious } from "../../ui/carousel";

import {
  NavigationConfig,
  NavigationVariant,
  NavigationSize,
  NavigationPosition,
} from "./types";

interface CarouselNavigationProps {
  config: NavigationConfig;
  currentSlide: number;
  totalSlides: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
  isHovered: boolean;
}

const getNavigationStyles = (
  variant: NavigationVariant,
  size: NavigationSize,
  position: NavigationPosition
): string => {
  const baseStyles =
    "relative transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";

  const sizeStyles: Record<NavigationSize, string> = {
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
  };

  const variantStyles: Record<NavigationVariant, string> = {
    default:
      "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm rounded-md hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",
    minimal:
      "bg-transparent hover:bg-gray-100/50 text-gray-600 border-none rounded-md disabled:hover:bg-transparent",
    rounded:
      "bg-white rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",
    square:
      "bg-white rounded-none border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",
    floating:
      "bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white text-gray-700 shadow-lg rounded-lg hover:shadow-xl disabled:hover:bg-white/90 disabled:hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-md disabled:hover:border-gray-300 disabled:hover:bg-transparent",
  };

  const positionStyles: Record<NavigationPosition, string> = {
    outside: "!static !transform-none",
    inside: "!absolute pointer-events-auto",
    overlay: "!absolute !z-10 pointer-events-auto",
  };

  return cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.default,
    positionStyles[position] || positionStyles.outside
  );
};

const getPositionClasses = (
  position: NavigationPosition,
  isNext: boolean,
  showOnHover: boolean,
  isHovered: boolean,
  alwaysVisible: boolean
): string => {
  const baseClasses = cn(
    showOnHover &&
      !alwaysVisible &&
      "opacity-0 transition-opacity duration-200",
    showOnHover && !alwaysVisible && isHovered && "opacity-100"
  );

  if (position === "inside" || position === "overlay") {
    return cn(
      baseClasses,
      isNext
        ? "right-2 top-1/2 -translate-y-1/2"
        : "left-2 top-1/2 -translate-y-1/2"
    );
  }

  return baseClasses;
};

const getIconSize = (size: NavigationSize): string => {
  const iconSizeMap: Record<NavigationSize, string> = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
  };
  return iconSizeMap[size] || iconSizeMap.md;
};

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  config,
  currentSlide,
  totalSlides,
  canGoNext,
  canGoPrevious,
  onNext,
  onPrevious,
  isHovered,
}) => {
  const {
    variant = "default",
    size = "md",
    position = "outside",
    showPrevious = true,
    showNext = true,
    showOnHover = false,
    alwaysVisible = true,
    className = "",
    previousClassName = "",
    nextClassName = "",
    previousIcon,
    nextIcon,
    ariaLabels = {},
  } = config;

  const navigationStyles = getNavigationStyles(variant, size, position);
  const iconSize = getIconSize(size);

  // Default icons
  const defaultPreviousIcon = <ChevronLeft className={iconSize} />;
  const defaultNextIcon = <ChevronRight className={iconSize} />;

  useEffect(() => console.log("currentSlide : ", currentSlide), [currentSlide]);

  const previousButton = showPrevious && (
    <CarouselPrevious
      className={cn(
        navigationStyles,
        getPositionClasses(
          position,
          false,
          showOnHover,
          isHovered,
          alwaysVisible
        ),
        className,
        previousClassName
      )}
      disabled={!canGoPrevious}
      onClick={onPrevious}
      aria-label={ariaLabels.previous || "Previous slide"}
      title={ariaLabels.previous || "Previous slide"}
      data-testid="carousel-previous-button"
    >
      {previousIcon || defaultPreviousIcon}
    </CarouselPrevious>
  );

  const nextButton = showNext && (
    <CarouselNext
      className={cn(
        navigationStyles,
        getPositionClasses(
          position,
          true,
          showOnHover,
          isHovered,
          alwaysVisible
        ),
        className,
        nextClassName
      )}
      disabled={!canGoNext}
      onClick={onNext}
      aria-label={ariaLabels.next || "Next slide"}
      title={ariaLabels.next || "Next slide"}
      data-testid="carousel-next-button"
    >
      {nextIcon || defaultNextIcon}
    </CarouselNext>
  );

  // For outside position, render buttons side by side
  if (position === "outside") {
    return (
      <div className="flex items-center gap-2">
        {previousButton}
        {showNext && showPrevious && (
          <div className="mx-1 text-xs text-gray-400">
            {currentSlide + 1} / {totalSlides}
          </div>
        )}
        {nextButton}
      </div>
    );
  }

  // For inside/overlay positions, render buttons absolutely positioned
  return (
    <>
      {previousButton}
      {nextButton}
    </>
  );
};
