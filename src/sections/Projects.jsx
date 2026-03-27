import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

// --- Project Card ---
function ProjectCard({ project, index, isVisible }) {
    const isEven = index % 2 === 0;

    return (
        <div
            // ADDED: md:h-[320px] to strictly limit the height on desktop
            className={`group relative grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden glass glow-border-hover transition-all duration-500 hover:scale-[1.01] md:h-[380px] ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${200 + index * 150}ms` }}
        >
            {/* Image Side */}
            {/* ADDED: h-56 md:h-full to the wrapper so it behaves perfectly on both mobile and desktop */}
            <div className={`relative overflow-hidden h-56 md:h-full ${isEven ? '' : 'md:order-2'}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    // CHANGED: Simply w-full h-full object-cover so it fits the restricted container
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-background/60 hidden md:block pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:hidden pointer-events-none" />
            </div>

            {/* Content Side */}
            {/* Content naturally centers vertically because of flex flex-col justify-center */}
            <div className={`relative p-6 md:p-8 flex flex-col justify-center space-y-3 ${isEven ? '' : 'md:order-1'}`}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-white/5 text-muted-foreground border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {project.title}
                </h3>

                {/* Kept line-clamp to ensure long text doesn't break the new fixed height */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                    {project.showLiveDemo && project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                        >
                            Live Demo
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    )}
                    {project.showSource && project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                        >
                            Source
                            <Github className="w-3.5 h-3.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

// --- Main Projects Component ---
export default function Projects() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "PawsLife",
            description: "A platform that is designed using a human-centered design approach to replace the inefficient conventional animal adoption process.",
            image: "/img/projectProfile/pawslife.png",
            tags: ["Laravel", "PHP", "MySQL"],
            liveUrl: "https://pawslife.my.id/",
            githubUrl: "https://github.com/ChristoperChend/Pawslife",
            showLiveDemo: true,
            showSource: true,
        },
        {
            title: "RPA Create LOT AI and AC",
            description: "A Robotic Process Automation (RPA) project that mimics human actions to automate repetitive, rule-based, high-volume digital tasks",
            image: "/img/projectProfile/rpa-create-lot-ai-ac.jpg",
            tags: ["Laravel", "Next.js", "N8N"],
            liveUrl: "#",
            githubUrl: "#",
            showLiveDemo: false,
            showSource: false,
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio showcasing projects and skills with smooth animations, dark theme, and optimized performance.",
            image: "/img/projectProfile/portfolio.png",
            tags: ["React", "Vite", "Tailwind"],
            liveUrl: "#",
            githubUrl: "#",
            showLiveDemo: true,
            showSource: true,
        },
    ];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-18 relative z-10">

                {/* Section Header */}
                <div className={`text-center mb-16 md:mb-20 transition-none ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Projects
                    </h2>
                </div>

                {/* Project Cards */}
                <div className="space-y-8">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            project={project}
                            index={idx}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}