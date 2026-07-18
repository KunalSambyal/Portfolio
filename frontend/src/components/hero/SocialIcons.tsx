import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function SocialIcons() {
    const iconParentStyle =
        "focus-visible:outline-2 focus-visible:outline-cyber-yellow rounded p-1";
    const iconsStyle =
        "w-5 h-5 text-text-secondary hover:text-cyber-yellow transition-colors";
    return (
        <div className="flex flex-wrap gap-3 mb-4">
            <a
                href="https://github.com/KunalSambyal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={iconParentStyle}
            >
                <FaGithub className={iconsStyle} />
            </a>
            <a
                href="https://www.linkedin.com/in/kuanl-sambyal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={iconParentStyle}
            >
                <FaLinkedin className={iconsStyle} />
            </a>
            <a
                href="https://x.com/Kunal_Sambyal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile"
                className={iconParentStyle}
            >
                <BsTwitterX className={iconsStyle} />
            </a>
            <a
                href="mailto:kunalsambyal9628@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Email"
                className={iconParentStyle}
            >
                <FiMail className={iconsStyle} />
            </a>
        </div>
    );
}
