import { LucideIcon } from "lucide-react";

import { cn } from "../../lib/utils";

type IconProps = {
  icon: LucideIcon;
  size?: "xs" | "semi_sm" | "sm" | "md" | "lg";
  className?: string;
  onClick?: Function;
  iconClassName?: string;
};

export const Icon = ({
  icon: IconComponent,
  size = "sm",
  className,
  onClick,
  iconClassName,
}: IconProps) => {
  const sizeClasses = {
    xs: "w-3 h-3",
    semi_sm: "w-[0.825rem] h-[0.825rem]",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={cn(sizeClass, className)} onClick={() => onClick?.()}>
      <IconComponent className={cn("size-full", iconClassName)} />
    </div>
  );
};
