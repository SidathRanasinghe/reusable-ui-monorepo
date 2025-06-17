import { ReactNode } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../ui/hover-card";

interface CustomHoverCardProps {
  trigger: ReactNode;
  content: ReactNode;
  contentClassName?: string;
  hoverSide?: "left" | "right" | "top" | "bottom";
  hoverAlign?: "start" | "end" | "center";
  hoverSideOffset?: number;
  isOpen?: boolean;
  hoverCardOpendDelay?: number;
  hoverCardClosedDelay?: number;
  disableHover?: boolean;
}

export function CustomHoverCard({
  trigger,
  content,
  contentClassName,
  hoverSide = "bottom",
  hoverAlign = "start",
  hoverSideOffset = 20,
  isOpen,
  hoverCardOpendDelay,
  hoverCardClosedDelay,
  disableHover,
}: CustomHoverCardProps) {
  return (
    <HoverCard
      open={isOpen || undefined}
      openDelay={!disableHover ? hoverCardOpendDelay : undefined}
      closeDelay={!disableHover ? hoverCardClosedDelay : undefined}
    >
      <HoverCardTrigger asChild>
        <div className="cursor-pointer">{trigger}</div>
      </HoverCardTrigger>
      {!disableHover && (
        <HoverCardContent
          className={contentClassName}
          side={hoverSide}
          align={hoverAlign}
          sideOffset={hoverSideOffset}
        >
          {content}
        </HoverCardContent>
      )}
    </HoverCard>
  );
}
