import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Experience", path: "/experience" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Divyanshudiv", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/divyanshu-singh-130951250", label: "LinkedIn" },
    { icon: BookOpen, href: "https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en", label: "Google Scholar" },
    { icon: Mail, href: "mailto:f20221129@goa.bits-pilani.ac.in", label: "Email" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              Divyanshu Singh
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-scale-in" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              
              {/* Social Links */}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-glass-border">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="glass-nav border-t border-glass-border">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-glass-border">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;