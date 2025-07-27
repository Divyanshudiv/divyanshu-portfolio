import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const newsItems = [
    {
      type: "research",
      title: "Undergraduate Researcher at Pragya Lab, BITS Goa",
      description: "Working under the supervision of Professor Amitava Das on Neural Genomics and Spatial Reasoning in 3D Worlds, exploring cutting-edge applications of deep learning in computational biology and spatial intelligence.",
      date: "March 2025",
      status: "current"
    },
    {
      type: "internship",
      title: "Research Internship at CLAN Labs, Purdue University",
      description: "Currently developing dynamic obstacle avoidance techniques using energy-based adaptive planning with flow matching models under the supervision of Dr. Vaneet Aggarwal. Exploring multi-modal applications of diffusion models in medical domains.",
      date: "May 2025 -- Present",
      status: "current"
    },
    {
      type: "publication",
      title: "IEEE Transactions on Intelligent Transportation Systems",
      description: "Our paper, 'The Last Mile: A Novel, HotSpot-Based Distributed Path-Sharing Network for Food Deliveries', has been accepted for publication in the prestigious IEEE Transactions on Intelligent Transportation Systems (Q1, I.F: 9.95).",
      date: "2024",
      status: "published"
    },
    {
      type: "internship",
      title: "Research Internship at Digital India Bhashini",
      description: "Completed my Research Internship at Digital India Bhashini during summer 2024, where I contributed to the National Language Translation Mission through work on Inverse Text Normalization using WFSTs and Transformer-based models.",
      date: "Summer 2024",
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "bg-blue-100 text-blue-800 border-blue-200";
      case "published": return "bg-green-100 text-green-800 border-green-200";
      case "completed": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-600 border-gray-200";
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
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500 ml-12"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="absolute -left-8 top-8 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                  
                  <div className="space-y-4">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)} w-fit`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>

                      {item.status === "published" && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-green-200 hover:border-green-300 text-green-700 hover:text-green-800 hover:bg-green-50 transition-all duration-300"
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