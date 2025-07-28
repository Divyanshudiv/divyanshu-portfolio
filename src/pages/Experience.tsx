import { MapPin, Calendar, Award, Code, BookOpen, Trophy, Users, Rocket, ExternalLink, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import AcademicSidebar from "@/components/AcademicSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Experience = () => {
  const isMobile = useIsMobile();
  const experiences = [
    {
      title: "Research Intern",
      company: "CLAN Labs, Purdue University",
      location: "West Lafayette, IN, USA",
      period: "May 2025 -- Present",
      status: "Current",
      description: "Currently developing dynamic obstacle avoidance techniques using energy-based adaptive planning with flow matching models. Exploring multi-modal applications of diffusion models in medical domains.",
      supervisor: "Dr. Vaneet Aggarwal",
      skills: ["Flow Matching", "Diffusion Models", "Motion Planning", "Python", "PyTorch"],
      icon: Rocket,
      color: "text-primary"
    },
    {
      title: "Undergraduate Researcher",
      company: "प्रragya Lab, BITS Goa",
      location: "Goa, India",
      period: "July 2025 -- Present",
      status: "Current",
      description: "Working on Neural Genomics and 3D Spatial Reasoning for LLMs.",
      supervisor: "Dr. Amitava Das",
      skills: ["Neural Genomics", "Spatial Reasoning", "LLMs", "Python", "Deep Learning"],
      icon: Brain,
      color: "text-accent"
    },
    {
      title: "Undergraduate Researcher",
      company: "APP Center for AI Research (APPCAIR)",
      location: "Goa, India",
      period: "December 2023 -- Present",
      status: "Current",
      description: "Developed DeliverAI, a reinforcement learning-based model for optimizing food delivery routes. Investigating a novel dynamic ride-sharing system using a multi-agent actor-critic approach. Formulating a driver behavior modeling framework to quantify unruliness in traffic scenarios.",
      supervisor: "Dr. Snehanshu Saha, Dr. Santonu Sarkar",
      skills: ["Reinforcement Learning", "Multi-Agent Systems", "Deep Learning", "Optimization"],
      icon: BookOpen,
      color: "text-accent"
    },
    {
      title: "Research Intern",
      company: "Digital India Bhashini Division",
      location: "Remote, India",
      period: "May 2024 -- July 2024",
      status: "Completed",
      description: "Collaborated with the post-processing team, focusing on Inverse Text Normalization (ITN). Designed a WFST-based model for ITN across diverse Indic languages. Implemented a T5-based model to enhance ITN by introducing punctuation handling.",
      supervisor: "National Language Mission",
      skills: ["NLP", "Transformers", "WFST", "T5", "Indic Languages"],
      icon: Code,
      color: "text-secondary"
    }
  ];

  const volunteerExperiences = [
    {
      title: "Teaching Assistant",
      company: "CS-F429 Natural Language Processing, BITS Pilani",
      location: "Goa, India",
      period: "Aug -- Dec 2025",
      status: "Current",
      description: "Designing and conducting labs on NLP learning concepts for undergraduate students.",
      skills: ["Teaching", "NLP", "Lab Design"],
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Teaching Assistant",
      company: "CS-F425 Deep Learning, BITS Pilani",
      location: "Goa, India",
      period: "Jan -- May 2025",
      status: "Completed",
      description: "Designed and conducted tutorials on deep learning concepts for undergraduate students.",
      skills: ["Teaching", "Deep Learning", "Curriculum Design"],
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Undergraduate Volunteer",
      company: "IndoML 2024",
      location: "Goa, India",
      period: "Dec 2024",
      status: "Completed",
      description: "Represented APPCAIR as one of the few undergraduate volunteers, showcased research at the sponsor stall, and facilitated Q&A sessions during the conference.",
      skills: ["Conference Management", "Research Presentation", "Networking"],
      icon: Award,
      color: "text-accent"
    }
  ];

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "C", "Java", "SQL", "LaTeX"],
      icon: Code
    },
    {
      category: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "Gymnasium", "PettingZoo"],
      icon: Trophy
    },
    {
      category: "Tools & Technologies",
      skills: ["Anaconda", "GitHub", "Docker", "Linux", "VS Code", "Jupyter"],
      icon: Award
    },
    {
      category: "Research Areas",
      skills: ["Generative AI", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "Optimization"],
      icon: BookOpen
    }
  ];

  const courses = [
    {
      title: "Generative AI",
      provider: "BITS Pilani",
      status: "Completed",
      description: "Advanced course on generative models, diffusion models, and their applications in various domains."
    },
    {
      title: "Natural Language Processing",
      provider: "BITS Pilani",
      status: "Completed",
      description: "Comprehensive study of NLP techniques, transformers, and language model applications."
    },
    {
      title: "Reinforcement Learning",
      provider: "BITS Pilani",
      status: "Completed",
      description: "Theoretical foundations and practical implementations of reinforcement learning algorithms."
    },
    {
      title: "Foundations of Data Science",
      provider: "BITS Pilani",
      status: "Completed",
      description: "Statistical foundations, machine learning algorithms, and data analysis techniques."
    },
    {
      title: "DeepMind x UCL: Deep Learning Lectures",
      provider: "Online",
      status: "Completed",
      description: "Advanced deep learning concepts from DeepMind researchers and UCL faculty."
    },
    {
      title: "DeepMind x UCL: Reinforcement Learning Lectures",
      provider: "Online",
      status: "Completed",
      description: "Cutting-edge reinforcement learning techniques and applications."
    },
    {
      title: "CS229 Stanford ML",
      provider: "Stanford University (Online)",
      status: "Completed",
      description: "Comprehensive machine learning course covering supervised and unsupervised learning."
    },
    {
      title: "CS50's Introduction to AI with Python",
      provider: "Harvard University (Online)",
      status: "Completed",
      description: "Introduction to artificial intelligence concepts and Python implementation.",
      certificate: "https://certificates.cs50.io/a0d1bd0a-dbcb-44f0-991e-9732d52f6a00.pdf"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "current": return "bg-blue-100 text-blue-900 border-blue-300";
      case "ongoing": return "bg-yellow-100 text-yellow-900 border-yellow-300";
      case "completed": return "bg-green-100 text-green-900 border-green-300";
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
              Experience & <span className="text-primary">Skills</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
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
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-gray-900">
              Professional <span className="text-primary">Experience</span>
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
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <div className="w-6 h-6 rounded bg-primary"></div>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                        exp.status === "Current" 
                          ? "bg-blue-100 text-blue-800 border-blue-600" 
                          : "bg-gray-100 text-gray-800 border-gray-600"
                      } w-fit`}>
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
                          {exp.supervisor && (
                            <div className="text-primary font-medium text-sm">
                              Supervisor: {exp.supervisor}
                            </div>
                          )}
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

      {/* Volunteer Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-gray-900">
              Volunteer <span className="text-primary">Experience</span>
            </h2>

            <div className="space-y-8">
              {volunteerExperiences.map((exp, index) => (
                <div 
                  key={index}
                  className="floating-card p-6 lg:p-8 rounded-xl animate-slide-up group hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon and Status */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <div className="w-6 h-6 rounded bg-primary"></div>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                        exp.status === "Current" 
                          ? "bg-blue-100 text-blue-800 border-blue-600" 
                          : "bg-gray-100 text-gray-800 border-gray-600"
                      } w-fit`}>
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
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-gray-900">
              Technical <span className="text-primary">Skills</span>
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
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-gray-900">
              Courses & <span className="text-primary">Certifications</span>
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
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800 border border-green-600">
                      {course.status}
                    </span>
                  </div>
                    <p className="text-primary font-medium text-sm mb-3">{course.provider}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                  {course.certificate && (
                    <a 
                      href={course.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent-foreground hover:underline mt-2"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
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
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
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
    </div>
  );
};

export default Experience;