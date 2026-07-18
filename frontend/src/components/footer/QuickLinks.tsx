import NavLinks from "../layout/NavLinks";

export default function QuickLinks() {
    return (
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

            <NavLinks parent="footer"/>
        </div>
    );
}
