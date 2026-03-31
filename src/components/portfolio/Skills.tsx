import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Code2, Palette, FileCode2, Atom, GitBranch, Github } from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2, color: "text-orange-500" },
  { name: "CSS", icon: Palette, color: "text-blue-500" },
  { name: "JavaScript", icon: FileCode2, color: "text-yellow-500" },
  { name: "React", icon: Atom, color: "text-cyan-500" },
  { name: "Git", icon: GitBranch, color: "text-red-500" },
  { name: "GitHub", icon: Github, color: "text-foreground" },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-4 bg-muted/50">
      <div
        ref={ref}
        className={cn(
          "max-w-4xl mx-auto transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Skills</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group bg-card border border-border rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <s.icon className={cn("h-10 w-10 transition-transform duration-300 group-hover:scale-110", s.color)} />
              <span className="font-semibold text-foreground">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
