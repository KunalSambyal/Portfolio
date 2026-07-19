import SocialIcons from "./SocialIcons";
import TextContent from "./TextContent";
import IdeWidget from "../ide/IdeWidget";
import CtaButton from "./CtaButton";
import { socialData } from "../../data/social";

export default function Hero() {
    return (
        <section
            id="about"
            className="w-full px-6 md:px-8 py-12 md:py-20 bg-transparent"
        >
            {/* Responsive Flex Layout */}
            <div className="max-w-360 w-full mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Column Text Content */}
                <div className="w-full lg:w-[53%] flex flex-col items-start text-left">
                    <TextContent />
                    <SocialIcons />
                    <div className="flex flex-wrap gap-4 mt-2">
                        <CtaButton
                            label="Contact"
                            href={`mailto:${socialData.email}`}
                            variant="primary"
                        />
                        <CtaButton
                            label="Download CV"
                            href="/resume.pdf"
                            download="Kunal_S_CV.pdf"
                            variant="secondary"
                        />
                    </div>
                </div>

                {/* Right Column IDE Widget */}
                <div
                    id="skills"
                    className="w-full min-w-0 lg:w-[47%] scroll-mt-24"
                >
                    <IdeWidget />
                </div>
            </div>
        </section>
    );
}
