import { useState } from "react";
import { TabBarContext } from "./TabBarContextObject";
import type { Tab } from "./TabBarContextObject";

export function TabBarProvider({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<Tab>("skills.tsx");

    return (
        <TabBarContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabBarContext.Provider>
    );
}
