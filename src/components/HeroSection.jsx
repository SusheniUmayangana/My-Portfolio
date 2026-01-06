import { ArrowDown } from "lucide-react";
import profileImg from "../assets/profile1.png";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Background Glows for a Cloud/Data vibe */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container max-w-7xl mx-auto z-10 flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Text Content (Larger Width) */}
                <div className="w-full lg:w-[65%] text-center lg:text-left space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            <span className="opacity-0 animate-fade-in block sm:inline"> Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1 block sm:inline ml-0 sm:ml-4"> Susheni</span>
                            <span className="text-gradient block lg:inline opacity-0 animate-fade-in-delay-2 ml-0 lg:ml-2"> Kalubowila</span>
                        </h1>

                        {/* Wider paragraph area for better readability */}
                        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-delay-3 max-w-3xl">
                            A <span className="text-foreground font-semibold">Data Scientist</span> and <span className="text-foreground font-semibold">Cloud Solutions specialist</span> focused on building intelligent, full-stack AI applications.
                            Whether I’m training predictive models with Python or architecting Cloud-native systems on AWS and Azure,
                            my goal is to drive growth through data-driven precision and cutting-edge automation.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>

                {/* Right Side: Professional Photo (Smaller, stylized) */}
                <div className="w-full lg:w-[35%] flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">
                    <div className="relative">
                        {/* Geometric Data-Science Accents */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/40"></div>
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/40"></div>

                        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 group">
                            <img
                                src={profileImg}
                                alt="Susheni Kalubowila"
                                className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay for a "Tech" look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-40"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};