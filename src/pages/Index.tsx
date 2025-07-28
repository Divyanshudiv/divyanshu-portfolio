import AcademicSidebar from "@/components/AcademicSidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex">
      <AcademicSidebar />
      <div className={`flex-1 ${isMobile ? "ml-0" : "ml-64"} transition-all duration-300`}>
        <HeroSection />
        <AboutSection />
        <NewsSection />
      </div>
    </div>
  );
};

export default Index;
