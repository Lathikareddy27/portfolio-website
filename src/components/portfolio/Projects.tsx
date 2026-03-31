import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio showcasing skills, projects, and contact information with dark/light theme support.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    code: "https://github.com/lathikareddy/portfolio-website",
    demo: "https://lathikareddy.dev",
  },
  {
    title: "To-Do App",
    description:
      "A task management application with add, edit, delete, and filter functionality. Features local storage persistence and a clean UI.",
    tags: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/lathikareddy/todo-app",
    demo: "https://lathikareddy.github.io/todo-app",
  },
  {
    title: "Calculator App",
    description:
      "A fully functional calculator with standard arithmetic operations, keyboard support, and a responsive design.",
    tags: ["JavaScript", "CSS Grid", "HTML"],
    code: "https://github.com/lathikareddy/calculator-app",
    demo: "https://lathikareddy.github.io/calculator-app",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-4">
      <div
        ref={ref}
        className={cn(
          "max-w-5xl mx-auto transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Projects</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href={p.code} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View Code
                  </a>
                </Button>
                <Button size="sm" className="gap-1.5" asChild>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
