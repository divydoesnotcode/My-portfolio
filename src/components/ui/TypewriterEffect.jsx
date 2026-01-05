"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "This",
    },
    {
      text: "is",
    },
    // {
    //   text: "apps",
    // },
    // {
    //   text: "with",
    // },
    {
      text: "Divy Barot.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-white text-neutral-600 text-xs sm:text-base  ">
        Hey There 👋🏻 !!
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
      </div>
    </div>
  );
}
