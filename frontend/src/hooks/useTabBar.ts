import { useContext } from "react";
import { TabBarContext } from "../context/TabBarContextObject";

export function useTabBar() {
    const context = useContext(TabBarContext);
    if (!context) {
        throw new Error("useTabBar must be used within a TabBarProvider");
    }
    return context;
}
