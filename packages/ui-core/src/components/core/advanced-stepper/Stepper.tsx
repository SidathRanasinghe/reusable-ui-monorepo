import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "../../../lib/utils";

type StepStatus = "completed" | "current" | "upcoming";

interface StepperContextValue {
  activeStep: number;
  onStepChange?: (step: number) => void;
}

const StepperContext = React.createContext<StepperContextValue>({
  activeStep: 0,
});

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep?: number;
  onStepChange?: (step: number) => void;
  children: React.ReactNode;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ activeStep = 0, onStepChange, className, children, ...props }, ref) => {
    return (
      <StepperContext.Provider value={{ activeStep, onStepChange }}>
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-3 gap-x-4 !font-hankenGrotesk",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </StepperContext.Provider>
    );
  }
);
Stepper.displayName = "Stepper";

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  label: string;
  description?: string;
  optional?: boolean;
  optionalLabel?: string;
  icon?: React.ReactNode;
  completedIcon?: React.ReactNode;
  disabled?: boolean;
  isLastStep?: boolean;
  showStepNumber?: boolean;
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  (
    {
      index,
      label,
      description,
      optional = false,
      optionalLabel = "Optional",
      icon,
      completedIcon,
      disabled = false,
      isLastStep = false,
      showStepNumber = false,
      className,
      ...props
    },
    ref
  ) => {
    const { activeStep, onStepChange } = React.useContext(StepperContext);

    const status: StepStatus =
      activeStep > index
        ? "completed"
        : activeStep === index
          ? "current"
          : "upcoming";

    const handleClick = () => {
      if (!disabled && onStepChange) {
        onStepChange(index);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col !font-hankenGrotesk",
          disabled && "cursor-not-allowed opacity-50",
          !disabled && "cursor-pointer",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <div className="flex w-full items-center justify-center !font-hankenGrotesk">
          <div
            className={cn(
              "relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-[3px] !font-hankenGrotesk transition-all duration-200",
              status === "completed" &&
                "border-uber-blue-5 bg-uber-blue-5 text-white",
              status === "current" &&
                "border-uber-blue-5 bg-uber-blue-5/10 text-uber-blue-5",
              status === "upcoming" && "border-uber-blue-5/20"
            )}
          >
            {status === "completed" ? (
              completedIcon || <Check className="size-4 stroke-2" />
            ) : status === "current" ? (
              icon || null
            ) : icon || showStepNumber ? (
              <span className="!font-hankenGrotesk text-caption-xxs text-muted-foreground">
                {index + 1}
              </span>
            ) : null}
          </div>
          {!isLastStep && (
            <div className="absolute left-[calc(50%+1.25rem)] top-3 h-[2px] w-[calc(100%-1.5rem)] flex-1 !font-hankenGrotesk">
              <div
                className={cn(
                  "size-full bg-uber-blue-5/20",
                  index < activeStep && "bg-uber-blue-5"
                )}
              />
              {index === activeStep - 1 && (
                <div
                  className="animate-connector-fill absolute inset-0 origin-left bg-uber-blue-5"
                  style={{ animationDuration: "2s" }}
                />
              )}
            </div>
          )}
        </div>
        <div className="mt-2 text-center !font-hankenGrotesk">
          <div className="flex items-center justify-center gap-1 !font-hankenGrotesk">
            <span
              className={cn(
                "!font-hankenGrotesk !text-caption-xs",
                (status === "completed" || status === "current") &&
                  "text-uber-blue-5"
              )}
            >
              {label}
            </span>
            {optional && (
              <span className="!font-hankenGrotesk text-caption-xs text-muted-foreground">
                ({optionalLabel})
              </span>
            )}
          </div>
          {description && (
            <p className="!font-hankenGrotesk text-caption-xxs text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);
Step.displayName = "Step";

interface StepperContentProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
}

const StepperContent = React.forwardRef<HTMLDivElement, StepperContentProps>(
  ({ step, className, children, ...props }, ref) => {
    const { activeStep } = React.useContext(StepperContext);

    if (step !== activeStep) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "!font-hankenGrotesk duration-300 animate-in fade-in-50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
StepperContent.displayName = "StepperContent";

interface StepperNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: number;
  disableBackOnFirstStep?: boolean;
  disableNextOnLastStep?: boolean;
  onComplete?: () => void;
  backLabel?: string;
  nextLabel?: string;
  completeLabel?: string;
}

const StepperNavigation = React.forwardRef<
  HTMLDivElement,
  StepperNavigationProps
>(
  (
    {
      steps,
      disableBackOnFirstStep = true,
      disableNextOnLastStep = false,
      onComplete,
      backLabel = "Back",
      nextLabel = "Next",
      completeLabel = "Complete",
      className,
      ...props
    },
    ref
  ) => {
    const { activeStep, onStepChange } = React.useContext(StepperContext);

    const handleBack = () => {
      if (onStepChange && activeStep > 0) {
        onStepChange(activeStep - 1);
      }
    };

    const handleNext = () => {
      if (onStepChange && activeStep < steps - 1) {
        onStepChange(activeStep + 1);
      } else if (onComplete) {
        onComplete();
      }
    };

    const isLastStep = activeStep === steps - 1;
    const isFirstStep = activeStep === 0;

    return (
      <div
        ref={ref}
        className={cn(
          "mt-6 flex justify-between !font-hankenGrotesk",
          className
        )}
        {...props}
      >
        <button
          type="button"
          onClick={handleBack}
          disabled={isFirstStep && disableBackOnFirstStep}
          className={cn(
            "rounded-md border border-input px-4 py-2 text-sm font-medium",
            "hover:bg-accent hover:text-accent-foreground",
            isFirstStep &&
              disableBackOnFirstStep &&
              "cursor-not-allowed opacity-50"
          )}
        >
          {backLabel}
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={isLastStep && disableNextOnLastStep}
          className={cn(
            "rounded-md bg-uber-blue-1/20 px-4 py-2 text-sm font-medium text-primary-foreground",
            "hover:bg-uber-blue-1/10",
            isLastStep &&
              disableNextOnLastStep &&
              "cursor-not-allowed opacity-50"
          )}
        >
          {isLastStep ? completeLabel : nextLabel}
        </button>
      </div>
    );
  }
);
StepperNavigation.displayName = "StepperNavigation";

export { Stepper, Step, StepperContent, StepperNavigation };
