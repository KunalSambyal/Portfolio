export default function TextContent() {
    return (
        <>
            <span className="text-cyber-yellow font-semibold font-mono text-md md:text-lg lg:text-2xl tracking-widest uppercase block mb-2">
                &lt;<span className="text-text-primary">Hello</span> /&gt;
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold text-white mb-2 tracking-tight leading-tight sm:whitespace-nowrap">
                I'm{" "}
                <span className="text-electric-indigo font-semibold">
                    &#123;{" "}
                </span>
                Kunal Sambyal
                <span className="text-electric-indigo font-semibold">
                    {" "}
                    &#125;
                </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-mono text-cyber-yellow/80 mb-6 font-medium">
                &lt;<span className="text-text-primary">Software Developer </span>
                /&gt;
            </h2>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed tracking-wider mb-6 max-w-md font-bold">
                Building projects. Learning{" "}
                <span className="text-cyber-yellow font-mono">&lt;</span>
                <span className="text-text-primary">web</span>
                <span className="text-cyber-yellow font-mono">&gt;</span>
                {" "}and{" "}
                <span className="text-cyber-yellow font-mono">&lt;</span>
                <span className="text-text-primary">software</span>
                <span className="text-cyber-yellow font-mono">&gt;</span>
                {" "}development. Sharing the journey.
            </p>
        </>
    );
}
