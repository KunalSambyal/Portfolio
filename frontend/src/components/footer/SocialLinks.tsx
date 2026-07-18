export default function SocialLinks() {
    const socialLinks = [
        {
            label: "GitHub",
            link: "https://github.com/KunalSambyal",
        },
        {
            label: "Linkedin",
            link: "https://www.linkedin.com/in/kuanl-sambyal/",
        },
        {
            label: "X",
            link: "https://x.com/Kunal_Sambyal",
        },
    ];
    const linkStyles =
        "text-text-secondary hover:text-cyber-yellow text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 rounded";
    return (
        <div className="flex flex-col items-start">
            <span className="text-cyber-yellow font-mono text-xs md:text-sm tracking-widest uppercase mb-2">
                &lt;
                <span className="text-text-primary font-mono">
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
                            className={linkStyles}
                        >
                            {socialLink.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
