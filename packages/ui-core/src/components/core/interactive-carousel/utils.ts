import { CSSProperties } from "react";

import { CarouselSize, CarouselTheme, InteractiveCarouselProps } from "./types";

export const getSizeStyles = (size: CarouselSize): string => {
  const sizeMap: Record<CarouselSize, string> = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    "2xl": "max-w-7xl",
    full: "max-w-full",
    auto: "max-w-none",
  };
  return sizeMap[size] || sizeMap.lg;
};

export const getResponsiveStyles = (
  options: InteractiveCarouselProps["options"]
): CSSProperties => {
  const responsive = options?.responsive || [];
  const styles: CSSProperties = {};

  responsive.forEach(breakpoint => {
    // This would typically be handled by CSS media queries
    // For now, we'll apply base styles
    if (breakpoint.settings.slidesToShow) {
      (styles as any)["--slides-to-show"] =
        breakpoint.settings.slidesToShow.toString();
    }
  });

  return styles;
};

export const applyTheme = (theme: CarouselTheme): CSSProperties => {
  const cssVariables: CSSProperties = {};

  if (theme.colors) {
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (value) {
        cssVariables[`--carousel-${key}` as any] = value;
      }
    });
  }

  if (theme.spacing) {
    Object.entries(theme.spacing).forEach(([key, value]) => {
      if (value) {
        cssVariables[`--carousel-${key}` as any] = value;
      }
    });
  }

  return cssVariables;
};
