import { SVGProps } from "react";

const Completed = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="12" height="12" rx="6" fill="#1E2023" />
      <path
        d="M9.33317 3.5L4.74984 8.08333L2.6665 6"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Completed;
