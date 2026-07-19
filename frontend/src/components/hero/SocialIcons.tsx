import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialData } from "../../data/social";

interface socialIconsInterface {
    icon: React.ReactNode;
    link: string;
    label: string;
}

export default function SocialIcons() {
    const iconParentStyle = "focus-ring p-1";
    const iconsStyle =
        "w-5 h-5 text-text-secondary hover:text-cyber-yellow transition-colors";

    const socialIcons: socialIconsInterface[] = [
        {
            icon: <FaGithub className={iconsStyle} />,
            link: socialData.github,
            label: "GitHub Profile",
        },
        {
            icon: <FaLinkedin className={iconsStyle} />,
            link: socialData.linkedin,
            label: "LinkedIn Profile",
        },
        {
            icon: <BsTwitterX className={iconsStyle} />,
            link: socialData.x,
            label: "X Profile",
        },
        {
            icon: <FiMail className={iconsStyle} />,
            link: `mailto:${socialData.email}`,
            label: "Send Email",
        },
    ];
    return (
        <div className="flex flex-wrap gap-3 mb-4">
            {socialIcons.map((socialIcon) => {
                const isExternal = socialIcon.link.startsWith("http");
                return (
                    <a
                        key={socialIcon.label}
                        href={socialIcon.link}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        aria-label={socialIcon.label}
                        className={iconParentStyle}
                    >
                        {socialIcon.icon}
                        {isExternal && (
                            <span className="sr-only"> (opens in new tab)</span>
                        )}
                    </a>
                );
            })}
        </div>
    );
}
