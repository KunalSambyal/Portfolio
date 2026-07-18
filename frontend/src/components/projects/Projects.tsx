import ProjectsCard, { type ProjectData } from "./ProjectsCard";

export default function Projects() {
    const projectsData: ProjectData[] = [
        {
            title: "Game Library Bay",
            description:
                "A responsive single-page gaming search and filter catalog app. Implemented query parameter persistence for filtering states.",
            tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
            githubUrl: "https://github.com/KunalSambyal/game-library-bay", // Update with your actual links ifneeded
            liveUrl: "https://game-library-bay.vercel.app",
        },
        {
            title: "Pomodoro Timer",
            description:
                "A highly accessible productivity utility featuring focus/break loops, visual timers, and state persistence with local storage.",
            tech: ["React", "TypeScript", "Context API", "Local Storage"],
            githubUrl: "https://github.com/KunalSambyal/pomodoro-timer",
            liveUrl: "https://pomodoro-timer.vercel.app",
        },
        {
            title: "Custom PC Build Recommender",
            description:
                "A relational terminal recommendation catalog system that coordinates custom hardware builds and executes CRUD commands.",
            tech: ["Python", "MySQL", "Relational Databases"],
            githubUrl: "https://github.com/KunalSambyal/pc-recommender",
        },
        {
            title: "DSA Repository",
            description:
                "A structured code notebook cataloging data structure implementations, algorithmic complexities, and Leetcode solution guides.",
            tech: ["Python", "Markdown", "Algorithms", "DSA"],
            githubUrl: "https://github.com/KunalSambyal/DSA-Solutions",
        },
        {
            title: "GitHub Profile Searcher",
            description:
                "An async API profile explorer query utility fetching profile metrics, repositories list, and rendering details dynamically.",
            tech: ["JavaScript", "HTML", "CSS", "REST API"],
            githubUrl: "https://github.com/KunalSambyal/github-searcher",
            liveUrl: "https://github-searcher.vercel.app",
        },
    ];
    return (
        <section
            id="projects"
            className="w-full px-6 md:px-10 py-16 md:py-24 border-t border-white/5 bg-transparent"
        >
            <div className="max-w-360 mx-auto">
                {/* Header Title */}
                <div className="flex flex-col items-start mb-12">
                    <span className="text-cyber-yellow font-mono text-xs md:text-sm tracking-widest uppercase mb-2">
                        &lt;<span className="text-text-primary font-mono">Showcase</span> /&gt;
                    </span>
                    <h2 className="text-2xl md:text-4xl font-display font-extrabold text-text-primary">
                        Featured Projects
                    </h2>
                </div>

                {/* Flex Layout: Downward Pyramid */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {projectsData.map((project, idx) => (
                        <div
                            key={idx}
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
