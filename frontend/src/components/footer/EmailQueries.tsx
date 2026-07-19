import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";
import { socialData } from "../../data/social";

export default function EmailQueries() {
    const [copied, setCopied] = useState(false);
    const email = socialData.email;

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
        <div className="flex flex-col items-start text-left">
            <span className="text-cyber-yellow font-mono font-bold text-xs md:text-sm tracking-widest uppercase mb-3">
                &lt;
                <span className="text-text-primary font-mono font-bold">
                    Queries
                </span>{" "}
                /&gt;
            </span>
            <h2 className="text-text-secondary font-display font-bold text-xs md:text-sm tracking-wider uppercase mb-2">
                Email for any queries
            </h2>

            {/* Copy Button */}
            <button
                onClick={handleCopy}
                className="group flex flex-wrap items-center gap-3 text-left focus-ring cursor-pointer"
                aria-label="Copy email address"
            >
                <span className="text-sm sm:text-base md:text-lg font-display font-bold text-text-primary group-hover:text-cyber-yellow transition-colors duration-200 uppercase break-all">
                    {email}
                </span>
                <div 
                    className="text-text-secondary group-hover:text-cyber-yellow transition-colors shrink-0"
                    aria-live="polite"
                >
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
    );
}
