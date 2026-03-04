import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
    Github,
    ExternalLink,
    PlayCircle,
    ArrowLeft,
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

    // Find the project based on ID
    // Ensure we compare the projectId from data to the ID from the URL
    const project = projects.find(p => String(p.projectId) === String(projectId));

    // Scroll to top whenever the component loads
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
                <header className="space-y-6 mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                            <ShieldCheck size={16} />
                            {project.role}
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

                {/* Project Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

                {/* Project Content - The "Post" Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Main Story (Left/Center) */}
                    <div className="md:col-span-2 space-y-12">
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
                            <p className="text-muted-foreground leading-relaxed">
                                For this project, the core challenge was handling data complexity while ensuring
                                performance. I utilized <strong>{project.tags.join(", ")}</strong> to build a
                                modular architecture. This involved designing custom pipelines for data
                                ingestion and implementing automated testing to ensure reliability.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar Actions (Right) */}
                    <aside className="space-y-8">
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
                                        Proprietary research content. Detailed documentation available upon request.
                                    </p>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};