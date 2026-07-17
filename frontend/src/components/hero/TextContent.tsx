export default function TextContent() {
    return (
        <>
            <span className="text-cyber-yellow font-mono text-sm tracking-widest uppercase block mb-3">
                &lt;Hello /&gt;
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2 tracking-tight leading-tight">
                I'm <span className="text-royal-blue">&#123; </span>
                Kunal Sambyal
                <span className="text-royal-blue"> &#125;</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-mono text-cyber-yellow/80 mb-6 font-medium">
                &lt;Web Developer /&gt;
            </h2>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Computer Science student focused on Backend Development, DSA,
                and modern web development. Experienced with React, TypeScript,
                Python, and REST APIs.
            </p>
        </>
    );
}
