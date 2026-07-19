export default function TextContent() {
    return (
        <>
            <span className="text-cyber-yellow/90 font-semibold font-mono text-md md:text-lg lg:text-2xl tracking-widest uppercase block mb-2">
                &lt;<span className="text-text-primary/95">Hello</span> /&gt;
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold text-white mb-2 tracking-tight leading-tight sm:whitespace-nowrap">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-text-primary/95 font-bold mr-3 align-middle">
                    I'm
                </span>
                <span className="inline-flex items-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-electric-indigo font-bold font-mono mr-1.5 select-none">
                        &#123;
                    </span>
                    Kunal Sambyal
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-electric-indigo font-bold font-mono ml-1.5 select-none">
                        &#125;
                    </span>
                </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-mono text-cyber-yellow/90 mb-6 font-medium">
                &lt;
                <span className="text-text-primary/95">
                    Software Developer{" "}
                </span>
                /&gt;
            </h2>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed tracking-wider mb-6 max-w-md font-bold">
                Building projects, learning{" "}
                <span className="text-cyber-yellow/90 font-mono">&lt;</span>
                <span className="text-text-primary/95">backend</span>
                <span className="text-cyber-yellow/90 font-mono">
                    &gt;
                </span>{" "}
                development, and improving one commit at a time.
            </p>
        </>
    );
}
