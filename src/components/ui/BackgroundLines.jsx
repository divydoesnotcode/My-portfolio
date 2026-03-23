import { cn } from "../../lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}) => {
  return (
    <div className={cn("h-full w-full bg-[#050505] relative overflow-hidden", className)}>
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none opacity-20"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-0.5 449.5C-0.5 449.5 242 166.5 720 449.5C1198 732.5 1440.5 449.5 1440.5 449.5"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M-0.5 449.5C-0.5 449.5 242 166.5 720 449.5C1198 732.5 1440.5 449.5 1440.5 449.5"
          stroke="#3b82f6"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* More decorative lines */}
        <path
          d="M-0.5 300C-0.5 300 300 500 720 300C1140 100 1440.5 300 1440.5 300"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M-0.5 300C-0.5 300 300 500 720 300C1140 100 1440.5 300 1440.5 300"
          stroke="#8b5cf6"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: (svgOptions?.duration || 10) * 1.2,
            ease: "linear",
            repeat: Infinity,
            delay: 2,
          }}
        />

        <path
          d="M-0.5 600C-0.5 600 400 400 720 600C1040 800 1440.5 600 1440.5 600"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M-0.5 600C-0.5 600 400 400 720 600C1040 800 1440.5 600 1440.5 600"
          stroke="#10b981"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: (svgOptions?.duration || 10) * 1.5,
            ease: "linear",
            repeat: Infinity,
            delay: 4,
          }}
        />
      </svg>
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
