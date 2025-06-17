import { SVGProps } from "react";

interface TLIconProps {
  ringColor?: string;
  props?: SVGProps<SVGSVGElement>;
}

const Current = ({ ringColor, ...props }: TLIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="12" height="12" rx="6" fill={ringColor || "#2445FF"} />
      <circle cx="6" cy="6" r="2" fill="white" />
    </svg>
  );
};

export default Current;
