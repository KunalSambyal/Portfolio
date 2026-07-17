import { useTabBar } from "../../context/TabBarContext";

export default function TabBar() {
    const { activeTab, setActiveTab } = useTabBar();
    const tabs = ["skills.tsx", "experience.json", "about.md"] as const;

    return (
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
    );
}
