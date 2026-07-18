import { FiSun } from "react-icons/fi";
import { useTabBar } from "../../context/TabBarContext";

export default function Navbar() {
    const { setActiveTab } = useTabBar();
    
    const linkStyles =
        "text-text-secondary hover:text-cyber-yellow hover:-translate-y-[1px] focus-visible:text-cyber-yellow focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded transition-all duration-200 font-medium text-md lg:text-xl tracking-wide";

    return (
        <nav className="w-full flex justify-between items-center px-6 md:px-10 py-5 border-b border-white/5 bg-primary-bg/20 backdrop-blur-md sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center">
                <a
                    href="#"
                    className="font-display font-extrabold lg:text-2xl text-xl tracking-wider text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded transition-opacity"
                >
                    <span className="text-cyber-yellow font-mono">&lt;</span>
                    Kunal.S
                    <span className="text-cyber-yellow font-mono"> /&gt;</span>
                </a>
            </div>

            {/* Nav Links */}
            <ul className="hidden md:flex items-center gap-10">
                <li>
                    <a
                        href="#about"
                        onClick={() => setActiveTab("about.md")}
                        className={linkStyles}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#skills"
                        onClick={() => setActiveTab("skills.tsx")}
                        className={linkStyles}
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className={linkStyles}>
                        Projects
                    </a>
                </li>
            </ul>

            {/* Theme Button */}
            <button
                className="focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded p-1.5 text-text-secondary hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle color theme"
            >
                <FiSun className="w-5 h-5" />
            </button>
        </nav>
    );
}
