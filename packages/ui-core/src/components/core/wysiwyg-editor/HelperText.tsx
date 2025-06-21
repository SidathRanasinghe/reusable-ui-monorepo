// packages/ui-core/src/components/core/wysiwyg-editor/HelperText.tsx
import React from "react";

import { cn } from "../../../lib/utils";

interface HelperTextProps {
  text?: string;
  className?: string;
  id?: string;
}

export const HelperText: React.FC<HelperTextProps> = ({
  text,
  className,
  id,
}) => {
  if (!text) return null;

  return (
    <div id={id} className={cn("mt-1 text-xs text-gray-600", className)}>
      {text}
    </div>
  );
};
