import SocialIcons from "./SocialIcons";
import TextContent from "./TextContent";
import IdeWidget from "../ide/IdeWidget";
import { TabBarProvider } from "../../context/TabBarContext";

export default function Hero() {
    return (
        <section className="w-full flex-1 flex items-center px-6 md:px-8 py-12 md:py-20 bg-transparent">
            {/* Responsive Grid Layout */}
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text & Content */}
                <div className="flex flex-col items-start text-left">
                    <TextContent />
                    <SocialIcons />
                </div>

                <div className="w-full">
                    <TabBarProvider>
                        <IdeWidget />
                    </TabBarProvider>
                </div>
            </div>
        </section>
    );
}
