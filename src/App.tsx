import { Toaster } from "@/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "./ui/Navbar";
import HeroSection from "./features/home/HeroSection";
import ProjectsSection from "./features/projects/ProjectsSection";
import SkillsSection from "./features/skills/SkillsSection";
import ContactSection from "./features/contact/ContactSection";
import Footer from "./ui/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster />
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
