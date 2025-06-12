import React from "react";

interface CircularGaugeProps {
  score: number;
  unit?: string;
  label: string;
  size?: number;
  tickCount?: number;
  thickness?: number;
  containerClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
  tickClassName?: string;
  filledTickClassName?: string;
  isRotate?: boolean;
}

const CircularGauge: React.FC<CircularGaugeProps> = ({
  score,
  unit,
  label,
  size = 200,
  thickness = 4,
  tickCount = 40,
  containerClassName = "",
  valueClassName = "",
  labelClassName = "",
  tickClassName = "",
  filledTickClassName = "",
  isRotate = false,
}) => {
  const center = size / 2;
  const radius = center - thickness;
  const filledTicks = Math.round((score / 100) * tickCount);

  const renderTicks = () => {
    return Array.from({ length: tickCount }).map((_, index) => {
      const angle = (index / tickCount) * Math.PI * 2 - Math.PI / 2;
      const x1 = center + radius * Math.cos(angle);
      const y1 = center + radius * Math.sin(angle);
      const x2 = center + (radius - thickness * 2) * Math.cos(angle);
      const y2 = center + (radius - thickness * 2) * Math.sin(angle);

      return (
        <line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className={index < filledTicks ? filledTickClassName : tickClassName}
        />
      );
    });
  };

  return (
    <div
      className={`relative ${containerClassName}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        style={{ transform: isRotate ? "RotateY(180deg)" : "" }}
      >
        {renderTicks()}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-bold ${valueClassName}`}>
          {score}
          {unit}
        </span>
        <span className={`text-sm ${labelClassName}`}>{label}</span>
      </div>
    </div>
  );
};

export default CircularGauge;
