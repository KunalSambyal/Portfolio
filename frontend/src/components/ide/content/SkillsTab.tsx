export default function SkillsTab() {
    return (
        <div className="whitespace-pre">
            <div>
                <span className="text-sky-400 font-bold">const </span>
                <span className="text-white">skills</span>
                <span className="text-slate-400"> = </span>
                <span className="text-yellow-400">&#123;</span>
            </div>
            <div className="pl-4">
                <span className="text-cyber-yellow">languages</span>
                <span className="text-slate-400">:</span>
                <span className="text-purple-400">[</span>
                <span className="text-emerald-400">
                    "Python", "C++", "JavaScript", "TypeScript"
                </span>
                <span className="text-purple-400">]</span>
                <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
                <span className="text-cyber-yellow">frontend</span>
                <span className="text-slate-400">:</span>
                <span className="text-purple-400">[</span>
                <span className="text-emerald-400">
                    "React", "HTML/CSS", "Tailwind CSS"
                </span>
                <span className="text-purple-400">]</span>
                <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
                <span className="text-cyber-yellow">database</span>
                <span className="text-slate-400">:</span>
                <span className="text-emerald-400">"MySQL"</span>
                <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
                <span className="text-cyber-yellow">tools</span>
                <span className="text-slate-400">: </span>
                <span className="text-purple-400">[</span>
                <span className="text-emerald-400">
                    "Git", "GitHub", "Docker", "Figma"
                </span>
                <span className="text-purple-400">]</span>
            </div>
            <div>
                <span className="text-yellow-400">&#125;</span>
                <span className="text-slate-400">;</span>
            </div>
        </div>
    );
}
