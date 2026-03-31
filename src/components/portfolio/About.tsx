import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-4">
      <div
        ref={ref}
        className={cn(
          "max-w-3xl mx-auto transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">About Me</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            I'm a Computer Science student with a deep curiosity for how the web works. I love
            building intuitive, user-friendly applications and turning complex problems into
            simple, elegant solutions. My focus areas include front-end development with React,
            responsive design, and version control with Git. I'm constantly learning, experimenting,
            and pushing myself to grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
