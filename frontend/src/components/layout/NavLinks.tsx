import { type Tab } from "../../context/TabBarContext";
import { useTabBar } from "../../hooks/useTabBar";

interface QuickLink {
    label: string;
    link: string;
    file?: Tab;
}

interface NavLinksProps {
    parent: "navbar" | "footer";
}

export default function NavLinks({ parent }: NavLinksProps) {
    const { setActiveTab } = useTabBar();

    const parentStyles =
        parent === "navbar"
            ? "hidden md:flex items-center gap-10"
            : "flex flex-col gap-2.5 text-left";

    const linkStyles = `text-text-secondary hover:text-cyber-yellow focus-ring duration-200 font-medium ${parent === "navbar" ? "hover:-translate-y-[1px] focus-visible:text-cyber-yellow transition-all text-base lg:text-xl tracking-wide" : "text-sm transition-colors"}`;

    const quickLinks: QuickLink[] = [
        { label: "About", link: "#about", file: "about.md" },
        { label: "Skills", link: "#skills", file: "skills.tsx" },
        { label: "Projects", link: "#projects" },
    ];
    return (
        <ul className={parentStyles}>
            {quickLinks.map((quickLink) => (
                <li key={quickLink.label}>
                    <a
                        href={quickLink.link}
                        onClick={() => {
                            if (quickLink.file) {
                                setActiveTab(quickLink.file);
                            }
                        }}
                        className={linkStyles}
                        aria-label={`Navigate to ${quickLink.label} section`}
                    >
                        {quickLink.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}
