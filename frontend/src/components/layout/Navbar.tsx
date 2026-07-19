import { FiSun } from "react-icons/fi";
import NavLinks from "./NavLinks";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center px-6 md:px-10 py-5 border-b border-white/5 bg-primary-bg/20 backdrop-blur-md sticky top-0 z-50" aria-label="Main Navigation">
            {/* Logo */}
            <div className="flex items-center">
                <a
                    href="#"
                    className="font-display font-extrabold lg:text-2xl text-xl tracking-wider text-white hover:opacity-90 focus-ring transition-opacity"
                    aria-label="Navigate to home section"
                >
                    <span className="text-cyber-yellow font-mono">&lt;</span>
                    Kunal.S
                    <span className="text-cyber-yellow font-mono"> /&gt;</span>
                </a>
            </div>

            {/* Nav Links */}
            <NavLinks parent="navbar" />

            {/* Theme Button */}
            <button
                className="focus-ring p-1.5 text-text-secondary hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle color theme"
            >
                <FiSun className="w-5 h-5" />
            </button>
        </nav>
    );
}
