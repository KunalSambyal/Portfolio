import ProjectsCard from "./ProjectsCard";
import projectsData from "../../data/projects.json";

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full px-6 md:px-8 py-16 md:py-24 border-t border-text-primary/10 bg-transparent"
        >
            <div className="max-w-360 mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-start mb-12">
                    <span className="text-cyber-yellow font-mono font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
                        &lt;
                        <span className="text-text-primary font-mono font-bold">
                            Showcase
                        </span>{" "}
                        /&gt;
                    </span>
                    <h2 className="text-2xl md:text-4xl font-display font-extrabold text-text-primary">
                        Featured Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.title}
                            className="w-full md:w-[calc(50%-16px)] xl:w-[calc(33.33%-22px)] max-w-md xl:max-w-none flex"
                        >
                            <ProjectsCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
