import { useTabBar } from "../../hooks/useTabBar";
import AboutTab from "./content/AboutTab";
import ExperienceTab from "./content/ExperienceTab";
import SkillsTab from "./content/SkillsTab";
import LineNumber from "./LineNumbers";

export default function Editor() {
    const { activeTab } = useTabBar();
    return (
        <>
            {/* Editor Body Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Line Numbers */}
                <LineNumber />
                {/* Code Content Wrapper */}
                <div 
                    className="flex-1 pl-4 py-4 overflow-auto custom-scrollbar text-left leading-relaxed text-slate-300" 
                    role="tabpanel"
                    id={`panel-${activeTab?.split('.')[0] || "none"}`}
                    aria-labelledby={`tab-${activeTab?.split('.')[0] || "none"}`}
                >
                    {activeTab === "skills.tsx" && <SkillsTab />}

                    {activeTab === "experience.json" && <ExperienceTab />}

                    {activeTab === "about.md" && <AboutTab />}
                </div>
            </div>
        </>
    );
}
