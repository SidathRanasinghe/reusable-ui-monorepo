import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,
  CSSProperties,
} from "react";

import { cn, generateUniqueId } from "../../../lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";

import { CarouselNavigation } from "./CarouselNavigation";
import { CarouselIndicators } from "./CarouselIndicators";
import {
  InteractiveCarouselProps,
  CarouselSlide,
  NavigationConfig,
  IndicatorConfig,
  CarouselSize,
  CarouselRef,
  CarouselTheme,
} from "./types";

// Default configurations
const DEFAULT_NAVIGATION_CONFIG: NavigationConfig = {
  variant: "default",
  size: "md",
  position: "outside",
  showPrevious: true,
  showNext: true,
  showOnHover: false,
  alwaysVisible: true,
  ariaLabels: {
    previous: "Previous slide",
    next: "Next slide",
  },
};

const DEFAULT_INDICATOR_CONFIG: IndicatorConfig = {
  variant: "dots",
  position: "bottom",
  alignment: "center",
  clickable: true,
  ariaLabel: "Carousel navigation",
};

const DEFAULT_THEME: CarouselTheme = {
  colors: {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    border: "hsl(var(--border))",
    accent: "hsl(var(--accent))",
  },
  spacing: {
    gap: "1rem",
    padding: "0.5rem",
    margin: "0",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
};

// Utility functions
const getSizeStyles = (size: CarouselSize): string => {
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

const getResponsiveStyles = (
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

const applyTheme = (theme: CarouselTheme): CSSProperties => {
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

export const InteractiveCarousel = forwardRef<
  CarouselRef,
  InteractiveCarouselProps
>(
  (
    {
      slides,
      size = "lg",
      navigation = true,
      indicators = true,
      options = {},
      theme = DEFAULT_THEME,
      className = "",
      contentClassName = "",
      slideClassName = "",
      style = {},
      onSlideChange,
      onSlideClick,
      onBeforeSlideChange,
      onAfterSlideChange,
      onAutoPlayStart,
      onAutoPlayStop,
      onDragStart,
      onDragEnd,
      onSwipeStart,
      onSwipeEnd,
      onFocus,
      onBlur,
      renderSlide,
      renderNavigation,
      renderIndicators,
      loading = false,
      loadingComponent,
      error,
      errorComponent,
      "aria-label": ariaLabel = "Image carousel",
      "aria-describedby": ariaDescribedBy,
      "data-testid": testId,
      role = "region",
      virtualized = false,
      itemHeight,
    },
    ref
  ) => {
    // State management
    const [api, setApi] = useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = useState<number>(
      options.startIndex || 0
    );
    const [previousSlide, setPreviousSlide] = useState<number>(0);
    const [canGoNext, setCanGoNext] = useState<boolean>(true);
    const [canGoPrevious, setCanGoPrevious] = useState<boolean>(true);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    // Refs
    const autoPlayRef = useRef<NodeJS.Timeout>();
    const containerRef = useRef<HTMLDivElement>(null);
    const announcementRef = useRef<HTMLDivElement>(null);

    // Memoized configurations
    const navigationConfig: NavigationConfig = useMemo(() => {
      if (typeof navigation === "boolean") {
        return navigation
          ? DEFAULT_NAVIGATION_CONFIG
          : {
              ...DEFAULT_NAVIGATION_CONFIG,
              showPrevious: false,
              showNext: false,
            };
      }
      return { ...DEFAULT_NAVIGATION_CONFIG, ...navigation };
    }, [navigation]);

    const indicatorConfig: IndicatorConfig = useMemo(() => {
      if (typeof indicators === "boolean") {
        return indicators
          ? DEFAULT_INDICATOR_CONFIG
          : { ...DEFAULT_INDICATOR_CONFIG, variant: "none" };
      }
      return { ...DEFAULT_INDICATOR_CONFIG, ...indicators };
    }, [indicators]);

    const mergedTheme: CarouselTheme = useMemo(
      () => ({
        ...DEFAULT_THEME,
        ...theme,
        colors: { ...DEFAULT_THEME.colors, ...theme.colors },
        spacing: { ...DEFAULT_THEME.spacing, ...theme.spacing },
        borderRadius: { ...DEFAULT_THEME.borderRadius, ...theme.borderRadius },
        shadows: { ...DEFAULT_THEME.shadows, ...theme.shadows },
      }),
      [theme]
    );

    // Destructure options with defaults
    const {
      autoPlay = false,
      autoPlayInterval = 3000,
      autoPlayDirection = "forward",
      infinite = true,
      draggable = true,
      swipeable = true,
      touchThreshold = 50,
      dragThreshold = 100,
      pauseOnHover = true,
      pauseOnFocus = true,
      resumeOnBlur = true,
      slidesToShow = 1,
      slidesToScroll = 1,
      centerMode = false,
      variableWidth = false,
      transition = "slide",
      transitionDuration = 100,
      easing = "ease-in-out",
      keyboard = true,
      focusOnSelect = true,
      announceSlideChanges = true,
      lazyLoad = false,
      preloadSlides = 1,
      responsive = [],
    } = options;

    // Auto-play functionality
    const startAutoPlay = useCallback(() => {
      if (!autoPlay || !api || isPlaying) return;

      setIsPlaying(true);
      onAutoPlayStart?.();

      autoPlayRef.current = setInterval(() => {
        if (pauseOnHover && isHovered) return;
        if (pauseOnFocus && isFocused) return;

        if (autoPlayDirection === "forward") {
          if (infinite) {
            api.scrollNext();
          } else if (canGoNext) {
            api.scrollNext();
          } else {
            api.scrollTo(0);
          }
        } else {
          if (infinite) {
            api.scrollPrev();
          } else if (canGoPrevious) {
            api.scrollPrev();
          } else {
            api.scrollTo(slides.length - 1);
          }
        }
      }, autoPlayInterval);
    }, [
      autoPlay,
      api,
      autoPlayInterval,
      autoPlayDirection,
      pauseOnHover,
      pauseOnFocus,
      isHovered,
      isFocused,
      infinite,
      canGoNext,
      canGoPrevious,
      slides.length,
      isPlaying,
      onAutoPlayStart,
    ]);

    const stopAutoPlay = useCallback(() => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = undefined;
        setIsPlaying(false);
        onAutoPlayStop?.();
      }
    }, [onAutoPlayStop]);

    // Navigation functions
    const goToSlide = useCallback(
      async (index: number) => {
        if (!api || index === currentSlide || isTransitioning) return;

        const canProceed = await onBeforeSlideChange?.(currentSlide, index);
        if (canProceed === false) return;

        setIsTransitioning(true);
        api.scrollTo(index);
      },
      [api, currentSlide, isTransitioning, onBeforeSlideChange]
    );

    const goToNext = useCallback(() => {
      if (!api || isTransitioning) return;
      api.scrollNext();
    }, [api, isTransitioning]);

    const goToPrevious = useCallback(() => {
      if (!api || isTransitioning) return;
      api.scrollPrev();
    }, [api, isTransitioning]);

    // Expose API through ref
    useImperativeHandle(
      ref,
      () => ({
        goToSlide,
        goToNext,
        goToPrevious,
        play: startAutoPlay,
        pause: stopAutoPlay,
        getCurrentSlide: () => currentSlide,
        getTotalSlides: () => slides.length,
        refresh: () => api?.reInit(),
      }),
      [
        goToSlide,
        goToNext,
        goToPrevious,
        startAutoPlay,
        stopAutoPlay,
        currentSlide,
        slides.length,
        api,
      ]
    );

    const updateCarouselState = useCallback(() => {
      const current = api.selectedScrollSnap();
      const previous = api.canScrollPrev();
      const next = api.canScrollNext();

      console.log("current >>>>> ", current);

      setPreviousSlide(currentSlide);
      setCurrentSlide(current);
      setCanGoPrevious(previous);
      setCanGoNext(next);
      setIsTransitioning(false);

      // Announce slide change for screen readers
      if (announceSlideChanges && announcementRef.current) {
        const slide = slides[current];
        const announcement =
          slide?.ariaLabel || `Slide ${current + 1} of ${slides.length}`;
        announcementRef.current.textContent = announcement;
      }

      // Call event handlers
      if (onSlideChange && slides[current]) {
        onSlideChange(current, slides[current], previousSlide);
      }

      if (onAfterSlideChange && slides[current]) {
        onAfterSlideChange(current, slides[current]);
      }
    }, [
      announceSlideChanges,
      api,
      currentSlide,
      onAfterSlideChange,
      onSlideChange,
      previousSlide,
      slides,
    ]);

    // Initialize carousel API and event listeners
    useEffect(() => {
      if (!api) return;

      // Set initial state
      updateCarouselState();

      // Listen for slide changes
      api.on("select", updateCarouselState);

      return () => {
        api.off("select", updateCarouselState);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [api, slides, announceSlideChanges]);

    // Auto-play management
    useEffect(() => {
      if (autoPlay && !isPlaying) {
        startAutoPlay();
      } else if (!autoPlay && isPlaying) {
        stopAutoPlay();
      }

      return () => {
        stopAutoPlay();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoPlay, isPlaying]);

    // Keyboard navigation
    useEffect(() => {
      if (!keyboard) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (!containerRef.current?.contains(event.target as Node)) return;

        switch (event.key) {
          case "ArrowLeft":
            event.preventDefault();
            goToPrevious();
            break;
          case "ArrowRight":
            event.preventDefault();
            goToNext();
            break;
          case "Home":
            event.preventDefault();
            goToSlide(0);
            break;
          case "End":
            event.preventDefault();
            goToSlide(slides.length - 1);
            break;
          case " ":
          case "Spacebar":
            event.preventDefault();
            if (isPlaying) {
              stopAutoPlay();
            } else {
              startAutoPlay();
            }
            break;
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyboard, slides.length, isPlaying]);

    // Event handlers
    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
      if (pauseOnHover && autoPlay) {
        stopAutoPlay();
      }
    }, [pauseOnHover, autoPlay, stopAutoPlay]);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
      if (pauseOnHover && autoPlay && resumeOnBlur) {
        startAutoPlay();
      }
    }, [pauseOnHover, autoPlay, resumeOnBlur, startAutoPlay]);

    const handleFocus = useCallback(
      (index: number) => {
        setIsFocused(true);
        if (focusOnSelect) {
          goToSlide(index);
        }
        onFocus?.(index);
      },
      [focusOnSelect, goToSlide, onFocus]
    );

    const handleBlur = useCallback(
      (index: number) => {
        setIsFocused(false);
        if (pauseOnFocus && autoPlay && resumeOnBlur) {
          startAutoPlay();
        }
        onBlur?.(index);
      },
      [pauseOnFocus, autoPlay, resumeOnBlur, startAutoPlay, onBlur]
    );

    const handleSlideClick = useCallback(
      (slide: CarouselSlide, index: number, event: React.MouseEvent) => {
        if (slide.disabled) return;
        onSlideClick?.(slide, index, event);
      },
      [onSlideClick]
    );

    // Loading state
    if (loading) {
      return (
        <div className={cn("flex items-center justify-center p-8", className)}>
          {loadingComponent || (
            <div className="text-center">
              <div className="mx-auto mb-2 size-8 animate-spin rounded-full border-b-2 border-primary" />
              <p className="text-sm text-gray-500">Loading carousel...</p>
            </div>
          )}
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div
          className={cn(
            "flex items-center justify-center p-8 text-red-500",
            className
          )}
        >
          {errorComponent || (
            <div className="text-center">
              <p className="text-sm">Failed to load carousel</p>
              {typeof error === "string" && (
                <p className="mt-1 text-xs text-gray-500">{error}</p>
              )}
            </div>
          )}
        </div>
      );
    }

    // Validate slides
    if (!slides || slides.length === 0) {
      return (
        <div
          className={cn(
            "flex items-center justify-center p-8 text-gray-500",
            className
          )}
        >
          No slides to display
        </div>
      );
    }

    const showNavigation =
      navigationConfig.showNext || navigationConfig.showPrevious;
    const showIndicators = indicatorConfig.variant !== "none";
    const themeStyles = applyTheme(mergedTheme);
    const responsiveStyles = getResponsiveStyles(options);

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative w-full overflow-hidden",
          getSizeStyles(size),
          className
        )}
        style={{ ...themeStyles, ...responsiveStyles, ...style }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role={role}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        data-testid={testId}
      >
        {/* Screen reader announcements */}
        <div
          ref={announcementRef}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />

        <Carousel
          setApi={setApi}
          className={cn(
            "flex w-full flex-col",
            indicatorConfig.position === "top" ? "gap-4" : "gap-4"
          )}
          opts={{
            loop: infinite,
            dragFree: false,
            watchDrag: draggable,
            slidesToScroll,
            startIndex: options.startIndex || 0,
            duration: transitionDuration,
          }}
        >
          {/* Top indicators */}
          {showIndicators &&
            indicatorConfig.position === "top" &&
            (renderIndicators ? (
              renderIndicators({
                currentSlide,
                totalSlides: slides.length,
                slides,
                goToSlide,
              })
            ) : (
              <CarouselIndicators
                config={indicatorConfig}
                currentSlide={currentSlide}
                totalSlides={slides.length}
                slides={slides}
                api={api}
                onSlideChange={goToSlide}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            ))}

          {/* Carousel content with navigation */}
          <div className="relative flex items-center gap-2">
            {showNavigation &&
              navigationConfig.position === "outside" &&
              (renderNavigation ? (
                renderNavigation({
                  currentSlide,
                  totalSlides: slides.length,
                  canGoNext,
                  canGoPrevious,
                  goToNext,
                  goToPrevious,
                  goToSlide,
                })
              ) : (
                <CarouselNavigation
                  config={navigationConfig}
                  currentSlide={currentSlide}
                  totalSlides={slides.length}
                  canGoNext={canGoNext}
                  canGoPrevious={canGoPrevious}
                  onNext={goToNext}
                  onPrevious={goToPrevious}
                  isHovered={isHovered}
                />
              ))}

            <CarouselContent
              className={cn("flex-1", contentClassName)}
              style={{
                touchAction: draggable ? "pan-y pinch-zoom" : "none",
                transition: `transform ${transitionDuration}ms ${easing}`,
              }}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onTouchStart={onSwipeStart}
              onTouchEnd={onSwipeEnd}
            >
              {slides.map((slide, index) => (
                <CarouselItem
                  key={slide.id || generateUniqueId()}
                  className={cn(
                    slidesToShow > 1 && `basis-1/${slidesToShow}`,
                    centerMode && "transform transition-transform duration-300",
                    slide.disabled && "cursor-not-allowed opacity-50",
                    onSlideClick && !slide.disabled && "cursor-pointer",
                    slideClassName,
                    slide.className
                  )}
                  style={slide.style}
                  onClick={event => handleSlideClick(slide, index, event)}
                  onFocus={() => handleFocus(index)}
                  onBlur={() => handleBlur(index)}
                  tabIndex={focusOnSelect ? 0 : -1}
                  aria-label={slide.ariaLabel || `Slide ${index + 1}`}
                  role="tabpanel"
                  aria-hidden={currentSlide !== index}
                >
                  {renderSlide
                    ? renderSlide(slide, index, currentSlide === index)
                    : slide.content}
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Inside/Overlay navigation */}
            {showNavigation &&
              (navigationConfig.position === "inside" ||
                navigationConfig.position === "overlay") && (
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 flex items-center justify-between",
                    navigationConfig.position === "overlay" && "z-10"
                  )}
                >
                  {renderNavigation ? (
                    <div className="pointer-events-auto">
                      {renderNavigation({
                        currentSlide,
                        totalSlides: slides.length,
                        canGoNext,
                        canGoPrevious,
                        goToNext,
                        goToPrevious,
                        goToSlide,
                      })}
                    </div>
                  ) : (
                    <CarouselNavigation
                      config={{
                        ...navigationConfig,
                        position: "inside",
                      }}
                      currentSlide={currentSlide}
                      totalSlides={slides.length}
                      canGoNext={canGoNext}
                      canGoPrevious={canGoPrevious}
                      onNext={goToNext}
                      onPrevious={goToPrevious}
                      isHovered={isHovered}
                    />
                  )}
                </div>
              )}
          </div>

          {/* Bottom indicators */}
          {showIndicators &&
            indicatorConfig.position === "bottom" &&
            (renderIndicators ? (
              renderIndicators({
                currentSlide,
                totalSlides: slides.length,
                slides,
                goToSlide,
              })
            ) : (
              <CarouselIndicators
                config={indicatorConfig}
                currentSlide={currentSlide}
                totalSlides={slides.length}
                slides={slides}
                api={api}
                onSlideChange={goToSlide}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            ))}

          {/* Left indicators */}
          {showIndicators && indicatorConfig.position === "left" && (
            <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
              {renderIndicators ? (
                renderIndicators({
                  currentSlide,
                  totalSlides: slides.length,
                  slides,
                  goToSlide,
                })
              ) : (
                <CarouselIndicators
                  config={indicatorConfig}
                  currentSlide={currentSlide}
                  totalSlides={slides.length}
                  slides={slides}
                  api={api}
                  onSlideChange={goToSlide}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              )}
            </div>
          )}

          {/* Right indicators */}
          {showIndicators && indicatorConfig.position === "right" && (
            <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
              {renderIndicators ? (
                renderIndicators({
                  currentSlide,
                  totalSlides: slides.length,
                  slides,
                  goToSlide,
                })
              ) : (
                <CarouselIndicators
                  config={indicatorConfig}
                  currentSlide={currentSlide}
                  totalSlides={slides.length}
                  slides={slides}
                  api={api}
                  onSlideChange={goToSlide}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              )}
            </div>
          )}
        </Carousel>
      </div>
    );
  }
);

InteractiveCarousel.displayName = "InteractiveCarousel";

export default InteractiveCarousel;
