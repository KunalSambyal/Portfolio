export default function Hero() {
    const capsuleStyles =
        "border border-white/10 hover:border-white text-text-secondary hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 transition-all duration-300 cursor-pointer";
    return (
        <section className="w-full flex-1 flex items-center px-6 md:px-8 py-12 md:py-20 bg-transparent">
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text & Content */}
                <div className="flex flex-col items-start text-left">
                    <span className="text-cyber-yellow font-mono text-sm tracking-widest uppercase block mb-3">
                        &lt;Hello /&gt;
                    </span>

                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2 tracking-tight leading-tight">
                        Kunal Sambyal
                    </h1>

                    <h2 className="text-xl md:text-2xl font-mono text-cyber-yellow/80 mb-6 font-medium">
                        &lt;Web Developer /&gt;
                    </h2>

                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-md">
                        Computer Science student focused on Backend Development,
                        DSA, and modern web development. Experienced with React,
                        TypeScript, Python, and REST APIs.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://github.com/KunalSambyal"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className={capsuleStyles}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kuanl-sambyal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className={capsuleStyles}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com/Kunal_Sambyal"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X Profile"
                            className={capsuleStyles}
                        >
                            X
                        </a>
                        <a
                            href="mailto:kunalsambyal9628@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send Email"
                            className="border border-cyber-yellow/30 hover:border-cyber-yellow text-text-secondary hover:text-cyber-yellow px-4 py-1.5 rounded-full text-xs font-semibold focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 transition-all duration-300 cursor-pointer"
                        >
                            Email
                        </a>
                    </div>
                </div>

                {/* Right Column: IDE Mockup Placeholder */}
                <div className="w-full h-80 rounded-2xl bg-secondary-bg/25 border border-white/5 flex items-center justify-center backdrop-blur-md">
                    <span className="text-text-secondary font-mono text-sm">
                        IDE Widget Placeholder{" "}
                    </span>
                </div>
            </div>
        </section>
    );
}
