import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, BookOpen, Briefcase, Github, Linkedin, Mail, SchoolIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AcademicSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Research", path: "/research", icon: BookOpen },
    { name: "Experience", path: "/experience", icon: Briefcase },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Divyanshudiv", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/divyanshu-singh-130951250", label: "LinkedIn" },
    { icon: SchoolIcon, href: "https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en", label: "Google Scholar" },
    { icon: Mail, href: "mailto:f20221129@goa.bits-pilani.ac.in", label: "Email" },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-50 ${
      isCollapsed ? "w-16" : "w-64"
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <NavLink 
                to="/" 
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
                onClick={handleNavClick}
              >
                Divyanshu Singh
              </NavLink>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hover:bg-muted"
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>
          {!isCollapsed && (
            <p className="text-sm text-muted-foreground mt-1">AI Researcher & CS Engineer</p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                  }`
                }
                onClick={handleNavClick}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="p-4 border-t border-border">
          {!isCollapsed && (
            <p className="text-xs text-muted-foreground mb-3 font-medium">Connect</p>
          )}
          <div className={`${isCollapsed ? "space-y-2" : "grid grid-cols-2 gap-2"}`}>
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-muted hover:text-primary transition-all duration-200 justify-start"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${isCollapsed ? "w-8 h-8 p-0 justify-center" : ""}`}
                >
                  <social.icon className="w-4 h-4" />
                  {!isCollapsed && <span className="ml-2 text-xs">{social.label}</span>}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicSidebar;