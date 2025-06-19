import {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

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

const VARIANT_COLORS: Record<
  string,
  { progress?: string; filledTicks?: string }
> = {
  primary: {
    progress: "#3b82f6",
    filledTicks: "#3b82f6",
  },
  success: {
    progress: "#10b981",
    filledTicks: "#10b981",
  },
  warning: {
    progress: "#f59e0b",
    filledTicks: "#f59e0b",
  },
  error: {
    progress: "#ef4444",
    filledTicks: "#ef4444",
  },
  info: {
    progress: "#06b6d4",
    filledTicks: "#06b6d4",
  },
  custom: {},
};

const EASING_FUNCTIONS = {
  linear: (t: number) => t,
  "ease-in": (t: number) => t * t,
  "ease-out": (t: number) => 1 - Math.pow(1 - t, 2),
  "ease-in-out": (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
};

const CircularGauge: FC<CircularGaugeProps> = ({
  value,
  max = 100,
  min = 0,
  unit = "",
  label,
  size = 200,
  thickness = 8,
  tickCount = 40,
  startAngle = -90,
  endAngle = 270,
  animated = false,
  animationDuration = 1000,
  animationEasing = "ease-out",
  showTicks = true,
  showValue = true,
  showLabel = true,
  valueFormatter,
  gradient,
  variant = "primary",
  colors = {},
  tickConfig = {},
  progressConfig = {},
  className = "",
  containerClassName = "",
  valueClassName = "",
  labelClassName = "",
  tickClassName = "",
  filledTickClassName = "",
  majorTickClassName = "",
  tickLabelClassName = "",
  style,
  containerStyle,
  valueStyle,
  labelStyle,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  onAnimationComplete,
  onValueChange,
  renderValue,
  renderLabel,
  renderCenterContent,
  shouldAnimate,
  tooltip = {},
}) => {
  const [animatedValue, setAnimatedValue] = useState(animated ? min : value);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const previousValueRef = useRef(value);

  // Clamp and normalize value
  const clampedValue = Math.max(min, Math.min(max, value));
  const normalizedValue = clampedValue;

  // Enhanced animation with custom easing
  useEffect(() => {
    if (previousValueRef.current === clampedValue) return;

    const shouldAnimateValue = shouldAnimate
      ? shouldAnimate(clampedValue, previousValueRef.current)
      : animated;

    if (!shouldAnimateValue) {
      setAnimatedValue(clampedValue);
      previousValueRef.current = clampedValue;
      onValueChange?.(clampedValue);
      return;
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startTime = Date.now();
    const startValue = animatedValue;
    const targetValue = clampedValue;
    const duration = animationDuration;
    const easingFn = EASING_FUNCTIONS[animationEasing];

    setIsAnimating(true);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFn(progress);

      const currentValue =
        startValue + (targetValue - startValue) * easedProgress;
      setAnimatedValue(currentValue);
      onValueChange?.(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        previousValueRef.current = clampedValue;
        onAnimationComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    clampedValue,
    animated,
    animationDuration,
    animationEasing,
    animatedValue,
  ]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const center = size / 2;
  const radius = center - thickness / 2 - 10; // Extra padding for tick labels
  const currentPercentage = ((animatedValue - min) / (max - min)) * 100;

  // Calculate angles
  const totalAngle = endAngle - startAngle;
  const progressAngle = (currentPercentage / 100) * totalAngle;

  // Get colors based on variant
  const variantColors = VARIANT_COLORS[variant];
  const finalColors = {
    track: colors.track || "#e5e7eb",
    progress: colors.progress || variantColors.progress || "#3b82f6",
    ticks: colors.ticks || "#d1d5db",
    filledTicks:
      colors.filledTicks ||
      variantColors.filledTicks ||
      colors.progress ||
      variantColors.progress ||
      "#3b82f6",
    value: colors.value || "#111827",
    label: colors.label || "#6b7280",
    background: colors.background || "transparent",
  };

  // Create SVG path for arc
  const createArcPath = (
    startAngle: number,
    endAngle: number,
    radius: number
  ) => {
    const start = (startAngle * Math.PI) / 180;
    const end = (endAngle * Math.PI) / 180;

    const x1 = center + radius * Math.cos(start);
    const y1 = center + radius * Math.sin(start);
    const x2 = center + radius * Math.cos(end);
    const y2 = center + radius * Math.sin(end);

    const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  const trackPath = createArcPath(startAngle, endAngle, radius);
  const progressPath = createArcPath(
    startAngle,
    startAngle + progressAngle,
    radius
  );

  // Enhanced tick rendering with major/minor ticks and labels
  const renderTicks = () => {
    if (!showTicks || tickCount === 0) return null;

    const {
      majorInterval = 5,
      majorLength = 1.5,
      minorLength = 1,
      showLabels = false,
      labelFormatter,
      labelOffset = 15,
    } = tickConfig;

    const filledTicks = Math.round((currentPercentage / 100) * tickCount);

    return Array.from({ length: tickCount }).map((_, index) => {
      const tickAngle = startAngle + (index / (tickCount - 1)) * totalAngle;
      const angle = (tickAngle * Math.PI) / 180;
      const isMajor = index % majorInterval === 0;
      const lengthMultiplier = isMajor ? majorLength : minorLength;

      const x1 =
        center +
        (radius + (thickness / 4) * lengthMultiplier) * Math.cos(angle);
      const y1 =
        center +
        (radius + (thickness / 4) * lengthMultiplier) * Math.sin(angle);
      const x2 =
        center +
        (radius - (thickness / 4) * lengthMultiplier) * Math.cos(angle);
      const y2 =
        center +
        (radius - (thickness / 4) * lengthMultiplier) * Math.sin(angle);

      const isFilled = index <= filledTicks;
      const strokeColor = isFilled
        ? finalColors.filledTicks
        : finalColors.ticks;
      const strokeWidth = isFilled ? 2 : 1;

      const tickValue = min + (index / (tickCount - 1)) * (max - min);
      const formattedLabel = labelFormatter
        ? labelFormatter(tickValue, index)
        : Math.round(tickValue).toString();

      return (
        <g key={index}>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            className={`${isFilled ? filledTickClassName : tickClassName} ${isMajor ? majorTickClassName : ""}`}
          />
          {showLabels && isMajor && (
            <text
              x={center + (radius + labelOffset) * Math.cos(angle)}
              y={center + (radius + labelOffset) * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="central"
              className={tickLabelClassName}
              style={{
                fontSize: size * 0.04,
                fill: finalColors.ticks,
                fontFamily: "inherit",
              }}
            >
              {formattedLabel}
            </text>
          )}
        </g>
      );
    });
  };

  const formatValue = (val: number) => {
    if (valueFormatter) {
      return valueFormatter(val);
    }
    return Number.isInteger(val) ? val.toString() : val.toFixed(1);
  };

  const gradientId =
    gradient?.id || `gauge-gradient-${Math.random().toString(36).substr(2, 9)}`;

  // Render custom center content
  const renderMiddleContent = () => {
    if (renderCenterContent) {
      return renderCenterContent(
        animatedValue,
        formatValue(animatedValue),
        label
      );
    }

    return (
      <>
        {showValue &&
          (renderValue ? (
            renderValue(animatedValue, formatValue(animatedValue))
          ) : (
            <span
              className={`font-bold ${valueClassName}`}
              style={{
                color: finalColors.value,
                fontSize: size * 0.12,
                ...valueStyle,
              }}
            >
              {formatValue(animatedValue)}
              {unit}
            </span>
          ))}
        {showLabel &&
          label &&
          (renderLabel ? (
            renderLabel(label)
          ) : (
            <span
              className={`mt-1 text-sm ${labelClassName}`}
              style={{
                color: finalColors.label,
                fontSize: size * 0.06,
                ...labelStyle,
              }}
            >
              {label}
            </span>
          ))}
      </>
    );
  };

  return (
    <div
      className={`relative inline-block ${containerClassName}`}
      style={{
        width: size,
        height: size,
        backgroundColor: finalColors.background,
        ...containerStyle,
      }}
      role="meter"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={normalizedValue}
      aria-label={
        ariaLabel || `${label || "Gauge"}: ${formatValue(animatedValue)}${unit}`
      }
      aria-describedby={ariaDescribedby}
      title={
        tooltip.enabled
          ? tooltip.formatter
            ? tooltip.formatter(animatedValue)
            : `${formatValue(animatedValue)}${unit}`
          : undefined
      }
    >
      <svg
        width={size}
        height={size}
        className={className}
        style={{ overflow: "visible", ...style }}
      >
        <defs>
          {gradient && (
            <linearGradient
              id={gradientId}
              x1={gradient.direction === "vertical" ? "0%" : "0%"}
              y1={gradient.direction === "vertical" ? "0%" : "0%"}
              x2={gradient.direction === "vertical" ? "0%" : "100%"}
              y2={gradient.direction === "vertical" ? "100%" : "0%"}
            >
              <stop offset="0%" stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </linearGradient>
          )}
          {gradient?.direction === "radial" && (
            <radialGradient
              id={`${gradientId}-radial`}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop offset="0%" stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </radialGradient>
          )}
        </defs>

        {/* Track */}
        <path
          d={trackPath}
          fill="none"
          stroke={finalColors.track}
          strokeWidth={thickness}
          strokeLinecap={progressConfig.lineCap || "round"}
        />

        {/* Progress */}
        <path
          d={progressPath}
          fill="none"
          stroke={
            gradient
              ? gradient.direction === "radial"
                ? `url(#${gradientId}-radial)`
                : `url(#${gradientId})`
              : finalColors.progress
          }
          strokeWidth={thickness}
          strokeLinecap={progressConfig.lineCap || "round"}
          strokeDasharray={progressConfig.dashArray}
          strokeDashoffset={progressConfig.dashOffset}
          style={{
            transition: !isAnimating
              ? `stroke-dashoffset ${animationDuration}ms ${animationEasing}`
              : undefined,
          }}
        />

        {renderTicks()}
      </svg>

      {/* Center content */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        {renderMiddleContent()}
      </div>
    </div>
  );
};

export default CircularGauge;
