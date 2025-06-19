import { ReactNode, CSSProperties } from "react";

// Slide interface with enhanced metadata support
export interface CarouselSlide {
  id?: string | number;
  content: ReactNode;
  metadata?: Record<string, any>;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  ariaLabel?: string;
}

// Enhanced navigation types
export type NavigationVariant =
  | "default"
  | "minimal"
  | "rounded"
  | "square"
  | "floating"
  | "outline";
export type NavigationSize = "xs" | "sm" | "md" | "lg" | "xl";
export type NavigationPosition = "inside" | "outside" | "overlay";

// Enhanced indicator types
export type IndicatorVariant =
  | "dots"
  | "lines"
  | "numbers"
  | "thumbnails"
  | "progress"
  | "none";
export type IndicatorPosition = "bottom" | "top" | "left" | "right";
export type IndicatorAlignment = "start" | "center" | "end";

// Carousel size types
export type CarouselSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full"
  | "auto";

// Animation and transition types
export type TransitionType = "slide" | "fade" | "scale" | "flip" | "cube";
export type EasingFunction =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "spring";

// Enhanced navigation configuration
export interface NavigationConfig {
  variant?: NavigationVariant;
  size?: NavigationSize;
  position?: NavigationPosition;
  showPrevious?: boolean;
  showNext?: boolean;
  showOnHover?: boolean;
  alwaysVisible?: boolean;
  className?: string;
  previousClassName?: string;
  nextClassName?: string;
  previousIcon?: ReactNode;
  nextIcon?: ReactNode;
  ariaLabels?: {
    previous?: string;
    next?: string;
  };
}

// Enhanced indicator configuration
export interface IndicatorConfig {
  variant?: IndicatorVariant;
  position?: IndicatorPosition;
  alignment?: IndicatorAlignment;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  showNumbers?: boolean;
  clickable?: boolean;
  thumbnailSize?: number;
  maxVisible?: number;
  ariaLabel?: string;
}

// Comprehensive carousel options
export interface CarouselOptions {
  // Auto-play settings
  autoPlay?: boolean;
  autoPlayInterval?: number;
  autoPlayDirection?: "forward" | "backward";
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  resumeOnBlur?: boolean;

  // Navigation settings
  infinite?: boolean;
  draggable?: boolean;
  swipeable?: boolean;
  touchThreshold?: number;
  dragThreshold?: number;

  // Display settings
  startIndex?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  centerMode?: boolean;
  variableWidth?: boolean;

  // Animation settings
  transition?: TransitionType;
  transitionDuration?: number;
  easing?: EasingFunction;

  // Accessibility settings
  keyboard?: boolean;
  focusOnSelect?: boolean;
  announceSlideChanges?: boolean;

  // Performance settings
  lazyLoad?: boolean;
  preloadSlides?: number;

  // Responsive settings
  responsive?: Array<{
    breakpoint: number;
    settings: Partial<CarouselOptions>;
  }>;
}

// Event handler types
export interface CarouselEventHandlers {
  onSlideChange?: (
    currentIndex: number,
    slide: CarouselSlide,
    previousIndex: number
  ) => void;
  onSlideClick?: (
    slide: CarouselSlide,
    index: number,
    event: React.MouseEvent
  ) => void;
  onBeforeSlideChange?: (
    currentIndex: number,
    nextIndex: number
  ) => boolean | Promise<boolean>;
  onAfterSlideChange?: (currentIndex: number, slide: CarouselSlide) => void;
  onAutoPlayStart?: () => void;
  onAutoPlayStop?: () => void;
  onDragStart?: (event: React.DragEvent) => void;
  onDragEnd?: (event: React.DragEvent) => void;
  onSwipeStart?: (event: React.TouchEvent) => void;
  onSwipeEnd?: (event: React.TouchEvent) => void;
  onFocus?: (index: number) => void;
  onBlur?: (index: number) => void;
}

// Theme configuration
export interface CarouselTheme {
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    foreground?: string;
    border?: string;
    accent?: string;
  };
  spacing?: {
    gap?: string;
    padding?: string;
    margin?: string;
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    full?: string;
  };
  shadows?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
}

// Main component props interface
export interface InteractiveCarouselProps extends CarouselEventHandlers {
  // Required props
  slides: CarouselSlide[];

  // Layout props
  size?: CarouselSize;
  className?: string;
  contentClassName?: string;
  slideClassName?: string;
  style?: CSSProperties;

  // Feature configurations
  navigation?: NavigationConfig | boolean;
  indicators?: IndicatorConfig | boolean;
  options?: CarouselOptions;
  theme?: CarouselTheme;

  // Accessibility props
  "aria-label"?: string;
  "aria-describedby"?: string;
  "data-testid"?: string;
  role?: string;

  // Advanced customization
  renderSlide?: (
    slide: CarouselSlide,
    index: number,
    isActive: boolean
  ) => ReactNode;
  renderNavigation?: (props: NavigationRenderProps) => ReactNode;
  renderIndicators?: (props: IndicatorRenderProps) => ReactNode;

  // Loading and error states
  loading?: boolean;
  loadingComponent?: ReactNode;
  error?: string | Error;
  errorComponent?: ReactNode;

  // Performance props
  virtualized?: boolean;
  itemHeight?: number;
}

// Render prop interfaces
export interface NavigationRenderProps {
  currentSlide: number;
  totalSlides: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  goToSlide: (index: number) => void;
}

export interface IndicatorRenderProps {
  currentSlide: number;
  totalSlides: number;
  slides: CarouselSlide[];
  goToSlide: (index: number) => void;
}

// Carousel API interface for external control
export interface CarouselRef {
  goToSlide: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  play: () => void;
  pause: () => void;
  getCurrentSlide: () => number;
  getTotalSlides: () => number;
  refresh: () => void;
}

// Hook return type
export interface UseCarouselReturn {
  currentSlide: number;
  totalSlides: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isPlaying: boolean;
  goToSlide: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}
