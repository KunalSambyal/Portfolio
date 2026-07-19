import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export interface ProjectData {
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
}

interface ProjectCardProps {
    project: ProjectData;
}

export default function ProjectsCard({ project }: ProjectCardProps) {
    return (
        <article className="group flex flex-col justify-between px-6 py-7 rounded-2xl bg-secondary-bg/20 border border-white/5 backdrop-blur-md hover:border-cyber-yellow/30 hover:bg-secondary-bg/30 hover:-translate-y-1 transition-[transform,border-color,background-color] duration-300 shadow-xl h-full">
            <div>
                {/* Title And Live Link */}
                <div className="flex justify-between items-center gap-4 mb-3">
                    <h3 className="text-lg md:text-xl font-display font-bold text-text-primary group-hover:text-cyber-yellow transition-colors">
                        <a
                            href={project.liveUrl || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus:outline-none focus-visible:text-cyber-yellow focus-visible:underline hover:underline decoration-cyber-yellow/40 decoration-2 underline-offset-4"
                        >
                            {project.title}
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </h3>

                    {/* Live Link Icon */}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo of ${project.title}`}
                            className="text-text-secondary hover:text-white transition-colors focus-ring p-1"
                        >
                            <FiArrowUpRight className="w-5 h-5" />
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    )}
                </div>

                {/* Description */}
                <p className="text-text-primary/80 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                </p>
            </div>

            <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] md:text-xs font-mono font-bold text-cyber-purple/90 bg-cyber-purple/5 border border-cyber-purple/20 hover:bg-cyber-purple/20 hover:border-cyber-purple/40 hover:scale-105 px-2.5 py-0.5 rounded transition-all duration-200 cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* GitHub Link */}
                <div className="flex items-center justify-between border-t border-text-primary/5 pt-4">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-text-primary hover:text-cyber-yellow transition-colors focus-ring p-1"
                    >
                        <FaGithub className="w-5 h-5" />
                        <span className="sr-only"> (opens in new tab)</span>
                    </a>
                </div>
            </div>
        </article>
    );
}
