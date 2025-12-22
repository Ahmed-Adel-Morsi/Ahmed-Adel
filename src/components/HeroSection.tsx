import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const { t, direction } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Aurora Effect */}
      <div className="absolute inset-0 aurora-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            // animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            // viewport={{ once: false }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20 rounded-full blur-2xl scale-110" />
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`max-w-2xl ${
              direction === "rtl" ? "text-right" : "text-left"
            }`}
          >
            <motion.p
              initial={{ opacity: 0, x: direction === "rtl" ? 30 : -30 }}
              // animate={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-muted-foreground text-lg ${
                direction === "rtl" ? "mb-5" : "mb-2"
              }`}
            >
              {t("hello")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
            >
              {t("name")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              {t("role")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`flex gap-4 ${
                direction === "rtl" ? "flex-row-reverse justify-end" : ""
              }`}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="glow-button rounded-full px-8 font-medium"
              >
                {t("viewWork")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-8 font-medium border-border hover:bg-muted/50"
              >
                {t("contactMe")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          // animate={{ y: [0, 10, 0] }}
          whileInView={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
