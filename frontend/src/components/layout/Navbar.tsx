import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./NavLinks";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const navContainerRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Close on clicking outside
    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (
                navContainerRef.current &&
                !navContainerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header 
            ref={navContainerRef}
            className="w-full sticky top-0 z-50 border-b border-text-primary/10 bg-primary-bg/25 backdrop-blur-md px-6 md:px-8"
        >
            <nav className="max-w-360 w-full mx-auto flex justify-between items-center py-5 relative z-50" aria-label="Main Navigation">
                {/* Logo */}
                <div className="flex items-center">
                    <a
                        href="#"
                        className="font-display font-extrabold lg:text-2xl text-xl tracking-wider text-text-primary hover:opacity-90 focus-ring transition-opacity"
                        aria-label="Navigate to home section"
                    >
                        <span className="text-cyber-yellow font-mono">&lt;</span>
                        Kunal.S
                        <span className="text-cyber-yellow font-mono"> /&gt;</span>
                    </a>
                </div>

                {/* Nav Links */}
                <NavLinks parent="navbar" />

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    {/* Theme Button */}
                    <button
                        onClick={toggleTheme}
                        className="focus-ring p-1.5 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                        aria-label={`Toggle theme to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? (
                            <FiSun className="w-5 h-5" />
                        ) : (
                            <FiMoon className="w-5 h-5" />
                        )}
                    </button>

                    {/* Mobile Menu Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus-ring p-1.5 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <FiX className="w-5 h-5" />
                        ) : (
                            <FiMenu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer Backdrop Overlay */}
            {isOpen && (
                <div
                    className="absolute top-full left-0 right-0 h-screen z-40 bg-black/20 md:hidden pointer-events-none"
                    aria-hidden="true"
                />
            )}

            {/* Mobile Drawer Overlay Menu */}
            {isOpen && (
                <div className="md:hidden w-full bg-secondary-bg/90 border-b border-text-primary/10 absolute left-0 right-0 top-full transition-all duration-300 shadow-2xl py-6 px-6 z-50">
                    <NavLinks parent="mobile" onClose={() => setIsOpen(false)} />
                </div>
            )}
        </header>
    );
}
