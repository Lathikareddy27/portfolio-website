import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "lathika@example.com", href: "mailto:lathika@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/lathikareddy", href: "https://linkedin.com/in/lathikareddy" },
  { icon: Github, label: "GitHub", value: "github.com/lathikareddy", href: "https://github.com/lathikareddy" },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-4 bg-muted/50">
      <div
        ref={ref}
        className={cn(
          "max-w-3xl mx-auto transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Get In Touch</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-center text-muted-foreground mb-10">
          Feel free to reach out — I'd love to connect!
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <c.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-foreground">{c.label}</span>
              <span className="text-xs text-muted-foreground">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
