import { CSSProperties, ReactNode } from "react";

export interface CircularGaugeProps {
  /** Current value to display */
  value: number;
  /** Maximum value for the gauge (default: 100) */
  max?: number;
  /** Minimum value for the gauge (default: 0) */
  min?: number;
  /** Unit to display after the value */
  unit?: string;
  /** Label text below the value */
  label?: string;
  /** Size of the gauge in pixels */
  size?: number;
  /** Thickness of the gauge track */
  thickness?: number;
  /** Number of ticks around the gauge */
  tickCount?: number;
  /** Start angle in degrees (0 = top, 90 = right) */
  startAngle?: number;
  /** End angle in degrees for partial gauges */
  endAngle?: number;
  /** Show animated progress */
  animated?: boolean;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Animation easing function */
  animationEasing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  /** Show ticks */
  showTicks?: boolean;
  /** Show value text */
  showValue?: boolean;
  /** Show label text */
  showLabel?: boolean;
  /** Format function for the displayed value */
  valueFormatter?: (value: number) => string;
  /** Gradient colors for the progress arc */
  gradient?: {
    from: string;
    to: string;
    id?: string;
    /** Gradient direction: 'horizontal' | 'vertical' | 'radial' */
    direction?: "horizontal" | "vertical" | "radial";
  };
  /** Color variants */
  variant?: "primary" | "success" | "warning" | "error" | "info" | "custom";
  /** Custom colors */
  colors?: {
    track?: string;
    progress?: string;
    ticks?: string;
    filledTicks?: string;
    value?: string;
    label?: string;
    background?: string;
  };
  /** Tick configuration */
  tickConfig?: {
    /** Major tick interval (every nth tick) */
    majorInterval?: number;
    /** Major tick length multiplier */
    majorLength?: number;
    /** Minor tick length multiplier */
    minorLength?: number;
    /** Show tick labels */
    showLabels?: boolean;
    /** Tick label formatter */
    labelFormatter?: (value: number, index: number) => string;
    /** Tick label offset from gauge */
    labelOffset?: number;
  };
  /** Progress bar configuration */
  progressConfig?: {
    /** Round or flat line caps */
    lineCap?: "round" | "butt" | "square";
    /** Dash array for dashed progress */
    dashArray?: string;
    /** Dash offset for animated dashes */
    dashOffset?: number;
  };
  /** CSS classes */
  className?: string;
  containerClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
  tickClassName?: string;
  filledTickClassName?: string;
  majorTickClassName?: string;
  tickLabelClassName?: string;
  /** Custom styles */
  style?: CSSProperties;
  containerStyle?: CSSProperties;
  valueStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  /** Accessibility */
  "aria-label"?: string;
  "aria-describedby"?: string;
  /** Callbacks */
  onAnimationComplete?: () => void;
  onValueChange?: (value: number) => void;
  /** Render props for custom content */
  renderValue?: (value: number, formattedValue: string) => ReactNode;
  renderLabel?: (label: string) => ReactNode;
  renderCenterContent?: (
    value: number,
    formattedValue: string,
    label?: string
  ) => ReactNode;
  /** Performance optimization */
  shouldAnimate?: (newValue: number, oldValue: number) => boolean;
  /** Tooltip configuration */
  tooltip?: {
    enabled?: boolean;
    formatter?: (value: number) => string;
    position?: "top" | "bottom" | "left" | "right";
  };
}
