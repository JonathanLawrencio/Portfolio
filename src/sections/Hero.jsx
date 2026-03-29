import Button from "@/components/Button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

const WhatsappIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);
import LightRays from "@/components/LightRays"; 

import LogoLoop from "@/components/LogoLoop";


export default function Hero() {

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
        <section className="relative flex flex-col overflow-hidden">
            
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
                            <a href="/Jonathan_Lawrencio_CV.pdf" download className="group inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-medium rounded-full border border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10">
                                Download CV
                                <Download className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            {[
                                { icon: Github, href: "https://github.com/JonathanLawrencio" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/jonathan-lawrencio/" },
                                { icon: WhatsappIcon, href: "https://wa.me/62895617044005" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
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
                className="relative z-10 w-full py-10 bg-background/20 backdrop-blur-sm animate-fade-up animation-delay-700"
            >
                <div className="container mx-auto px-6 mb-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold text-center lg:text-center">
                        Tech Stack & Tools
                    </p>
                </div>
                
                {/* Centered Loop with Fade Mask */}
                <div className="px-18 container mx-auto px-6 w-full h-16 relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
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