import { Fragment } from "react";

import { cn, formatTimeAgo } from "../../../lib/utils";

import { VerticalTimelineProps } from "./types";
import Completed from "./default-icons/Completed";
import Current from "./default-icons/Current";
import Pending from "./default-icons/Pending";

export function VerticalTimeline({
  steps,
  completeIcon = <Completed />,
  currentIcon = <Current />,
  pendingIcon = <Pending />,
  className,
  titleClassName,
  descriptionClassName,
  dateClassName,
  showEdges = false,
  edgeClassName,
  edgeColor = "rgba(100, 116, 139, 0.2)",
  trackClassName = "!bg-white",
  titleContainerClassName = "",
}: VerticalTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="grid grid-cols-[auto,1fr] gap-x-4">
        {steps?.map((step: any, index: number) => (
          <Fragment key={index}>
            <div
              className={cn(
                "relative flex items-start justify-center rounded-none px-1 first:!rounded-t-full",
                trackClassName,
                { "!rounded-b-full": index === steps.length - 1 },
                "!pt-1"
              )}
            >
              <div
                className={cn(
                  "relative z-10 w-3",
                  index === steps.length - 1 ? "h-4" : "h-full"
                )}
              >
                <div className="absolute left-0 top-0 flex items-center justify-center text-background">
                  {step.is_complete
                    ? completeIcon
                    : step.is_current
                      ? currentIcon
                      : pendingIcon}
                </div>
              </div>
              {showEdges && index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute left-1/2 top-3 h-full w-px -translate-x-1/2",
                    edgeClassName
                  )}
                  style={{ backgroundColor: edgeColor }}
                />
              )}
            </div>
            <div className="pb-4 pt-1">
              <div
                className={cn(
                  "flex items-center justify-between gap-2",
                  titleContainerClassName
                )}
              >
                <span
                  className={cn(
                    "text-xs font-medium leading-none",
                    step.is_complete || step.is_current
                      ? "text-foreground"
                      : "text-muted-foreground",
                    titleClassName
                  )}
                >
                  {step.status}
                </span>
                {step.complete_datetime && (
                  <span
                    className={cn(
                      "!text-caption-xxs text-muted-foreground",
                      dateClassName
                    )}
                  >
                    {formatTimeAgo(step.complete_datetime)}
                  </span>
                )}
              </div>
              {step.description && (
                <span
                  className={cn(
                    "block !text-caption-xxs text-muted-foreground",
                    descriptionClassName
                  )}
                >
                  {step.description}
                </span>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
