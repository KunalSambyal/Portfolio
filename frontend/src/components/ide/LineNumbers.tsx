export default function LineNumber() {
    return (
        <div aria-hidden="true" className="text-right pr-4 border-r border-white/5 select-none text-text-secondary/30 py-4 w-12 shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="">
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
