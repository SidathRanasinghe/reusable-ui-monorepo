import { CheckCircle2, Circle, CircleDot, X } from "lucide-react";

interface ProgressStep {
  status: string;
  label: string;
  description?: string;
  date?: string;
  completed: boolean;
  current?: boolean;
}

interface ProgressTimelineProps {
  steps?: ProgressStep[];
  onClose?: () => void;
  total?: number;
  completed?: number;
  percentage?: number;
}

export function ProgressTimeline({
  steps = [],
  onClose,
  total = 0,
  completed = 0,
  percentage,
}: ProgressTimelineProps) {
  return (
    <div className="flex min-w-[256px] max-w-[256px] flex-col items-start justify-start gap-y-6 rounded-[5px] border border-gray-200 bg-grey-75/[48%] p-1 backdrop-blur-[6px]">
      <div className="flex w-full items-start justify-between">
        <div className="flex w-fit flex-col gap-y-0.5 p-1.5">
          <span className="text-caption-xs font-medium text-gray-900">
            Progress
          </span>
          <span className="text-caption-xs text-gray-500">
            {completed} of {total} · {percentage}%
          </span>
        </div>
        {onClose && (
          <div className="rounded-[5px]">
            <button
              onClick={onClose}
              className="cursor-pointer rounded-[5px] bg-white p-1 text-gray-500 hover:bg-gray-200"
            >
              <X className="size-4" />
            </button>
          </div>
        )}
      </div>
      <div className="size-full">
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Vertical line connector */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute left-[11px] top-[24px] w-[2px] ${
                  step.completed
                    ? "h-[calc(100%+8px)] bg-blue-500"
                    : "h-full bg-gray-200"
                }`}
              />
            )}
            {/* Icon */}
            <div className="relative z-10">
              {step.completed ? (
                <CheckCircle2 className="size-6 fill-black text-blue-100" />
              ) : step.current ? (
                <CircleDot className="size-6 fill-blue-500 text-blue-100" />
              ) : (
                <Circle className="size-6 text-gray-300" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="flex items-start justify-between">
                <h4
                  className={`text-caption-xs font-medium ${
                    step.completed || step.current
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </h4>
                {step.date && (
                  <span className="text-caption-xs text-gray-500">
                    {step.date}
                  </span>
                )}
              </div>
              {step.description && (
                <p className="mt-0.5 text-caption-xs text-gray-500">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
