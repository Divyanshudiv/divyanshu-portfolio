import { Brain, Network, Code, FileText, ExternalLink, Calendar, Users, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AcademicSidebar from "@/components/AcademicSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Research = () => {
  const isMobile = useIsMobile();
  const publications = [
    {
      title: "The Last Mile: A Novel, HotSpot-Based Distributed Path-Sharing Network for Food Deliveries",
      authors: "Ashman Mehra, Divyanshu Singh, Vaskar Raychoudhury, Archana Mathur, Snehanshu Saha",
      venue: "IEEE Transactions on Intelligent Transportation Systems",
      year: "2024",
      status: "Published",
      link: "https://ieeexplore.ieee.org/abstract/document/10705350",
      impact: "Q1 Journal"
    },
    {
      title: "Altruistic Ride Sharing: A Community-Driven Approach to Short-Distance Mobility Using Multi-Agent Reinforcement Learning",
      authors: "Divyanshu Singh, Ashman Mehra, Snehanshu Saha, Santonu Sarkar",
      venue: "Under review at IEEE Transactions on Intelligent Transportation Systems",
      year: "2025",
      status: "Under Review",
      link: "",
      impact: "Under Review"
    }
  ];

  const ongoingProjects = [
    {
      title: "Driver Behaviour Modeling",
      institution: "BITS Pilani",
      period: "December 2024 -- Present",
      description: "Developing a transformer-based encoder-decoder model integrating kinematic data, vectorized maps, and vision-language outputs for real-time anomaly detection in traffic behavior. Designing a driver unruliness quantification framework, capturing risky maneuvers, violations, and aggressive driving patterns.",
      technologies: ["Generative AI", "Computer Vision", "NLP"],
      type: "Research Project"
    },
    {
      title: "Dynamic Obstacle Avoidance Using Flow Matching",
      institution: "Purdue University",
      period: "May 2025 -- Present",
      description: "Designing a Conditional Flow Matching (CFM) model for trajectory generation in dynamic and obstacle-rich environments. Investigating adaptive replanning strategies using Schrödinger Bridge-based drift detection to handle distributional shifts during execution.",
      technologies: ["Generative Modeling", "Motion Planning"],
      type: "Research Project"
    },
    {
      title: "Altruistic Ride Sharing",
      institution: "BITS Pilani",
      period: "August 2024 -- Present",
      description: "Developed an altruistic ride-sharing framework where drivers can pick up and drop off riders along their route while minimizing detours. Utilizing an Attention-based Multi-Agent Actor-Critic model with novel policy modifications to enhance cooperative decision-making. Exploring conditional diffusion models for offline trajectory planning.",
      technologies: ["Deep Reinforcement Learning", "Generative AI", "Optimization"],
      type: "Research Project"
    },
  ];

  const completedProjects = [
    {
      title: "DeliverAI",
      institution: "BITS Pilani",
      period: "December 2023 -- June 2024",
      description: "Proposed DeliverAI, a reinforcement learning-based path-sharing algorithm to optimize food delivery routes by reducing costs and improving efficiency. Simulated on real-world Chicago delivery data, demonstrating a 15% reduction in fleet size, 16% reduction in distance traveled, and 50% increase in fleet utilization.",
      technologies: ["Reinforcement Learning", "Optimization"],
      type: "Research Project",
      publication: "Published in IEEE Transactions on Intelligent Transportation Systems"
    },
    {
      title: "LLMExam: AI-Driven Question Paper Generation",
      institution: "BITS Pilani",
      period: "April 2025",
      description: "Built a multimodal pipeline using a local LLM (Qwen 2.5) for automated retrieval of textual questions, diagrams, and graphs from PDFs. Implemented LLM-driven topic tagging with dynamic matching against a vector database for accurate question categorization.",
      technologies: ["NLP", "Retrieval-Augmented Generation", "Generative AI", "Multimodal AI"],
      type: "Research Project"
    },
    {
      title: "Zero-Shot Classification with RoBERTa",
      institution: "BITS Pilani",
      period: "November 2024",
      description: "Utilized a pre-trained RoBERTa model for zero-shot classification on the AG News dataset. Optimized label prompts iteratively with generative LLMs, boosting accuracy from 48.5% to 82.13%. Assessed performance using precision, recall, F1-score, and confusion matrices.",
      technologies: ["NLP", "Deep Learning", "Generative AI"],
      type: "Research Project",
      link: "https://github.com/Divyanshudiv/Roberta_Zero_Shot"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "ongoing": return "bg-blue-100 text-blue-900 border-blue-300";
      case "published": return "bg-green-100 text-green-900 border-green-300";
      case "under review": return "bg-yellow-100 text-yellow-900 border-yellow-300";
      case "completed": return "bg-gray-100 text-gray-900 border-gray-300";
      default: return "bg-gray-100 text-gray-900 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen flex">
      <AcademicSidebar />
      <div className={`flex-1 ${isMobile ? "ml-0" : "ml-64"} transition-all duration-300`}>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Research & <span className="text-primary">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Exploring the frontiers of artificial intelligence, machine learning, and computer science 
              through innovative research and cutting-edge projects.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-gray-900">
              Publications & <span className="text-primary">Preprints</span>
            </h2>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {pub.title}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                          pub.status === "Published" 
                            ? "bg-green-100 text-green-800 border-green-600" 
                            : "bg-yellow-100 text-yellow-800 border-yellow-600"
                        } w-fit`}>
                          {pub.status}
                        </span>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold">Authors: </span>
                        {pub.authors}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{pub.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.year}</span>
                        </div>
                      </div>

                      {pub.impact && (
                        <div className="glass p-3 rounded-lg border-primary/20">
                          <span className="text-primary font-semibold text-sm">{pub.impact}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-4">
                      {pub.link && pub.status === "Published" && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-green-600 hover:border-green-700 text-green-700 hover:text-green-800 hover:bg-green-50 transition-all duration-300"
                          asChild
                        >
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            View Paper
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-gray-900">
              Ongoing <span className="text-primary">Projects</span>
            </h2>

            <div className="space-y-8">
              {ongoingProjects.map((project, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-primary/10 text-primary border-primary/20 w-fit">
                          Ongoing
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.institution}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

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

                    <div className="flex flex-col items-center lg:items-end gap-4">
                      <div className="glass p-4 rounded-xl text-center">
                        <div className="text-xs text-muted-foreground mb-1">Type</div>
                        <div className="font-semibold text-primary">{project.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-gray-900">
              Completed <span className="text-primary">Projects</span>
            </h2>

            <div className="space-y-8">
              {completedProjects.map((project, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-secondary/10 text-secondary border-secondary/20 w-fit">
                          Completed
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.institution}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {project.publication && (
                        <div className="glass p-3 rounded-lg border-primary/20">
                          <span className="text-primary font-semibold text-sm">{project.publication}</span>
                        </div>
                      )}

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

                    <div className="flex flex-col items-center lg:items-end gap-4">
                      <div className="glass p-4 rounded-xl text-center">
                        <div className="text-xs text-muted-foreground mb-1">Type</div>
                        <div className="font-semibold text-primary">{project.type}</div>
                      </div>

                      {project.link && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary hover:border-primary/80 text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
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
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Research Interests</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Core Areas</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Generative AI</li>
                      <li>• Deep Learning</li>
                      <li>• Natural Language Processing</li>
                      <li>• Computer Vision</li>
                      <li>• Reinforcement Learning</li>
                      <li>• Optimization</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Applied Domains</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Motion Planning</li>
                      <li>• Traffic Optimization</li>
                      <li>• Computational Biology</li>
                      <li>• Multimodal AI</li>
                      <li>• Graph Neural Networks</li>
                      <li>• Diffusion Models</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Research;