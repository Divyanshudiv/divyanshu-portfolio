import { GraduationCap, MapPin, Heart, Trophy } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor of Computer Science at BITS Pilani",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Current Position",
      description: "Research Intern at CLAN Labs, Purdue University",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Research Focus",
      description: "AI, Machine Learning & Reinforcement Learning",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Football enthusiast & Tech innovator",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing a Bachelor of Computer Science at{" "}
                <span className="text-primary font-semibold">Birla Institute of Technology and Science, Pilani</span>, 
                where I also work as an undergraduate researcher at{" "}
                <span className="text-secondary font-semibold">Anuradha and Prashanth Palakurthi Centre for Artificial Intelligence Research (APPCAIR)</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work primarily focuses on AI and machine learning, particularly in{" "}
                <span className="text-accent font-semibold">reinforcement learning and traffic optimization models</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm working as a Research Intern at{" "}
                <span className="text-primary font-semibold">CLAN Labs, Purdue University</span>{" "}
                under the supervision of Dr. Vaneet Aggarwal. Beyond my work in technology, 
                I'm also an avid football fan, a passion I've followed for years.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="floating-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4 ${item.color}`}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;