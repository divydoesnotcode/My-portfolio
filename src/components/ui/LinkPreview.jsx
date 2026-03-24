/**
 * LinkPreview — Vite/React port of Aceternity UI's Link Preview
 *
 * Uses ReactDOM.createPortal to render the popup directly into document.body.
 * This means it is NEVER clipped by any parent with overflow:hidden or
 * overflow:clip — no matter how deeply nested the trigger is inside cards.
 *
 * Position is computed in fixed/viewport coordinates from the mouse position,
 * so it always floats above the hovered link correctly.
 *
 * Two modes:
 *   Dynamic (default) — live screenshot via Microlink API
 *   Static            — pass isStatic + imageSrc for a local/CDN image
 */

import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";

export function LinkPreview({
  children,
  url,
  className = "",
  width = 220,
  height = 138,
  isStatic = false,
  imageSrc = "",
}) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const [imgSrc, setImgSrc] = useState(
    isStatic
      ? imageSrc
      : `https://api.microlink.io/?url=${encodeURIComponent(
          url
        )}&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.isMobile=false&viewport.deviceScaleFactor=1&viewport.width=1280&viewport.height=800`
  );

  const handleMouseMove = useCallback(
    (e) => {
      // Centre horizontally on cursor, float above it
      const x = Math.max(8, Math.min(e.clientX - width / 2, window.innerWidth - width - 8));
      const y = Math.max(8, e.clientY - height - 16);
      setPos({ x, y });
    },
    [width, height]
  );

  const popup = (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="link-preview-portal"
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 8 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            width,
            zIndex: 99999,
            pointerEvents: "none",
          }}
        >
          {/* Screenshot card */}
          <div
            style={{
              width,
              height,
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(26,22,16,0.15)",
              boxShadow:
                "0 4px 6px rgba(26,22,16,0.04), 0 12px 40px rgba(26,22,16,0.18), 0 2px 8px rgba(26,22,16,0.08)",
              background: "var(--bg-card, #EDE8DF)",
            }}
          >
            <img
              src={imgSrc}
              alt={`Preview of ${url}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={() => {
                try {
                  const host = new URL(url).hostname;
                  setImgSrc(
                    `https://placehold.co/${width}x${height}/EDE8DF/B45309?text=${encodeURIComponent(host)}`
                  );
                } catch {
                  setImgSrc(
                    `https://placehold.co/${width}x${height}/EDE8DF/B45309?text=Preview`
                  );
                }
              }}
            />
          </div>

          {/* Downward caret */}
          <div
            style={{
              position: "absolute",
              bottom: -7,
              left: "50%",
              transform: "translateX(-50%)",
              width: 14,
              height: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                background: "var(--bg-card, #EDE8DF)",
                border: "1px solid rgba(26,22,16,0.15)",
                transform: "rotate(45deg) translate(-3px, -3px)",
                boxShadow: "2px 2px 4px rgba(26,22,16,0.08)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <span
        className="relative inline-block"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      </span>

      {/* Portalled into <body> — escapes ALL overflow:hidden parents */}
      {createPortal(popup, document.body)}
    </>
  );
}