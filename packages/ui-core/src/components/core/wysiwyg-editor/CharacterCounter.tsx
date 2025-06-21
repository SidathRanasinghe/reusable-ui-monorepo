// packages/ui-core/src/components/core/wysiwyg-editor/CharacterCounter.tsx
import React from "react";

import { cn } from "../../../lib/utils";

interface CharacterCounterProps {
  current: number;
  max?: number;
  className?: string;
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  current,
  max,
  className,
}) => {
  const isNearLimit = max && current > max * 0.8;
  const isOverLimit = max && current > max;

  return (
    <div
      className={cn(
        "mt-1 text-right text-xs text-gray-500",
        {
          "text-yellow-600": isNearLimit && !isOverLimit,
          "text-red-600": isOverLimit,
        },
        className
      )}
    >
      {current}
      {max && (
        <>
          <span className="mx-1">/</span>
          {max}
        </>
      )}
    </div>
  );
};
