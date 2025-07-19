import { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Code2, Brain, Rocket } from "lucide-react";
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

  const floatingElements = [
    { icon: Code2, delay: "0s", position: "top-20 left-10" },
    { icon: Brain, delay: "1s", position: "top-32 right-20" },
    { icon: Rocket, delay: "2s", position: "bottom-32 left-20" },
    { icon: Sparkles, delay: "0.5s", position: "bottom-20 right-10" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-secondary rounded-full blur-3xl animate-float"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            animationDelay: "1s",
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-gradient-accent rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.08}%`,
            bottom: `${mousePosition.y * 0.08}%`,
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Floating 3D Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} floating-card p-4 rounded-xl opacity-20 hover:opacity-60 transition-all duration-500`}
          style={{ animationDelay: element.delay }}
        >
          <element.icon className="w-6 h-6 text-primary" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Divyanshu</span>{" "}
                <span className="text-foreground">Singh</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Computer Science Engineer | AI Researcher
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm">
                <span className="glass px-3 py-1 rounded-full text-primary font-medium">
                  BITS Pilani
                </span>
                <span className="glass px-3 py-1 rounded-full text-secondary font-medium">
                  CLAN Labs, Purdue
                </span>
                <span className="glass px-3 py-1 rounded-full text-accent font-medium">
                  APPCAIR Research
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm a curious mind navigating the vast universe of computer science. 
              From crafting intelligent algorithms to unraveling the mysteries of machine learning, 
              I'm on a journey to push the boundaries of what's possible in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="interactive-button group"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-primary/30 hover:border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                asChild
              >
                <a href="mailto:f20221129@goa.bits-pilani.ac.in">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Photo Section - Placeholder for animated photo */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main photo container with 3D effects */}
              <div className="floating-card w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden relative group">
                {/* Placeholder for animated photo */}
                <div className="w-full h-full bg-gradient-primary opacity-20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/30 rounded-full flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-primary animate-glow" />
                    </div>
                    <p className="text-primary font-medium">
                      Your Animated Photo Here
                    </p>
                    <p className="text-xs text-muted-foreground px-4">
                      This space is reserved for your animated photo
                    </p>
                  </div>
                </div>
                
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                
                {/* Floating decorative elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float opacity-80" style={{ animationDelay: "1s" }} />
                <div className="absolute top-8 -left-6 w-4 h-4 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: "2s" }} />
              </div>

              {/* Background decorative ring */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl scale-110 animate-rotate-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;