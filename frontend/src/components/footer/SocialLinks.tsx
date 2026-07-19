import { socialData } from "../../data/social";

export default function SocialLinks() {
    const socialLinks = [
        {
            label: "GitHub",
            link: socialData.github,
        },
        {
            label: "Linkedin",
            link: socialData.linkedin,
        },
        {
            label: "X",
            link: socialData.x,
        },
    ];
    const linkStyles =
        "text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-ring";
    return (
        <div className="flex flex-col items-start">
            <span className="text-cyber-yellow font-mono font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
                &lt;
                <span className="text-text-primary font-mono font-bold">
                    Socials
                </span>{" "}
                /&gt;
            </span>
            <ul className="flex flex-col gap-2.5 text-left">
                {socialLinks.map((socialLink) => (
                    <li key={socialLink.label}>
                        <a
                            href={socialLink.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${socialLink.label} profile`}
                            className={linkStyles}
                        >
                            {socialLink.label}
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
