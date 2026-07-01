import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
    Github,
    ExternalLink,
    PlayCircle,
    ArrowLeft,
    ArrowRight,
    Code,
    Database,
    Layout,
    ShieldCheck
} from "lucide-react";
import { projects } from "../components/ProjectsSection";
import { StarBackground } from "../components/StarBackground";

export const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    // Find the current project based on ID (String comparison for safety)
    const project = projects.find(p => String(p.projectId) === String(projectId));

    // Calculate the Next Project (Loop back to start if at the end)
    const currentIndex = projects.findIndex(p => String(p.projectId) === String(projectId));
    const nextProject = projects[(currentIndex + 1) % projects.length];

    // Scroll to top whenever the project changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-bold">Project Not Found</h1>
                <button onClick={() => navigate("/")} className="text-primary hover:underline">Return Home</button>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
            <StarBackground />

            <div className="relative z-10 container mx-auto max-w-4xl px-6 pt-32 pb-24">

                {/* Back Navigation */}
                <button
                    onClick={() => navigate("/#projects")}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Portfolio</span>
                </button>

                {/* Hero Header */}
                <header className="space-y-6 mb-12 animate-fade-in">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                            <ShieldCheck size={16} />
                            {project.role || "Featured Project"}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            {project.title}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Main Project Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 animate-fade-in-delay-1">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

                {/* Project Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">

                    {/* Left/Main Column: Description */}
                    <div className="md:col-span-2 space-y-12 animate-fade-in-delay-2">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Layout className="text-primary" /> Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.longDescription || project.description}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Database className="text-primary" /> Technical Implementation
                            </h2>

                            {/* PROJECT 8: SMART CAMPUS WEB DEV */}
                            {project.projectId === 8 && (
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Backend Architecture (Spring Boot)</h3>
                                        <p>
                                            Implemented a robust **3-tier layered architecture** consisting of Controllers, Services, and Repositories.
                                            Data persistence was handled via **Hibernate/JPA**. To ensure enterprise-grade reliability, I built custom global exception handlers and enforced rigorous server-side validation using **@Min and @NotNull constraints**, blocking malicious or malformed payloads from API clients like Postman.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Frontend & User Experience (React & Tailwind)</h3>
                                        <p>
                                            Developed an intuitive, fully accessible catalogue UI utilizing **Lucide icons** and **Tailwind CSS**.
                                            The interface features complex, multi-criteria client-side filtering algorithms (filtering concurrently by capacity, geographical location, and asset type) with fluid real-time state alerts managed gracefully through **React Hot Toast**.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Security & Git Workflow</h3>
                                        <p>
                                            Enforced **Role-Based Access Control (RBAC)** to protect administrative endpoints. The project was built
                                            collaboratively using a strict industry-standard version control system, featuring main branch protection, feature branching, and rigorous peer-reviewed Pull Requests to catch bugs early and eliminate merge conflicts before integration.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* PROJECT 9: ENTERPRISE BUSINESS INTELLIGENCE */}
                            {project.projectId === 9 && (
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Data Modeling & Warehousing (SQL Server)</h3>
                                        <p>
                                            Designed and built a structured **Star Schema Data Warehouse** in Microsoft SQL Server. I split transactional logs into clearly defined Dimension and Fact tables, establishing optimized relational tracking for clean, efficient execution on massive data queries.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Analytical Layers & OLAP Cubes (SSAS)</h3>
                                        <p>
                                            Engineered an **SSAS (SQL Server Analysis Services) Multidimensional Cube** to manage complex corporate hierarchies and business logic metrics. A critical hurdle overcome during this pipeline stage involved resolving environment conflicts—specifically debugging **64-bit client library compatibility exceptions (StandardDeveloper64)** to secure stable data streams between Visual Studio and our host engine.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Visual Reporting Analytics (Power BI)</h3>
                                        <p>
                                            Constructed executive-level analytical interfaces utilizing advanced **Power BI mechanics**. Implemented interactive cascading filter controls and configured deep **drill-through navigation pathways**, enabling corporate decision-makers to effortlessly sweep from high-level global summaries directly down to isolated, granular shop-floor operations.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* PROJECT 10: RIGOROUS STATISTICAL AUDIT (R) */}
                            {project.projectId === 10 && (
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Data Engineering & Imputation</h3>
                                        <p>
                                            Isolated and handled data anomalies within the HR dataset using **R**. Managed data missingness through **Stochastic Imputation (Median/Mode approach)** to preserve sample sizes without distorting the data's variance. Engineered a refined **Binary Performance Feature** to bypass artificial data constraints and drastically improve model sensitivity.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Inferential Analysis & Hypothesis Testing</h3>
                                        <p>
                                            Executed parametric and non-parametric statistical checks—including **Analysis of Variance (ANOVA)** and **Spearman Rank Correlation**—to mathematically isolate interaction dependencies and rigorously test hypothesis validity.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Predictive Logistic Regression & Null Result Analysis</h3>
                                        <p>
                                            Constructed a **Logistic Regression framework** to extract the probability of an employee reaching an 'Outstanding' evaluation tier based on Work-Life Balance levels. The mathematical evaluation surfaced a strong **Null Result (p = 0.985)**. Rather than writing it off, we mapped this to an economic corporate realization: the dataset exhibited a significant **Ceiling Effect** (84%+ Excellent baseline ratings), mathematically proving that the workforce's output remained resilient and self-motivated independent of shifting external work-life balance variances.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* PROJECT 11: FUTUREGENZ ACADEMY LIVE PORTAL */}
                            {project.projectId === 11 && (
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Frontend Engineering (Next.js & TypeScript)</h3>
                                        <p>
                                            Leveraged **Next.js (App Router)** and **TypeScript** to build a lightning-fast, production-ready portal. Engineered a highly adaptive component layout using **Tailwind CSS** that dynamically shifts input parameters based on the student's background without causing page refreshes.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Data Ingestion & Communication (Formspree API)</h3>
                                        <p>
                                            Structured end-to-end user pipeline architectures by mapping frontend schemas directly into a serverless **Formspree backend infrastructure**. Managed payload deliveries securely over modern RESTful protocols while validating form arrays before submission.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Security, DevOps & Live Deployment</h3>
                                        <p>
                                            Deployed and maintained the live system using **Vercel**, managing custom workspace environment keys securely. Enforced strict transport safeguards by ensuring all user input data is transmitted using optimized **SSL/TLS encryption modules**.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* DEFAULT DATA SCIENCE ARCHITECTURE FOR ALL OTHER MANIFESTS */}
                            {project.projectId !== 8 && project.projectId !== 9 && project.projectId !== 10 && project.projectId !== 11 && (
                                <p className="text-muted-foreground leading-relaxed">
                                    For this project, the core challenge was handling data complexity while ensuring
                                    high performance. I utilized <strong>{project.tags.join(", ")}</strong> to build a
                                    modular architecture. This involved designing custom pipelines for data
                                    ingestion, feature engineering, and implementing robust testing to ensure reliability.
                                </p>
                            )}
                        </section>
                    </div>

                    {/* Right Column: Sidebar Action Box */}
                    <aside className="space-y-8 animate-fade-in-delay-3">
                        <div className="p-6 rounded-2xl bg-card border border-border sticky top-32">
                            <h3 className="font-bold mb-6 text-lg">Project Assets</h3>

                            <div className="flex flex-col gap-4">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#24292e] text-white rounded-xl hover:opacity-90 transition-opacity">
                                        <Github size={18} /> Source Code
                                    </a>
                                )}

                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                                        <ExternalLink size={18} /> Live Application
                                    </a>
                                )}

                                {project.videoUrl && (
                                    <a href={project.videoUrl} target="_blank" rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 border border-primary text-primary rounded-xl hover:bg-primary/5 transition-colors">
                                        <PlayCircle size={18} /> Watch Video
                                    </a>
                                )}

                                {!project.githubUrl && !project.demoUrl && !project.videoUrl && (
                                    <p className="text-xs text-muted-foreground text-center italic">
                                        Proprietary research content. Documentation available upon request.
                                    </p>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>

                {/* BOTTOM NAVIGATION: Next Project Button */}
                <div className="mt-24 border-t border-border pt-12 animate-fade-in-delay-4">
                    <p className="text-muted-foreground mb-6 font-medium uppercase tracking-widest text-[10px] text-center">
                        Continue Exploring
                    </p>

                    <div
                        onClick={() => navigate(`/project/${nextProject.projectId}`)}
                        className="group cursor-pointer bg-card/50 border border-border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/50 transition-all hover:bg-card hover:shadow-xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="relative w-20 h-20 md:w-28 md:h-28 overflow-hidden rounded-xl">
                                <img
                                    src={nextProject.image}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                    alt="Next project"
                                />
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                    {nextProject.title}
                                </h4>
                                <p className="text-muted-foreground font-medium">{nextProject.role || "Software Project"}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-primary font-bold text-lg">
                            View Next <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};