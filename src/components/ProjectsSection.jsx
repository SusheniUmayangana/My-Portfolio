import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Autonomous AI Risk Assessment",
        description: "Engineered a multi-agent system using CrewAI to automate AI auditing in healthcare and finance. Integrated RAG with ChromaDB for real-time GDPR compliance.",
        image: "/projects/risk-assessment.png",
        tags: ["CrewAI", "RAG", "Gemini", "Streamlit"],
        demoUrl: "https://drive.google.com/file/d/1391t3bKTOL2YsNzeQC_B_knTg1sEeMlX/view",
        githubUrl: "https://github.com/Dilnuka/MultiAgent.git",
    },
    {
        id: 2,
        title: "Self-Attention Optimization (HASN)",
        description: "Research on Transformer architectures, proposing the HASN framework to reduce computational complexity from O(n²) to O(n log n).",
        image: "/projects/hasn-research.png",
        tags: ["AI Research", "Machine Learning", "NLP"],
    },
    {
        id: 3,
        title: "Bank Churn Intelligence",
        description: "Built an end-to-end predictive dashboard using XGBoost to identify high-risk customers. Includes a 'What-if' strategy simulator.",
        image: "/projects/bank-churn.png",
        tags: ["XGBoost", "Data Science", "Python"],
        demoUrl: "https://customerchurn-mxjnme2nlrphzcscndcm4h.streamlit.app/",
        githubUrl: "https://github.com/SusheniUmayangana/Customer_churn",
    },
    {
        id: 4,
        title: "AI Symptom Checker",
        description: "Intelligent health assistant using Google Gemini for symptom analysis. Features secure user history tracking via Firebase.",
        image: "/projects/health-ai.png",
        tags: ["Google Gemini", "Firebase", "Streamlit"],
        demoUrl: "https://symptom-checker-agents-6ydzmaxdrayxq5d9czlf6n.streamlit.app/",
        githubUrl: "https://github.com/SusheniUmayangana/symptom-checker-agents.git",
    },
    {
        id: 5,
        title: "Penny Pilot: Finance App",
        description: "Native Android application for real-time expense management. Uses Room DB for storage and MPAndroidChart for visualization.",
        image: "/projects/penny-pilot.png",
        tags: ["Kotlin", "Android SDK", "Room DB"],
        demoUrl: "#",
        githubUrl: "https://github.com/SusheniUmayangana/PennyPilot-App",
    },
    {
        id: 6,
        title: "Heart Disease Preprocessing",
        description: "Conducted extensive cleaning and feature engineering on medical datasets. Optimized data quality for downstream classification models through rigorous EDA.",
        image: "/projects/heart-data.png",
        tags: ["data preprocessing", "Python", "Pandas"],
        demoUrl: "#",
        githubUrl: "https://github.com/SusheniUmayangana/HeartDisease-Preprocessing.git",
    }
];


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A collection of my work in Data Science and AI Engineering, ranging from
                autonomous agent architectures and predictive modeling to deep learning
                research and cloud-native application deployment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-x5 card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>

                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/SusheniUmayangana">
                    Check My GitHub <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}