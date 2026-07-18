import NavLinks from "../layout/NavLinks";

export default function QuickLinks() {
    return (
        <div className="flex flex-col items-start">
            <span className="text-cyber-yellow font-mono text-xs md:text-sm tracking-widest uppercase mb-2">
                &lt;
                <span className="text-text-primary font-mono">
                    Navigation
                </span>{" "}
                /&gt;
            </span>

            <NavLinks parent="footer"/>
        </div>
    );
}
