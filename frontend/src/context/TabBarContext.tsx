import { createContext, useState } from "react";

export type Tab = "about.md" | "skills.tsx" | "experience.json" | undefined;

interface TabBarContextType {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

export const TabBarContext = createContext<TabBarContextType | undefined>(
    undefined,
);

export function TabBarProvider({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<Tab>("skills.tsx");

    return (
        <TabBarContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabBarContext.Provider>
    );
}
