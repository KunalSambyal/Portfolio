import SocialIcons from "./SocialIcons";
import TextContent from "./TextContent";
import IdeWidget from "../ide/IdeWidget";
import CtaButton from "./CtaButton";

export default function Hero() {
    return (
        <section id="about" className="w-full flex-1 flex items-center px-6 md:px-8 py-12 md:py-20 bg-transparent">
            {/* Responsive Grid Layout */}
            <div className="max-w-360 w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Text & Content */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
                    <TextContent />
                    <SocialIcons />
                    <div className="flex flex-wrap gap-4 mt-2">
                        <CtaButton
                            label="Contact"
                            href="mailto:kunalsambyal9628@gmail.com"
                            variant="primary"
                        />
                        <CtaButton
                            label="Download CV"
                            href="/resume.pdf"
                            download="KunalSambyalResume.pdf"
                            variant="secondary"
                        />
                    </div>
                </div>

                <div id="skills" className="w-full min-w-0 lg:col-span-6 scroll-mt-24">
                    <IdeWidget />
                </div>
            </div>
        </section>
    );
}
