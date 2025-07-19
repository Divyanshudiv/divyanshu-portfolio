import { Calendar, ExternalLink, Star, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const newsItems = [
    {
      type: "internship",
      icon: Briefcase,
      title: "Research Internship at CLAN Labs, Purdue University",
      description: "I'll be interning at CLAN Labs, Purdue University for summer of 2025 where I'll be developing dynamic obstacle avoidance techniques using uncertainty-based adaptive planning with diffusion models under the supervision of Dr. Vaneet Aggarwal.",
      date: "Summer 2025",
      status: "upcoming",
      color: "text-primary"
    },
    {
      type: "publication",
      icon: Award,
      title: "IEEE Transactions on Intelligent Transportation Systems",
      description: "Our paper, 'The Last Mile: A Novel, HotSpot-Based Distributed Path-Sharing Network for Food Deliveries', has been accepted for publication in the prestigious IEEE Transactions on Intelligent Transportation Systems (Q1, I.F: 9.95).",
      date: "2024",
      status: "published",
      color: "text-accent"
    },
    {
      type: "internship",
      icon: Star,
      title: "Research Internship at Digital India Bhashini",
      description: "Completed my Research Internship at Digital India Bhashini during summer 2024, where I contributed to the National Language Translation Mission through work on Inverse Text Normalization using WFSTs and Transformer-based models.",
      date: "Summer 2024",
      status: "completed",
      color: "text-secondary"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "bg-primary/10 text-primary border-primary/20";
      case "published": return "bg-accent/10 text-accent border-accent/20";
      case "completed": return "bg-secondary/10 text-secondary border-secondary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              News & <span className="gradient-text">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with my latest research achievements, publications, and professional milestones.
            </p>
          </div>

          {/* News Timeline */}
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Date */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 flex-shrink-0">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary ${item.color}`}>
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)} w-fit`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.status === "published" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="glass border-accent/30 hover:border-accent text-accent hover:text-accent-foreground hover:bg-accent transition-all duration-300"
                      >
                        View Publication
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Interested in collaboration or want to know more about my research?
              </p>
              <Button 
                size="lg" 
                className="interactive-button"
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
    </section>
  );
};

export default NewsSection;