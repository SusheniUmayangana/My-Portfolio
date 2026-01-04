import { Code, User } from "lucide-react";
import { Briefcase } from "lucide-react";


export const AboutSection = () => {
    return (<section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Data Science Undergraduate & AI Solutions Specialist
                    </h3>
                    <p className="text-muted-foreground">
                        I am a results-driven Data Science specialist with a passion for building intelligent systems that bridge the gap between complex data and actionable insights.
                        Currently reading for my BSc (Hons) in IT specializing in Data Science at SLIIT, I focus on creating high-impact AI solutions and scalable cloud architectures.
                    </p>
                    <p className="text-muted-foreground">
                        My experience ranges from developing autonomous multi-agent systems using CrewAI to researching self-attention optimization in Transformer architectures.
                        I am committed to leveraging predictive analytics and cloud-native tools like AWS and Azure to solve high-stakes business challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="/Susheni_Kalubowila_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="tetx-left">
                                <h4 className="font-semibold text-lg"> Technical Expertise</h4>
                                <p className="text-muted-foreground">
                                    Advanced proficiency in Python and SQL, with hands-on experience in Machine Learning frameworks like XGBoost and Scikit-learn.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="tetx-left">
                                <h4 className="font-semibold text-lg"> Cloud Solutions</h4>
                                <p className="text-muted-foreground">
                                    Specialized in architecting resilient systems on AWS and Azure, focusing on networking, automated scaling, and secure virtual environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="tetx-left">
                                <h4 className="font-semibold text-lg"> AI Implementation</h4>
                                <p className="text-muted-foreground">
                                    Proven track record of deploying RAG-integrated systems and intelligent health assistants using Streamlit, Google Gemini, and Firebase.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>);
};