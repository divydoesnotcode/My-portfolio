import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

export function ParallaxBackground({ className }) {
  const containerRef = useRef(null);
  
  // Track scroll position of the window
  const { scrollY } = useScroll();

  // Define different translation speeds for various elements to create depth
  const y1 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -500]);
  const opacityFade = useTransform(scrollY, [0, 500, 1500], [0.8, 0.4, 0]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-[-10] w-full h-full overflow-hidden bg-zinc-950 pointer-events-none",
        className
      )}
    >
      {/* Deepest Layer - Moves Slowest */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[20%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px]"
      />

      {/* Mid Layer - Large Graphic Elements */}
      <motion.div
        style={{ y: y1, opacity: opacityFade }}
        className="absolute top-[40%] left-[-10%] flex items-center justify-center -rotate-12"
      >
        <div className="text-[20rem] font-bold text-white/[0.03] leading-none whitespace-nowrap select-none">
          PORTFOLIO
        </div>
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute top-[70%] right-[-5%] flex items-center justify-center rotate-6"
      >
        <div className="text-[15rem] font-bold text-white/[0.02] leading-none whitespace-nowrap select-none">
          Divy
        </div>
      </motion.div>

      {/* Foreground Parallax Layer - Moves Fastest */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[120%] left-[60%] w-32 h-32 border border-white/10 rounded-full"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[180%] left-[15%] w-24 h-24 border border-blue-500/20 rounded-lg rotate-45"
      />
    </div>
  );
}
