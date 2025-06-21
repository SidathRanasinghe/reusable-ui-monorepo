// packages/ui-core/src/components/core/wysiwyg-editor/ErrorMessage.tsx
import React from "react";

import { cn } from "../../../lib/utils";

interface ErrorMessageProps {
  message?: string;
  className?: string;
  id?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  className,
  id,
}) => {
  if (!message) return null;

  return (
    <div
      id={id}
      className={cn("mt-1 text-xs text-red-600", className)}
      role="alert"
    >
      {message}
    </div>
  );
};
