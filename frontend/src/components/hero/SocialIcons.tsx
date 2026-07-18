import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

interface socialIconsInterface {
    icon: React.ReactNode;
    link: string;
    label: string;
}

export default function SocialIcons() {
    const iconParentStyle =
        "focus-visible:outline-2 focus-visible:outline-cyber-yellow rounded p-1";
    const iconsStyle =
        "w-5 h-5 text-text-secondary hover:text-cyber-yellow transition-colors";

    const socialIcons: socialIconsInterface[] = [
        {
            icon: <FaGithub className={iconsStyle} />,
            link: "https://github.com/KunalSambyal",
            label: "GitHub Profile",
        },
        {
            icon: <FaLinkedin className={iconsStyle} />,
            link: "https://www.linkedin.com/in/kuanl-sambyal/",
            label: "LinkedIn Profile",
        },
        {
            icon: <BsTwitterX className={iconsStyle} />,
            link: "https://x.com/Kunal_Sambyal",
            label: "X Profile",
        },
        {
            icon: <FiMail className={iconsStyle} />,
            link: "mailto:kunalsambyal9628@gmail.com",
            label: "Send Email",
        },
    ];
    return (
        <div className="flex flex-wrap gap-3 mb-4">
            {socialIcons.map((socialIcon, idx) => (
                <a
                    key={idx}
                    href={socialIcon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialIcon.label}
                    className={iconParentStyle}
                >
                    {socialIcon.icon}
                </a>
            ))}
        </div>
    );
}
