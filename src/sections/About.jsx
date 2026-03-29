import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

// --- Animated Counter ---
function AnimatedCounter({ target, suffix = "", duration = 2000, isVisible }) {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isVisible || hasAnimated.current) return;

        hasAnimated.current = true;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    return (
        <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
            {count}{suffix}
        </span>
    );
}


// --- Main About Component ---
export default function About() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: 1, suffix: "", label: "Year Experience" },
        { value: 10, suffix: "+", label: "Projects Completed" },
    ];


    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-18 relative z-10">

                {/* Section Header */}
                <div className={`text-center mb-16 md:mb-20 transition-none ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        About Me
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column — Image */}
                    <div className={`flex justify-center transition-none ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
                        <div className="relative group">

                            <div className="absolute -inset-4 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />

                            <div className="relative rounded-2xl overflow-hidden glass p-1.5">
                                <img
                                    src="/img/almet.jpeg"
                                    alt="About Me"
                                    className="w-full max-w-md aspect-[4/5] object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <div className={`space-y-5 transition-none ${isVisible ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                Passionate about crafting
                                <br />
                                <span className="text-muted-foreground">digital experiences</span>
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-justify">
                                I'm a web developer with a deep passion for building modern, 
                                high-performance web applications. With experience across the full stack, 
                                I specialize in turning complex problems into elegant, user-friendly solutions 
                                that make a real impact.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-justify">
                                I'm always eager to learn and stay up-to-date with the latest trends 
                                in web development, from emerging frameworks to cutting-edge design patterns, 
                                ensuring every project I deliver is built with the best tools available.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className={`grid grid-cols-2 gap-6 pt-4 transition-none ${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center lg:text-left space-y-1">
                                    <AnimatedCounter
                                        target={stat.value}
                                        suffix={stat.suffix}
                                        isVisible={isVisible}
                                    />
                                    <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}