import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useTabBar } from "../../context/TabBarContext";

export default function Footer() {
    const { setActiveTab } = useTabBar();
    const [copied, setCopied] = useState(false);
    const email = "kunalsambyal9628@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email: ", err);
        }
    };

    return (
        <footer className="w-full border-t border-white/5 bg-transparent px-6 md:px-10 py-12 md:py-16">
            <div className="max-w-360 mx-auto flex flex-col gap-12">
                {/* --- Main Columns Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Left Column: Email Queries Section */}
                    <div className="flex flex-col items-start text-left">
                        <span className="text-cyber-yellow font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
                            &lt;
                            <span className="text-text-primary font-mono">
                                Queries
                            </span>{" "}
                            /&gt;
                        </span>
                        <h2 className="text-text-secondary font-display font-bold text-xs md:text-sm tracking-wider uppercase mb-2">
                            Email me for any queries
                        </h2>

                        {/* Copy Button */}
                        <button
                            onClick={handleCopy}
                            className="group flex flex-wrap items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded cursor-pointer"
                            aria-label="Copy email address"
                        >
                            <span className="text-sm sm:text-base md:text-lg font-display font-bold text-text-primary group-hover:text-cyber-yellow transition-colors duration-200 uppercase break-all">
                                {email}
                            </span>
                            <div className="text-text-secondary group-hover:text-cyber-yellow transition-colors shrink-0">
                                {copied ? (
                                    <span className="flex items-center gap-1 text-xs text-cyber-yellow font-bold animate-pulse">
                                        <FiCheck className="w-4 h-4" />
                                        Copied!
                                    </span>
                                ) : (
                                    <FiCopy className="w-5 h-5" />
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Middle Column: Quick Links */}
                    <div className="flex flex-col items-start">
                        <span className="text-cyber-yellow font-mono text-xs md:text-sm tracking-widest uppercase mb-4">
                            &lt;
                            <span className="text-text-primary font-mono">
                                Navigation
                            </span>{" "}
                            /&gt;
                        </span>
                        <h2 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-3">
                            Quick Links
                        </h2>
                        <ul className="flex flex-col gap-2.5 text-left">
                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setActiveTab("about.md")}
                                    className="text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    onClick={() => setActiveTab("skills.tsx")}
                                    className="text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Follow (Text links instead of icons) */}
                    <div className="flex flex-col items-start">
                        <span className="text-cyber-yellow font-mono text-xs md:text-sm tracking-widest uppercase mb-4">
                            &lt;
                            <span className="text-text-primary font-mono">
                                Socials
                            </span>{" "}
                            /&gt;
                        </span>
                        <h2 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-3">
                            Follow
                        </h2>
                        <ul className="flex flex-col gap-2.5 text-left">
                            <li>
                                <a
                                    href="https://github.com/KunalSambyal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/kuanl-sambyal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/Kunal_Sambyal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded"
                                >
                                    X
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- Bottom Section: Copyright & Git Status --- */}
                <div className="w-full flex flex-col gap-4 border-t border-white/5 pt-8">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <div>
                            <span className="font-display font-extrabold text-lg text-white">
                                <span className="text-cyber-yellow font-mono">
                                    &lt;
                                </span>
                                Kunal.S
                                <span className="text-cyber-yellow font-mono">
                                    {" "}
                                    /&gt;
                                </span>
                            </span>
                            <p className="text-xs text-text-secondary mt-1 font-medium">
                                © {new Date().getFullYear()} Kunal Sambyal. All
                                rights reserved.
                            </p>
                        </div>
                        <div className="text-xs text-text-secondary font-mono">
                            Handcrafted with{" "}
                            <span className="text-cyber-purple">React</span> &{" "}
                            <span className="text-cyber-purple">
                                Tailwind v4
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex justify-center text-[10px] md:text-xs text-text-secondary/20 font-mono select-none border-t border-white/10 pt-4">
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
