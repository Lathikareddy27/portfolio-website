import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-3xl animate-fade-in">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
          Lathika Reddy
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-primary mb-6">
          Full Stack Developer
        </p>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Crafting clean, performant web experiences with a passion for elegant code and thoughtful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollTo("#projects")} className="gap-2">
            <ArrowDown className="h-4 w-4" /> View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")} className="gap-2">
            <Mail className="h-4 w-4" /> Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
