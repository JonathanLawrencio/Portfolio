import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certificate", label: "Certificate" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position to trigger blur effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuToggle = () => {
        if (isMobileMenuOpen) {
            setIsClosing(true);
        } else {
            setMobileMenuOpen(true);
            setIsClosing(false);
        }
    };

    const closeMobileMenu = () => {
        setIsClosing(true);
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out will-change-[padding,background-color,backdrop-filter] ${
                isScrolled 
                ? "py-3 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-lg" 
                : "py-6 bg-transparent border-b border-transparent shadow-none"
            }`}
        >
            <nav className="container mx-auto px-6 lg:px-18 flex items-center justify-between">
                {/* Name */}
                <a 
                    href="#" 
                    className={`font-bold tracking-tight text-white transition-all duration-500 ${
                        isScrolled ? "text-lg" : "text-xl"
                    } hover:opacity-80`}
                >
                    Jonathan Lawrencio
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link, index) => (
                        <a 
                            href={link.href} 
                            key={index} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
                        >
                            <span className="relative">
                                {link.label}
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a 
                        href="#contact" 
                        className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-500 inline-block ${
                            isScrolled 
                            ? "bg-white text-black" 
                            : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-black"
                        }`}
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden p-2 text-white focus:outline-none transition-transform active:scale-90" 
                    onClick={handleMenuToggle}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className={`absolute top-full left-0 right-0 glass-strong border-b border-white/5 transition-all duration-300 ${
                        isClosing ? 'animate-fade-out' : 'animate-fade-in'
                    }`}
                    onAnimationEnd={() => {
                        if (isClosing) {
                            setMobileMenuOpen(false);
                            setIsClosing(false);
                        }
                    }}
                >
                    <div className=" md:hidden container mx-auto px-6 py-8 flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index} 
                                onClick={closeMobileMenu} 
                                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a 
                            href="#contact" 
                            onClick={closeMobileMenu}
                            className="text-xl font-bold"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}