import { Brain, Network, Car, Zap, ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Developing intelligent algorithms and exploring the frontiers of AI technology.",
      color: "text-primary"
    },
    {
      icon: Network,
      title: "Reinforcement Learning",
      description: "Advanced learning systems that adapt and improve through interaction with environments.",
      color: "text-secondary"
    },
    {
      icon: Car,
      title: "Traffic Optimization",
      description: "Smart transportation systems and optimization models for urban mobility.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Diffusion Models",
      description: "Uncertainty-based adaptive planning with cutting-edge diffusion model techniques.",
      color: "text-primary"
    }
  ];

  const projects = [
    {
      title: "Dynamic Obstacle Avoidance with Diffusion Models",
      institution: "CLAN Labs, Purdue University",
      supervisor: "Dr. Vaneet Aggarwal",
      description: "Developing uncertainty-based adaptive planning techniques for dynamic obstacle avoidance using state-of-the-art diffusion models.",
      status: "Ongoing",
      year: "2025",
      technologies: ["Python", "PyTorch", "Diffusion Models", "Reinforcement Learning"],
      type: "Research Internship"
    },
    {
      title: "The Last Mile: HotSpot-Based Distributed Path-Sharing Network",
      institution: "IEEE Transactions on Intelligent Transportation Systems",
      description: "A novel approach to food delivery optimization using distributed path-sharing networks with hotspot-based algorithms.",
      status: "Published",
      year: "2024",
      technologies: ["Network Optimization", "Graph Theory", "Distributed Systems"],
      type: "Publication",
      impact: "Q1 Journal, Impact Factor: 9.95"
    },
    {
      title: "Inverse Text Normalization for Indian Languages",
      institution: "Digital India Bhashini",
      description: "Contributing to the National Language Translation Mission through advanced text normalization using WFSTs and Transformer models.",
      status: "Completed",
      year: "2024",
      technologies: ["NLP", "Transformers", "WFST", "Python"],
      type: "Research Internship"
    },
    {
      title: "AI Research at APPCAIR",
      institution: "BITS Pilani",
      supervisor: "APPCAIR Research Center",
      description: "Undergraduate research focusing on artificial intelligence applications and machine learning model development.",
      status: "Ongoing",
      year: "2023-Present",
      technologies: ["Machine Learning", "Deep Learning", "Python", "TensorFlow"],
      type: "Undergraduate Research"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "ongoing": return "bg-primary/10 text-primary border-primary/20";
      case "published": return "bg-accent/10 text-accent border-accent/20";
      case "completed": return "bg-secondary/10 text-secondary border-secondary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Research & <span className="gradient-text">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Exploring the frontiers of artificial intelligence, machine learning, and computer science 
              through innovative research and cutting-edge projects.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
              Research <span className="gradient-text">Areas</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchAreas.map((area, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 rounded-xl text-center group animate-slide-up hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 ${area.color}`}>
                    <area.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Project Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)} w-fit`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.institution}</span>
                        </div>
                        {project.supervisor && (
                          <div className="text-primary font-medium">
                            Supervisor: {project.supervisor}
                          </div>
                        )}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {project.impact && (
                        <div className="glass p-3 rounded-lg border-accent/20">
                          <span className="text-accent font-semibold text-sm">Impact: </span>
                          <span className="text-muted-foreground text-sm">{project.impact}</span>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-muted/30 text-foreground text-xs rounded-full border border-muted/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Type Badge */}
                    <div className="flex flex-col items-center lg:items-end gap-4">
                      <div className="glass p-4 rounded-xl text-center">
                        <div className="text-xs text-muted-foreground mb-1">Type</div>
                        <div className="font-semibold text-primary">{project.type}</div>
                      </div>

                      {project.status === "Published" && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="glass border-accent/30 hover:border-accent text-accent hover:text-accent-foreground hover:bg-accent transition-all duration-300"
                        >
                          View Paper
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Interests */}
            <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: "1s" }}>
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Research Interests</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Core Areas</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Machine Learning & Deep Learning</li>
                      <li>• Reinforcement Learning</li>
                      <li>• Computer Vision</li>
                      <li>• Natural Language Processing</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-secondary">Applied Research</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Distributed Systems</li>
                      <li>• Database Systems</li>
                      <li>• Cloud Computing</li>
                      <li>• Transportation Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;