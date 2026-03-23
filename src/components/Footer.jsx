import { motion } from "motion/react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.06)" }}>

            {/* Background giant text — scales down on mobile */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden pb-0" aria-hidden="true">
                <span className="font-extrabold leading-none text-white/[0.022] whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,15vw,12rem)" }}>
                    DIVY BAROT
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">

                    {/* Monogram + name */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/14 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0"
                            style={{ fontFamily: "var(--font-display)" }}>
                            DB
                        </div>
                        <span className="text-white/28 text-sm" style={{ fontFamily: "var(--font-body)" }}>Divy Barot</span>
                    </div>

                    {/* Built with */}
                    <p className="text-white/18 text-xs order-last sm:order-none" style={{ fontFamily: "var(--font-body)" }}>
                        Built with React · Motion · GSAP · Tailwind
                    </p>

                    {/* Copyright */}
                    <p className="text-white/18 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                        © {year} Divy Barot
                    </p>
                </div>
            </div>
        </footer>
    );
}