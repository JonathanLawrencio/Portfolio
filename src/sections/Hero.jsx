import Button from "@/components/Button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import LightRays from "@/components/LightRays"; 
import ShinyText from "@/components/ShinyText";
import TextType from "@/components/TextType";
import LogoLoop from "@/components/LogoLoop";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
    const techStackRef = useRef(null); 
    const [isTechStackVisible, setTechStackVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTechStackVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (techStackRef.current) {
            observer.observe(techStackRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const techStack = [
        { src: "/img/stackLogo/vite.png", alt: "Vite" },
        { src: "/img/stackLogo/react.png", alt: "React" },
        { src: "/img/stackLogo/tailwind.png", alt: "Tailwind" },
        { src: "/img/stackLogo/nextjs.png", alt: "Nextjs" },
        { src: "/img/stackLogo/nodejs.png", alt: "Nodejs" },
        { src: "/img/stackLogo/html.png", alt: "Html" },
        { src: "/img/stackLogo/css.png", alt: "Css" },
        { src: "/img/stackLogo/js.png", alt: "JS" },
        { src: "/img/stackLogo/php.png", alt: "Php" },
        { src: "/img/stackLogo/laravel.png", alt: "Laravel" },
        { src: "/img/stackLogo/figma.png", alt: "Figma" },
        { src: "/img/stackLogo/postman.png", alt: "Postman" },
    ];
    return(
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
            
            {/* --- STAGE LIGHTING (Background) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <LightRays />
                
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column */}
                    <div className="space-y-8 lg:pl-12">
                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 whitespace-nowrap">
                                Turning Meaningful
                                <br/>
                                Ideas into Seamless
                                <br/>
                                Digital Experiences.
                            </h1>
                            <p className="text-lg text-justify text-muted-foreground max-w-lg animate-fade-in animation-delay-600">
                                I'm a web developer focused on building scalable, high-performance 
                                platforms that deliver seamless and engaging user experiences.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in animation-delay-600">
                            <a href="#contact" className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                Contact Me
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            {/* Download CV */}
                            <a href="/path-to-your-cv.pdf" download className="group inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-medium rounded-full border border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10">
                                Download CV
                                <Download className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            {[
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative flex justify-center items-center animate-fade-in animation-delay-300">
                        <div className="relative group lg:-mt-30">
                            
                            {/* The Polaroid Card */}
                            <div className="polaroid-frame relative z-20 w-64 md:w-80 overflow-hidden">
                                <div className="polaroid-inner-border overflow-hidden">
                                    <img 
                                        src="/img/almet.jpeg" 
                                        alt="Profile" 
                                        className="w-full aspect-square object-cover transition-all duration-500" 
                                    />
                                </div>
                                
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <span className="font-script text-black/80 text-xl md:text-2xl">
                                    Web Developer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div
                ref={techStackRef}
                className={`relative z-10 w-full py-10 bg-background/20 backdrop-blur-sm transition-none ${
                    isTechStackVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
            >
                <div className="container mx-auto px-6 mb-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold text-center lg:text-center">
                        Tech Stack & Tools
                    </p>
                </div>
                
                {/* Full Width Loop with Fade Mask */}
                <div className="px-18 w-full h-16 relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    <LogoLoop 
                        logos={techStack} 
                        direction="left" 
                        speed={30} 
                        pauseOnHover={true}
                    />
                </div>
            </div>
        </section>
    );
}