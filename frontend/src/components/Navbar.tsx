export default function Navbar() {
    const linkStyles =
        "text-text-secondary hover:text-white hover:-translate-y-[1px] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded transition-all duration-200 font-medium text-sm tracking-wide";

    return (
        <nav className="w-full flex justify-between items-center px-6 md:px-8 py-5 border-b border-white/5 bg-primary-bg/20 backdrop-blur-md sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center">
                <a
                    href="#"
                    className="font-display font-extrabold text-xl tracking-wider text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded transition-opacity"
                >
                    <span className="text-cyber-yellow font-mono">&lt;</span>
                    Kunal.S
                    <span className="text-cyber-yellow font-mono"> /&gt;</span>
                </a>
            </div>

            {/* Nav Links */}
            <ul className="hidden md:flex items-center gap-10">
                <li>
                    <a href="#about" className={linkStyles}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" className={linkStyles}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className={linkStyles}>
                        Projects
                    </a>
                </li>
            </ul>

            {/* CTA Button */}
            <div>
                <a
                    href="/resume.pdf"
                    download="KunalSambyalResume.pdf"
                    className="inline-block bg-cyber-yellow text-primary-bg font-display font-bold text-xs md:text-sm px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_15px_rgba(255,209,102,0.3)] focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 transition-all duration-300 cursor-pointer"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}
