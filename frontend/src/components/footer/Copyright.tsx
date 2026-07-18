export default function Copyright() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
                <p className="text-xs text-text-secondary mt-1 font-medium">
                    © {new Date().getFullYear()} Kunal Sambyal. All rights
                    reserved.
                </p>
            </div>
            <div className="text-xs text-text-secondary font-mono">
                Handcrafted with{" "}
                <span className="text-cyber-purple">React</span> &{" "}
                <span className="text-cyber-purple">Tailwind v4</span>
            </div>
        </div>
    );
}
