interface CtaButtonProps {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    download?: string;
    target?: string;
    rel?: string;
}

export default function CtaButton({
    label,
    href,
    variant = "primary",
    download,
    target,
    rel,
}: CtaButtonProps) {
    const baseStyles =
        "inline-block font-display font-bold text-xs md:text-sm px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_15px_rgba(255,209,102,0.3)] active:scale-95 focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-4 transition-all duration-300 cursor-pointer text-center";
    
    const primaryStyles = "bg-cyber-yellow text-primary-bg";
    const secondaryStyles =
        "bg-transparent border border-white/20 text-white hover:bg-white hover:text-primary-bg hover:border-white";

    const styles = `${baseStyles} ${variant === "primary" ? primaryStyles : secondaryStyles}`;

    return (
        <a
            href={href}
            download={download}
            target={target}
            rel={rel}
            className={styles}
        >
            {label}
        </a>
    );
}
