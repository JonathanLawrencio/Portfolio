import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

// --- Project Card ---
function ProjectCard({ project, index, isVisible }) {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`group relative grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden glass glow-border-hover transition-all duration-500 hover:scale-[1.01] md:h-[380px] ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${200 + index * 150}ms` }}
        >
            {/* Image Side */}
            <div className={`relative overflow-hidden h-56 md:h-full ${isEven ? '' : 'md:order-2'}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-background/60 hidden md:block pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:hidden pointer-events-none" />
            </div>

            {/* Content Side */}
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
    const [showAll, setShowAll] = useState(false);

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
            description: "A platform that is built to replace the inefficient conventional animal adoption process.",
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
            githubUrl: "https://github.com/JonathanLawrencio/Portfolio",
            showLiveDemo: true,
            showSource: true,
        },
        {
            title: "Edufun",
            description: "Edufun is a website that provides free knowledge for students related to courses in the IT field.",
            image: "/img/projectProfile/edufun.png",
            tags: ["Laravel", "Bootstrap"],
            liveUrl: "https://www.canva.com/design/DAGY6NsZdtk/a6TE65Bw_v5PWLZhR7aXLQ/view?utm_content=DAGY6NsZdtk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcef35f8d20",
            githubUrl: "https://github.com/JonathanLawrencio/EduFun",
            showLiveDemo: true,
            showSource: true,
        },
        {
            title: "ERamen",
            description: "ERamen is a website that is useful for displaying the menu of a ramen restaurant.",
            image: "/img/projectProfile/eramen.png",
            tags: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://jonathanlawrencio.github.io/ERamen/",
            githubUrl: "https://github.com/JonathanLawrencio/ERamen",
            showLiveDemo: true,
            showSource: true,
        },
        {
            title: "Allergy Diary",
            description: "Allergy DIary is a mobile app that helps people who have food allergies. This application has several features such as scanning food ingredients, buying medicine, consulting with doctors, etc.",
            image: "/img/projectProfile/allergy-diary.png",
            tags: ["Dart", "Flutter"],
            liveUrl: "https://binusianorg-my.sharepoint.com/personal/dwi_khaerakinanti_binus_ac_id/_layouts/15/stream.aspx?id=%2Fpersonal%2Fdwi_khaerakinanti_binus_ac_id%2FDocuments%2FVideo+Demo+Allergy+Diary.mov&ga=1&referrer=StreamWebApp.Web&referrerScenario=AddressBarCopied.view.03926dc3-936f-43ff-a646-b33ab40019c3&startedResponseCatch=true",
            githubUrl: "https://github.com/JonathanLawrencio/Allergy-Diary",
            showLiveDemo: true,
            showSource: true,
        },
        {
            title: "ResQ",
            description: "ResQ is a mobile application that is useful for helping users in emergencies such as earthquakes, accidents, fires, etc. ",
            image: "/img/projectProfile/resq.png",
            tags: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://www.youtube.com/watch?v=9iF7tE6tk98",
            githubUrl: "https://github.com/JonathanLawrencio/ResQ",
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
                    {(showAll ? projects : projects.slice(0, 3)).map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            project={project}
                            index={idx}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                {projects.length > 3 && (
                    <div className={`flex justify-center mt-12 transition-none ${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                            {showAll 
                                ? <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                : <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                            }
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}