import React from "react";

const GradientLoader: React.FC = () => (
  <div
    style={{
      width: "100%",
      height: "8px",
      backgroundColor: "transparent",
      borderRadius: "9999px",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "200%",
          background:
            "linear-gradient(90deg, rgba(203,213,225,0) 0%, rgba(203,213,225,0.1) 10%, rgba(203,213,225,0.2) 20%, rgba(203,213,225,0.6) 30%, rgba(203,213,225,1) 50%, rgba(203,213,225,0.6) 70%, rgba(203,213,225,0.2) 80%, rgba(203,213,225,0.1) 90%, rgba(203,213,225,0) 100%)",
          borderRadius: "9999px",
          animation: "gradientLoader 2s linear infinite",
        }}
      />
    </div>
    <style>
      {`
        @keyframes gradientLoader {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}
    </style>
  </div>
);

export default GradientLoader;
