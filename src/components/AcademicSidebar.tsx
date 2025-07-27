import { NavLink } from "react-router-dom";
import { Home, BookOpen, Briefcase, Github, Linkedin, Mail, SchoolIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const AcademicSidebar = () => {

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
    <div className="fixed left-0 top-0 h-full w-64 bg-black border-r border-gray-800 z-50">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <NavLink 
            to="/" 
            className="text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200"
            onClick={handleNavClick}
          >
            Divyanshu Singh
          </NavLink>
          <p className="text-sm text-gray-400 mt-1">AI Researcher & CS Engineer</p>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-6">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gray-800 text-white border-l-4 border-blue-500"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`
                }
                onClick={handleNavClick}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="p-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">Connect</p>
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-gray-800 hover:text-white transition-all duration-200 justify-start text-gray-300"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="ml-2 text-xs">{social.label}</span>
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