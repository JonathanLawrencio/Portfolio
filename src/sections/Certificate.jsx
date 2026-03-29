import { useState, useEffect, useRef } from "react";
import Carousel from "@/components/Carousel";

export default function Certificate() {
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

    const certificates = [
        
        {
            id: 1,
            title: "Hackfest 2024",
            description: "Hackfest 2024 Participation Certificate",
            image: "/img/certificate/hackfest.jpg",
        },
        {
            id: 2,
            title: "Postman API Fundamentals",
            description: "Postman API Fundamentals Certificate",
            image: "/img/certificate/api-postman.png",
        },
        {
            id: 3,
            title: "Freshmen Leader",
            description: "Freshmen Leader Certificate",
            image: "/img/certificate/freshmen-leader.jpg",
        },
    ];

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getCarouselWidth = () => {
        if (windowWidth < 640) return 320;
        if (windowWidth < 768) return 400;
        return 550;
    };

    return (
        <section
            id="certificate"
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-18 relative z-10">

                {/* Section Header */}
                <div className={`text-center mb-16 md:mb-20 transition-none ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Certificates
                    </h2>
                </div>

                {/* Carousel */}
                <div className={`flex justify-center transition-none ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
                    <Carousel
                        items={certificates}
                        baseWidth={getCarouselWidth()}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                    />
                </div>
            </div>
        </section>
    );
}