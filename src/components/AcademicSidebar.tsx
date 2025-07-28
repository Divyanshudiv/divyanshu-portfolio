import { NavLink } from "react-router-dom";
import { Home, BookOpen, Briefcase, Github, Linkedin, Mail, SchoolIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const AcademicSidebar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMobile) {
      setIsOpen(false);
    }
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

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 bg-black text-white hover:bg-gray-800 border border-gray-700"
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed left-0 top-0 h-full w-full bg-black z-50 transform transition-transform duration-300">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b border-gray-800 flex justify-between items-start">
                  <div>
                    <NavLink 
                      to="/" 
                      className="text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={handleNavClick}
                    >
                      Divyanshu Singh
                    </NavLink>
                    <p className="text-sm text-gray-400 mt-1">AI Researcher & CS Engineer</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-gray-800"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 p-6">
                  <nav className="space-y-4">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center space-x-4 px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-gray-800 text-white border-l-4 border-blue-500"
                              : "text-gray-300 hover:text-white hover:bg-gray-800"
                          }`
                        }
                        onClick={handleNavClick}
                      >
                        <item.icon className="w-6 h-6" />
                        <span>{item.name}</span>
                      </NavLink>
                    ))}
                  </nav>
                </div>

                {/* Mobile Social Links */}
                <div className="p-6 border-t border-gray-800">
                  <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">Connect</p>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-gray-800 hover:text-white transition-all duration-200 justify-center text-gray-300 py-3"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex flex-col items-center gap-2"
                        >
                          <social.icon className="w-5 h-5" />
                          <span className="text-xs">{social.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }

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
          <div className="space-y-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-gray-800 hover:text-white transition-all duration-200 justify-start text-gray-300 w-full"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-3"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-xs">{social.label}</span>
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