import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Programming
    { name: 'Python', level: 95, category: "Programming" },
    { name: 'SQL', level: 90, category: "Programming" },
    { name: 'R', level: 75, category: "Programming" },
    { name: 'Java', level: 70, category: "Programming" },
    { name: 'Kotlin', level: 70, category: "Programming" },

    // Data Science & AI
    { name: 'Machine Learning (XGBoost)', level: 95, category: "Data Science" },
    { name: 'RAG & ChromaDB', level: 90, category: "Data Science" },
    { name: 'LLMs (Gemini/LiteLLM)', level: 85, category: "Data Science" },
    { name: 'Statistical Modeling', level: 80, category: "Data Science" },
    { name: 'Data Preprocessing', level: 90, category: "Data Science" },

    // Cloud & Platforms
    { name: 'AWS (Networking/S3)', level: 85, category: "Cloud" },
    { name: 'Azure (VM/Security)', level: 80, category: "Cloud" },
    { name: 'Firebase', level: 70, category: "Cloud" },
    { name: 'Google Colab', level: 90, category: "Cloud" },

    // Tools & Frameworks
    { name: 'Streamlit', level: 90, category: "Tools" },
    { name: 'CrewAI', level: 80, category: "Tools" },
    { name: 'Git/GitHub', level: 90, category: "Tools" },
    { name: 'Android SDK', level: 70, category: "Tools" }
];

const categories = ["all", "Programming", "Data Science", "Cloud", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}> {category}</button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-x5 card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }}></div>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground"> {skill.level}% </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>);

}