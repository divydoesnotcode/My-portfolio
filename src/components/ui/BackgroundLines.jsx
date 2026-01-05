import React from "react";
import { BackgroundLines } from "./background-lines";

export function BackgroundLinesDemo({ children }) {
    return (
        <BackgroundLines className="flex items-center justify-center flex-col ">
            {children}
        </BackgroundLines>
    );
}
