import { MapPin, Calendar, Award, Code, BookOpen, Trophy, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "CLAN Labs, Purdue University",
      location: "West Lafayette, IN, USA",
      period: "Summer 2025",
      status: "Upcoming",
      description: "Developing dynamic obstacle avoidance techniques using uncertainty-based adaptive planning with diffusion models under the supervision of Dr. Vaneet Aggarwal.",
      skills: ["Diffusion Models", "Reinforcement Learning", "Python", "PyTorch", "Adaptive Planning"],
      icon: Rocket,
      color: "text-primary"
    },
    {
      title: "Research Intern",
      company: "Digital India Bhashini",
      location: "Remote, India",
      period: "Summer 2024",
      status: "Completed",
      description: "Contributed to the National Language Translation Mission through work on Inverse Text Normalization using WFSTs and Transformer-based models.",
      skills: ["NLP", "Transformers", "WFST", "Python", "Text Processing"],
      icon: Code,
      color: "text-secondary"
    },
    {
      title: "Undergraduate Researcher",
      company: "APPCAIR, BITS Pilani",
      location: "Goa, India",
      period: "2023 - Present",
      status: "Ongoing",
      description: "Working on AI and machine learning research projects, particularly focusing on reinforcement learning and traffic optimization models.",
      skills: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Research"],
      icon: BookOpen,
      color: "text-accent"
    }
  ];

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "R", "MATLAB"],
      icon: Code
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Transformers", "Diffusion Models"],
      icon: Trophy
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "Jupyter", "VS Code"],
      icon: Award
    },
    {
      category: "Research Areas",
      skills: ["Reinforcement Learning", "Computer Vision", "NLP", "Distributed Systems"],
      icon: BookOpen
    }
  ];

  const courses = [
    {
      title: "Machine Learning Specialization",
      provider: "Stanford University (Coursera)",
      status: "Completed",
      description: "Comprehensive course covering supervised and unsupervised learning, deep learning, and practical applications."
    },
    {
      title: "Deep Learning Specialization",
      provider: "DeepLearning.AI (Coursera)",
      status: "Completed",
      description: "In-depth study of neural networks, CNNs, RNNs, and advanced deep learning techniques."
    },
    {
      title: "Reinforcement Learning",
      provider: "University of Alberta (Coursera)",
      status: "Completed",
      description: "Theoretical foundations and practical implementations of reinforcement learning algorithms."
    },
    {
      title: "Natural Language Processing",
      provider: "Stanford CS224N",
      status: "Audited",
      description: "Advanced NLP techniques including attention mechanisms, transformers, and language models."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "upcoming": return "bg-primary/10 text-primary border-primary/20";
      case "ongoing": return "bg-secondary/10 text-secondary border-secondary/20";
      case "completed": return "bg-accent/10 text-accent border-accent/20";
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
              Experience & <span className="gradient-text">Skills</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A journey through research, internships, and technical expertise in the field of 
              artificial intelligence and computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
              Professional <span className="gradient-text">Experience</span>
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon and Status */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 flex-shrink-0">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary ${exp.color}`}>
                        <exp.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(exp.status)} w-fit`}>
                        {exp.status}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-muted/30 text-foreground text-xs rounded-full border border-muted/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalSkills.map((category, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 rounded-xl animate-slide-up hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary mb-4">
                      <category.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-center px-3 py-2 bg-muted/20 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
              Courses & <span className="gradient-text">Certifications</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 rounded-xl animate-slide-up group hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(course.status)}`}>
                      {course.status}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">{course.provider}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.8s" }}>
              <div className="glass p-8 rounded-2xl">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Let's Collaborate</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing research opportunities, internships, or collaborative projects. 
                  Feel free to reach out if you'd like to work together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="interactive-button"
                    asChild
                  >
                    <a href="mailto:f20221129@goa.bits-pilani.ac.in">
                      Contact Me
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass border-secondary/30 hover:border-secondary text-secondary hover:text-secondary-foreground hover:bg-secondary transition-all duration-300"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/divyanshu-singh-130951250" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;