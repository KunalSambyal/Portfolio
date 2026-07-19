import Copyright from "./Copyright";
import EmailQueries from "./EmailQueries";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-transparent px-6 md:px-10 py-12 md:py-16">
            <div className="max-w-360 mx-auto flex flex-col gap-12">
                {/* Grid Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Email Queries Column */}
                    <EmailQueries />

                    {/* Quick Links Column */}
                    <QuickLinks />

                    {/* Social Links Column */}
                    <SocialLinks />
                </div>

                {/* Bottom Info Section */}
                <div className="w-full flex flex-col gap-4 border-t border-white/5 pt-8">
                    <Copyright />

                    <div aria-hidden="true" className="w-full flex justify-center text-[10px] md:text-xs text-text-secondary/15 font-mono select-none border-t border-white/10 pt-4">
                        <span>
                            kunal.s ~ main * | status: active | deployment:
                            v1.0.0
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
