import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.05}%`,
            top: `${mousePosition.y * 0.05}%`,
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Divyanshu Singh
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                AI Researcher & Computer Science Engineer
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-4 py-2 rounded-full bg-card text-primary font-medium border border-border">
                  BITS Pilani
                </span>
                <span className="px-4 py-2 rounded-full bg-card text-primary font-medium border border-border">
                  CLAN Labs, Purdue
                </span>
                <span className="px-4 py-2 rounded-full bg-card text-primary font-medium border border-border">
                  APPCAIR Research
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Specializing in <span className="text-primary font-medium">Deep Learning</span>, 
              <span className="text-primary font-medium"> Reinforcement Learning</span>, and 
              <span className="text-primary font-medium"> Generative AI</span>. 
              Currently exploring the frontiers of artificial intelligence through research and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-muted transition-all duration-300"
                asChild
              >
                <a href="mailto:f20221129@goa.bits-pilani.ac.in">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;