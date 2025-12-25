import { motion } from "framer-motion";
import { Moon, Sun, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import profilePhoto from "@/assets/profile-photo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { key: "home", sectionId: "home" },
    { key: "projects", sectionId: "projects" },
    { key: "skills", sectionId: "skills" },
    { key: "contact", sectionId: "contact" },
  ];

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["contact", "skills", "projects", "home"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // If at top, set home as active
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (sectionId: string) => {
    if (location.pathname !== "/") return false;
    return activeSection === sectionId;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: "-50%", y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-navbar w-auto max-w-4xl flex items-center justify-center gap-2 md:gap-6"
    >
      {/* Logo */}
      <button
        onClick={() => scrollToSection("home")}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={profilePhoto} alt="logo" />
        </div>
      </button>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => scrollToSection(item.sectionId)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive(item.sectionId)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {t(item.key)}
          </button>
        ))}
      </div>

      <div className="flex-1" />

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full w-9 h-9 hover:bg-muted/50"
        aria-label="Toggle Theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </motion.div>
      </Button>

      {/* Language Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleLanguage}
        className="rounded-full w-9 h-9 hover:bg-muted/50 text-xs font-bold"
        aria-label="Toggle Language"
      >
        {language === "en" ? "us" : "ar"}
      </Button>

      {/* Mobile Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={language === "ar" ? "start" : "end"}
          className="glass-card border-0 mt-2"
        >
          {navItems.map((item) => (
            <DropdownMenuItem
              key={item.key}
              onClick={() => scrollToSection(item.sectionId)}
              className="cursor-pointer justify-center"
            >
              {t(item.key)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.nav>
  );
};

export default Navbar;
