import { useState } from "react";

type Tab = "skills.tsx" | "experience.json" | "about.md";

export default function IdeWidget() {
    const [activeTab, setActiveTab] = useState<Tab>("skills.tsx");

    const tabs: Tab[] = ["skills.tsx", "experience.json", "about.md"];

    return (
        <div className="w-full h-80 rounded-2xl bg-secondary-bg/25 border border-white/5 flex flex-col font-mono text-xs overflow-hidden backdrop-blur-md shadow-2xl">
            {/* --- Title / Tab Bar Header --- */}
            <div className="flex items-center px-4 py-2.5 bg-primary-bg/40 border-b border-white/5 select-none">
                {/* Decorative Mac-style Window Controls */}
                <div className="flex gap-1.5 mr-6 font-sans">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>

                {/* Tab Buttons */}
                <div className="flex gap-1.5">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1 rounded transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyber-yellow ${
                                    isActive
                                        ? "bg-white/5 text-cyber-yellow border-b border-cyber-yellow/40"
                                        : "text-text-secondary hover:text-white"
                                }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* --- Editor Body Content --- */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Column: Fixed Width Line Numbers */}
                <div className="text-right pr-4 border-r border-white/5 select-none text-text-secondary/20 py-4 w-10 shrink-0">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                {/* Right Column: Code content wrapper */}
                <div className="flex-1 pl-4 py-4 overflow-y-auto text-left leading-relaxed text-slate-300">
                    {/* Tab 1 View: skills.tsx */}
                    {activeTab === "skills.tsx" && (
                        <div className="whitespace-pre">
                            <div>
                                <span className="text-sky-400 font-bold">
                                    const
                                </span>{" "}
                                <span className="text-white">skills</span>{" "}
                                <span className="text-slate-400">=</span>{" "}
                                <span className="text-yellow-400">&#123;</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-cyber-yellow">
                                    languages
                                </span>
                                <span className="text-slate-400">:</span>{" "}
                                <span className="text-purple-400">[</span>
                                <span className="text-emerald-400">
                                    "Python", "C++", "JavaScript", "TypeScript"
                                </span>
                                <span className="text-purple-400">]</span>
                                <span className="text-slate-400">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-cyber-yellow">
                                    frontend
                                </span>
                                <span className="text-slate-400">:</span>{" "}
                                <span className="text-purple-400">[</span>
                                <span className="text-emerald-400">
                                    "React", "HTML/CSS", "Tailwind CSS"
                                </span>
                                <span className="text-purple-400">]</span>
                                <span className="text-slate-400">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-cyber-yellow">
                                    database
                                </span>
                                <span className="text-slate-400">:</span>{" "}
                                <span className="text-emerald-400">
                                    "MySQL"
                                </span>
                                <span className="text-slate-400">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-cyber-yellow">tools</span>
                                <span className="text-slate-400">:</span>{" "}
                                <span className="text-purple-400">[</span>
                                <span className="text-emerald-400">
                                    "Git", "GitHub", "Docker", "Figma"
                                </span>
                                <span className="text-purple-400">]</span>
                            </div>
                            <div>
                                <span className="text-yellow-400">&#125;</span>
                                <span className="text-slate-400">;</span>
                            </div>
                        </div>
                    )}

                    {/* Tab 2 View: experience.json */}
                    {activeTab === "experience.json" && (
                        <div className="whitespace-pre">
                            <span className="text-yellow-400">&#123;</span>
                            <div className="pl-4">
                                <span className="text-cyber-yellow">
                                    "education"
                                </span>
                                <span className="text-slate-400">:</span>{" "}
                                <span className="text-purple-400">&#123;</span>
                                <div className="pl-4">
                                    <span className="text-cyber-yellow">
                                        "degree"
                                    </span>
                                    <span className="text-slate-400">:</span>{" "}
                                    <span className="text-emerald-400">
                                        "B.Tech in CSE"
                                    </span>
                                    <span className="text-slate-400">,</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-cyber-yellow">
                                        "graduation"
                                    </span>
                                    <span className="text-slate-400">:</span>{" "}
                                    <span className="text-emerald-400">
                                        "2029"
                                    </span>
                                </div>
                                <span className="text-purple-400">&#125;</span>
                                <span className="text-slate-400">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-cyber-yellow">
                                    "focus"
                                </span>
                                <span className="text-slate-400">:</span>{" "}
                                <span className="text-purple-400">[</span>
                                <span className="text-emerald-400">
                                    "Backend Dev", "DSA", "REST APIs"
                                </span>
                                <span className="text-purple-400">]</span>
                            </div>
                            <span className="text-yellow-400">&#125;</span>
                        </div>
                    )}

                    {/* Tab 3 View: about.md */}
                    {activeTab === "about.md" && (
                        <div className="whitespace-normal pr-4">
                            <div className="text-sky-400 font-bold font-display text-sm border-b border-white/5 pb-1 mb-3">
                                # Professional Summary
                            </div>
                            <p className="text-slate-200 mb-3 leading-relaxed">
                                Computer Science student focused on Backend
                                Development, DSA, and modern web development.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                Currently learning software engineering
                                fundamentals while building production-style
                                projects.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
