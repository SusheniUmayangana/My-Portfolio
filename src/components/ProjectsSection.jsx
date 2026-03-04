import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Github, X, PlayCircle, Award, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const projects = [
    {
        projectId: 1,
        title: "Autonomous AI Risk Assessment",
        role: "Team Coordinator & Lead",
        description: "Engineered a multi-agent system using CrewAI to automate AI auditing in healthcare and finance.",
        longDescription: "As the Team Coordinator, I led a 4-member group to develop an agentic system that automates the complex process of AI auditing. The core innovation was a RAG (Retrieval-Augmented Generation) pipeline integrated with ChromaDB, allowing our agents to cross-reference AI model behaviors against real-time GDPR and local regulatory frameworks. This reduced manual audit time by an estimated 70%.",
        image: "/projects/risk-assessment.png",
        tags: ["CrewAI", "RAG", "Gemini", "Streamlit"],
        videoUrl: "https://drive.google.com/file/d/1391t3bKTOL2YsNzeQC_B_knTg1sEeMlX/view",
        githubUrl: "https://github.com/Dilnuka/MultiAgent.git",
    },
    {
        projectId: 2,
        title: "Self-Attention Optimization (HASN)",
        role: "AI Researcher",
        description: "Research on Transformer architectures, proposing the HASN framework to reduce computational complexity from O(n²) to O(n log n).",
        // longDescription: "Proposed the HASN framework to optimize self-attention mechanisms in Transformers. This research focused on reducing complexity from O(n²) to O(n log n) for long-sequence processing.",
        image: "/projects/hasn-research.png",
        tags: ["AI Research", "Machine Learning", "NLP"],
    },
    {
        projectId: 3,
        title: "Bank Churn Intelligence",
        role: "Data & Deployment Lead",
        description: "Built an end-to-end predictive dashboard using XGBoost to identify high-risk customers. Includes a 'What-if' strategy simulator.",
        // longDescription: "Developed the full preprocessing pipeline and trained the XGBoost model. Integrated MongoDB Atlas for secure user authentication and deployed via Streamlit.",
        image: "/projects/bank-churn.png",
        tags: ["XGBoost", "Data Science", "Python"],
        // demoUrl: "https://customerchurn-mxjnme2nlrphzcscndcm4h.streamlit.app/",
        githubUrl: "https://github.com/SusheniUmayangana/Customer_churn",
    },
    {
        projectId: 4,
        title: "AI Symptom Checker",
        role: "Individual Developer",
        description: "Intelligent health assistant using Google Gemini for symptom analysis. Features secure user history tracking via Firebase.",
        image: "/projects/health-ai.png",
        tags: ["Google Gemini", "Firebase", "Streamlit"],
        demoUrl: "https://symptom-checker-agents-6ydzmaxdrayxq5d9czlf6n.streamlit.app/",
        githubUrl: "https://github.com/SusheniUmayangana/symptom-checker-agents.git",
    },
    {
        projectId: 5,
        title: "Penny Pilot: Finance App",
        role: "Android Developer",
        description: "Native Android application for real-time expense management. Uses Room DB for storage and MPAndroidChart for visualization.",
        image: "/projects/penny-pilot.png",
        tags: ["Kotlin", "Android SDK", "Room DB"],
        githubUrl: "https://github.com/SusheniUmayangana/PennyPilot-App",
    },
    {
        projectId: 6,
        title: "Heart Disease Preprocessing",
        description: "Conducted extensive cleaning and feature engineering on medical datasets. Optimized data quality for downstream classification models through rigorous EDA.",
        longDescription: "Showcased data cleaning expertise by handling missing values and outliers in medical data. Created a reusable pipeline for model-ready data exports.",
        image: "/projects/heart-data.png",
        tags: ["data preprocessing", "Python", "Pandas"],
        githubUrl: "https://github.com/SusheniUmayangana/HeartDisease-Preprocessing.git",
    },
    {
        projectId: 7,
        title: "Ecom Express Sales Analytics",
        description: "Developed an end-to-end Power BI solution to visualize $1.25bn in revenue. Focused on regional performance trends and optimizing logistics by analyzing cancellation rates.",
        longDescription: "Transformed raw e-commerce data using Power Query and established a Star Schema data model. Engineered DAX measures for Revenue and AOV, while leveraging Copilot for AI-driven insights. Project follows the Microsoft Data Analytics professional path.",
        image: "/projects/ecom-dashboard.png",
        tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
        githubUrl: "https://github.com/SusheniUmayangana/E-Commerce-Sales-PowerBI-Analysis.git",
    }
];


export const ProjectsSection = () => {
    const navigate = useNavigate();

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A collection of my work in Data Science and AI Engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project) => (
                        <div key={project.projectId}
                            onClick={() => navigate(`/project/${project.projectId}`)}
                            className="group bg-card rounded-xl overflow-hidden border border-border cursor-pointer shadow-sm card-hover hover:border-primary/50 transition-all flex flex-col relative">

                            <div className="h-48 overflow-hidden relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                {/* REMOVE the absolute inset-0 bg-black/20 line here if it looks too dark */}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>

                                <div className="mt-auto flex justify-between items-center">
                                    <div className="flex gap-3 text-muted-foreground">
                                        {project.githubUrl && <Github size={18} />}
                                        {project.demoUrl && <ExternalLink size={18} />}
                                        {project.videoUrl && <PlayCircle size={18} />}
                                    </div>
                                    <span className="text-xs font-semibold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Case Study <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}