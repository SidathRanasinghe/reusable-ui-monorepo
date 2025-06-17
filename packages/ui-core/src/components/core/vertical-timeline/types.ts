import { ReactNode } from "react";

export interface TimelineStep {
  step?: string;
  status?: string;
  description: string;
  complete_datetime?: string;
  is_complete?: boolean;
  is_current?: boolean;
}

export interface VerticalTimelineProps {
  steps: TimelineStep[];
  completeIcon?: ReactNode;
  currentIcon?: ReactNode;
  pendingIcon?: ReactNode;
  className?: string;
  stepClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  dateClassName?: string;
  showEdges?: boolean;
  edgeClassName?: string;
  edgeColor?: string;
  trackClassName?: string;
  titleContainerClassName?: string;
}
