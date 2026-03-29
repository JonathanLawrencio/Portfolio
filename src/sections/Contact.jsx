import { useState, useEffect, useRef } from "react";
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your name";
        if (!formData.email.trim()) newErrors.email = "Please enter your email";
        if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
        if (!formData.message.trim()) newErrors.message = "Please enter your message";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setStatus("sending");

        try {
            const response = await fetch("https://formspree.io/f/xeepenez", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _replyto: formData.email,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-18 relative z-10">

                {/* Section Header */}
                <div className={`text-center mb-16 md:mb-20 transition-none ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                        Have a project in mind or just want to say hello? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Form */}
                <div className={`max-w-2xl mx-auto transition-none ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        {/* Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status === "sending"}
                                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all duration-300 disabled:opacity-50 ${errors.name ? 'border-red-500/70' : 'border-white/10'}`}
                                    />
                                </div>
                                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                            </div>
                            <div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === "sending"}
                                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all duration-300 disabled:opacity-50 ${errors.email ? 'border-red-500/70' : 'border-white/10'}`}
                                    />
                                </div>
                                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={status === "sending"}
                                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all duration-300 disabled:opacity-50 ${errors.subject ? 'border-red-500/70' : 'border-white/10'}`}
                                />
                            </div>
                            {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                disabled={status === "sending"}
                                className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all duration-300 resize-none disabled:opacity-50 ${errors.message ? 'border-red-500/70' : 'border-white/10'}`}
                            />
                            {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                        </div>

                        {/* Status Messages */}
                        {status === "success" && (
                            <div className="flex items-center gap-2 text-green-400 text-sm justify-center">
                                <CheckCircle className="w-4 h-4" />
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-400 text-sm justify-center">
                                <AlertCircle className="w-4 h-4" />
                                Something went wrong. Please try again.
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="group inline-flex items-center gap-2 px-10 py-3.5 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}