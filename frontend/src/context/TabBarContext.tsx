import { useContext, createContext, useState } from "react";

type Tab = "skills.tsx" | "experience.json" | "about.md";

interface TabBarContextType {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const TabBarContext = createContext<TabBarContextType | undefined>(undefined);

export function TabBarProvider({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<Tab>("skills.tsx");

    return (
        <TabBarContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabBarContext.Provider>
    );
}

export function useTabBar() {
    const context = useContext(TabBarContext);
    if (!context) {
        throw new Error("useTabBar must be used within a TabBarProvider");
    }
    return context;
}
