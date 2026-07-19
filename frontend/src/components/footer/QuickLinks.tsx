import NavLinks from "../layout/NavLinks";

export default function QuickLinks() {
    return (
        <div className="flex flex-col items-start">
            <span className="text-cyber-yellow font-mono font-bold text-xs md:text-sm tracking-widest uppercase mb-4">
                &lt;
                <span className="text-text-primary font-mono font-bold">
                    Navigation
                </span>{" "}
                /&gt;
            </span>

            <nav aria-label="Footer Navigation">
                <NavLinks parent="footer" />
            </nav>
        </div>
    );
}
