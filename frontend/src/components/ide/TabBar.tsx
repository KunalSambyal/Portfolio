import { useTabBar } from "../../hooks/useTabBar";

export default function TabBar() {
    const { activeTab, setActiveTab } = useTabBar();
    const tabs = ["about.md", "skills.tsx", "experience.json"] as const;

    return (
        <div className="flex items-center px-4 py-2 border-b border-text-primary/10 bg-secondary-bg/30 select-none">
            {/* Window Controls */}
            <div className="flex gap-1.5 mr-4 sm:mr-6 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
            </div>

            {/* Tab Buttons */}
            <div
                className="flex gap-1.5 overflow-x-auto no-scrollbar scroll-smooth"
                role="tablist"
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;
                    const tabName = tab.split(".")[0];
                    return (
                        <button
                            key={tab}
                            role="tab"
                            id={`tab-${tabName}`}
                            aria-controls={`panel-${tabName}`}
                            aria-selected={isActive}
                            aria-label={`Open ${tab} tab`}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1 rounded transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:text-cyber-yellow focus-visible:bg-text-primary/5 ${
                                isActive
                                    ? "bg-text-primary/5 text-cyber-yellow border-b-2 border-cyber-yellow"
                                    : "text-text-secondary hover:text-text-primary"
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
