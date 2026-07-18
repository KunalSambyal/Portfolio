import type React from "react";

interface FrameProps {
    children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
    return (
        <div className="min-h-screen w-full bg-primary-bg p-3 md:p-6 flex flex-col font-display">
            <div className="flex-1 w-full border border-white/10 rounded-2xl md:rounded-3xl relative flex flex-col bg-primary-bg/50 backdrop-blur-md">
                {children}
            </div>
        </div>
    );
}
