import { createContext } from "react";

export type Tab = "about.md" | "skills.tsx" | "experience.json" | undefined;

export interface TabBarContextType {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

export const TabBarContext = createContext<TabBarContextType | undefined>(
    undefined,
);
