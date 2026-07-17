interface CodeLineProps {
    indent?: number;
    children: React.ReactNode;
}

// Helper to render indentation wrapper
export function CodeLine({ indent = 0, children }: CodeLineProps) {
    const indentClass = indent === 4 ? "pl-4" : indent === 8 ? "pl-8" : "";
    return <div className={`${indentClass} whitespace-nowrap`}>{children}</div>;
}

// Helper to format a string array dynamically like: ["A", "B"]
export function CodeStringArray({ values }: { values: string[] }) {
    return (
        <>
            <span className="text-cyber-purple">[</span>
            <span className="text-emerald-400">
                {values.map(
                    (val, idx) =>
                        `"${val}"${idx < values.length - 1 ? ", " : ""}`,
                )}
            </span>
            <span className="text-cyber-purple">]</span>
        </>
    );
}

// Main Property Helper (renders "key": "value" or "key": ["values"])
interface JsonPropertyProps {
    name: string;
    value: string | string[];
    indent?: number;
    isLast?: boolean;
    quotesInKey?: boolean;
}

export function JsonProperty({
    name,
    value,
    indent = 4,
    isLast = false,
    quotesInKey,
}: JsonPropertyProps) {
    const formattedKey = quotesInKey ? `"${name}"` : name;

    return (
        <CodeLine indent={indent}>
            <span className="text-cyber-yellow">{formattedKey}</span>
            <span className="text-text-secondary">: </span>
            {Array.isArray(value) ? (
                <CodeStringArray values={value} />
            ) : (
                <span className="text-emerald-400">"{value}"</span>
            )}
            {!isLast && <span className="text-text-secondary">,</span>}
        </CodeLine>
    );
}

// Object Wrapper Helper (renders const name = { ... }; or { ... })
interface JsonObjectProps {
    name?: string;
    isConst?: boolean;
    children: React.ReactNode;
    isLast?: boolean;
}

export function JsonObject({
    name,
    isConst = false,
    children,
    isLast = false,
}: JsonObjectProps) {
    return (
        <div>
            {isConst && name ? (
                <div>
                    <span className="text-electric-indigo font-bold">
                        const{" "}
                    </span>
                    <span className="text-white">{name}</span>
                    <span className="text-text-secondary"> = </span>
                    <span className="text-cyber-yellow">&#123;</span>
                </div>
            ) : (
                <span className="text-cyber-yellow">&#123;</span>
            )}
            {children}

            <div>
                <span className="text-cyber-yellow">&#125;</span>
                {isConst ? (
                    <span className="text-text-secondary">;</span>
                ) : (
                    !isLast && <span className="text-text-secondary">,</span>
                )}
            </div>
        </div>
    );
}
