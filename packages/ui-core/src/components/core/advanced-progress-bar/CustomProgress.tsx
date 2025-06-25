// packages/ui-core/src/components/core/org-chart/CustomProgress.tsx

import React from "react";

import { cn } from "../../../lib/utils";
import { CustomProgressProps } from "../org-chart/types";

export const CustomProgress: React.FC<CustomProgressProps> = ({
  value,
  showValue = false,
  maxValue = 100,
  numberOfTicks = 10,
  tickWidth = 2,
  tickHeight = 8,
  tickGap = 2,
  tickRoundCorners = false,
  customStyles,
  valuePosition = "left",
  className,
  valueRenderer,
}) => {
  const normalizedValue = Math.min(Math.max(value, 0), maxValue);
  const filledTicks = Math.round((normalizedValue / maxValue) * numberOfTicks);

  const ValueDisplay: React.FC = () => (
    <div
      style={customStyles?.valueDisplay?.container}
      className={cn("!text-caption-xxs font-medium", {
        "mr-2": valuePosition === "left",
        "ml-2": valuePosition === "right",
        "mb-2": valuePosition === "top",
        "mt-2": valuePosition === "bottom",
      })}
    >
      <span
        className="text-[12.5px] font-semibold text-[#3A3D42]"
        style={customStyles?.valueDisplay?.value}
      >
        {valueRenderer ? valueRenderer(value) : value?.toFixed(2) || value}
      </span>
    </div>
  );

  const svgWidth = numberOfTicks * tickWidth + (numberOfTicks - 1) * tickGap;
  const svgHeight = tickHeight;

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        {
          "flex-row": valuePosition === "left" || valuePosition === "right",
          "flex-col": valuePosition === "top" || valuePosition === "bottom",
        },
        className
      )}
      style={customStyles?.container}
    >
      {showValue && (valuePosition === "left" || valuePosition === "top") && (
        <ValueDisplay />
      )}

      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyles?.progressContainer}
      >
        {Array.from({ length: numberOfTicks }).map((_, index) => {
          const isFilled = index <= filledTicks && normalizedValue !== 0;
          const xPosition = index * (tickWidth + tickGap);
          return (
            <rect
              key={index}
              x={xPosition}
              y={0}
              width={tickWidth}
              height={tickHeight}
              rx={
                tickRoundCorners ? Math.min(tickWidth / 2, tickHeight / 2) : 0
              }
              fill="currentColor"
              fillOpacity={isFilled ? 1 : 0.2}
              style={
                isFilled
                  ? customStyles?.ticks?.filled
                  : customStyles?.ticks?.empty
              }
            />
          );
        })}
      </svg>

      {showValue &&
        (valuePosition === "right" || valuePosition === "bottom") && (
          <ValueDisplay />
        )}
    </div>
  );
};
