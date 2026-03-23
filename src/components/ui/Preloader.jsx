import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackgroundLines } from "./BackgroundLines";

export function Preloader({ isLoading, onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    // Lock scroll
    document.body.style.overflow = "hidden";

    // Fast counter animation (0 to 100)
    const duration = 1800; // Counter takes 1.8s
    const startTime = performance.now();

    const animateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutExpo)
      const ease = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const currentVal = Math.floor(ease * 100);

      setProgress(currentVal);

      if (t < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        // Wait a beat at 100% before triggering exit
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    requestAnimationFrame(animateNumber);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading, onComplete]);

  // Unlock scroll when completely unmounted or fading out is done
  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Background Lines for the preloader */}
          <BackgroundLines />

          {/* Main Container */}
          <div className="relative w-full h-full flex flex-col justify-end p-8 md:p-12 lg:p-20 overflow-hidden">
            
            {/* The Counter */}
            <div className="flex items-baseline justify-between w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col"
              >
                <div 
                  className="text-white text-[clamp(6rem,20vw,20rem)] font-bold leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {progress}
                </div>
              </motion.div>
              
              {/* Optional: Additional branding or % sign */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white/40 text-xl md:text-3xl font-light mb-4 md:mb-12"
                style={{ fontFamily: "var(--font-display)" }}
              >
                %
              </motion.div>
            </div>

            {/* Loading text / bar */}
            <div className="w-full flex items-center gap-4 mt-8 md:mt-12 opacity-80">
              <span className="text-white/30 text-xs tracking-[0.3em] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
                Loading Portfolio
              </span>
              <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-[30ms] ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
