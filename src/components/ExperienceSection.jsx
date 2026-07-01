import { Briefcase, Calendar, Award, CheckCircle2 } from "lucide-react";

export const experiences = [
    {
        id: 1,
        role: "Power BI Developer Intern",
        company: "Tea Tang (Pvt) Ltd",
        period: "Jan 2026 - Present",
        type: "Corporate Experience",
        description: "Operating at the intersection of Business Analysis (BA) and Business Intelligence (BI) to turn raw corporate data into actionable executive insights.",
        highlights: [
            "Acted as a Business Analyst (BA) to gather requirements across departments, translating corporate workflows into technical dashboard specifications.",
            "Engineered robust data pipelines within Power BI, utilizing Power Query for ETL processes and writing complex DAX measures to track business performance.",
            "Designed and deployed intuitive, interactive reporting interfaces featuring deep data hierarchies, cascading filters, and drill-through matrices."
        ]
    },
    {
        id: 2,
        role: "Freelance Full-Stack Developer",
        company: "FutureGenZ Academy (Production Contract)",
        period: "2026 - Present",
        type: "Client Deployment",
        description: "Designing, engineering, and launching live web portals to optimize real-world student logistical pipelines.",
        highlights: [
            "Architected and deployed a live, responsive educational routing engine at www.futuregenzacademy.com using Next.js and TypeScript.",
            "Built a dynamic UI schema that alters form variables instantly without causing page triggers or state drops.",
            "Configured secure form data ingestion pipes mapped directly to Formspree endpoints with standard SSL data protection protocols."
        ]
    },
    {
        id: 3,
        role: "Full-Stack & Data Engineer (Academic Track)",
        company: "SLIIT",
        period: "2024 - Present",
        type: "Academic Engineering",
        description: "Delivering production-ready software modules and statistical analytics packages within collaborative team structures.",
        highlights: [
            "Smart Campus Hub: Architected a validated 3-tier REST API using Spring Boot, Hibernate, and JPA alongside a multi-criteria client filtering system in React.",
            "Retail BI Stack: Modeled a corporate Star Schema Data Warehouse in SQL Server and structured analytical hierarchies using SSAS Multidimensional Cubes.",
            "IBM HR Audit: Executed a comprehensive inferential study in R, utilizing Logistic Regression and ANOVA to model workplace performance variances."
        ]
    }
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative border-t border-border/40">
            <div className="container mx-auto max-w-4xl">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Professional <span className="text-primary">Journey</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    A timeline of my engineering milestones, domain specializations, and industry experience.
                </p>

                {/* Timeline Tree */}
                <div className="relative border-l border-primary/20 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 group">

                            {/* Timeline Node Point Icon */}
                            <span className="absolute -left-[17px] top-1.5 bg-background border-2 border-primary text-primary p-1.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-lg shadow-primary/20">
                                <Briefcase size={16} />
                            </span>

                            {/* Card Content */}
                            <div className="bg-card/40 border border-border/60 rounded-2xl p-6 md:p-8 space-y-4 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-bl-full pointer-events-none" />

                                {/* Header Meta Data */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary px-2.5 py-1 rounded-md bg-primary/10">
                                            {exp.type}
                                        </span>
                                        <h3 className="text-2xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-base font-semibold text-muted-foreground/80 mt-0.5">
                                            {exp.company}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium md:self-start bg-secondary/40 px-3 py-1.5 rounded-xl border border-border">
                                        <Calendar size={14} className="text-primary" />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed text-sm italic">
                                    {exp.description}
                                </p>

                                {/* Bulleted Technical Highlights */}
                                <ul className="space-y-2.5 pt-2">
                                    {exp.highlights.map((bullet, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                                            <CheckCircle2 size={16} className="text-primary/70 shrink-0 mt-0.5" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};