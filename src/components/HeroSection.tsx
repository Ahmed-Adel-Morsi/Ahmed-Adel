import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const valuePoints = [
  {
    en: "Clean, maintainable, and well-structured code.",
    ar: "كود نظيف ومنظم وسهل الصيانة.",
  },
  {
    en: "Modern, responsive, and user-focused interfaces.",
    ar: "واجهات حديثة ومتجاوبة تركز على تجربة المستخدم.",
  },
  {
    en: "Strong problem solving and clear communication.",
    ar: "قدرات قوية في حل المشكلات والتواصل الواضح.",
  },
];

const stats = [
  {
    value: "+10",
    en: "Completed projects",
    ar: "مشاريع مكتملة",
  },
  {
    value: "+2",
    en: "Years of learning & building",
    ar: "سنوات من التعلم والبناء",
  },
  {
    value: "+8",
    en: "Core technologies",
    ar: "تقنيات أساسية",
  },
];

const HeroSection = () => {
  const { t, direction, language } = useLanguage();

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
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
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
            className="max-w-2xl text-start"
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
              className="text-xl md:text-2xl text-primary font-semibold mb-8"
            >
              {t("role")}
            </motion.p>

            {/* Short bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-base md:text-lg text-foreground leading-relaxed mb-5 max-w-xl"
            >
              {language === "ar"
                ? "مطور واجهات أمامية شغوف ببناء مواقع ويب سريعة وحديثة مع التركيز على التجربة البصرية وتجربة المستخدم."
                : "Frontend developer passionate about building fast, modern web experiences with a strong focus on UI quality and UX."}
            </motion.p>

            {/* Value proposition points */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mb-8 space-y-2 text-sm text-foreground/90 ps-1"
            >
              {valuePoints.map((point) => (
                <li
                  key={point.en}
                  className="flex items-start gap-2 text-foreground"
                >
                  <span className="mt-[3px] text-primary text-xs">✓</span>
                  <span>{language === "ar" ? point.ar : point.en}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-8 font-medium border-border hover:bg-muted/50"
              >
                {t("contactMe")}
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="glow-button rounded-full px-8 font-medium"
              >
                {t("viewWork")}
              </Button>
            </motion.div>

            {/* Stats / mini analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-4 text-sm"
            >
              {stats.map((stat) => (
                <div
                  key={stat.en}
                  className="glass-card hover:shadow-none relative overflow-hidden rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-xs text-muted-foreground/90 shadow-sm backdrop-blur"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 opacity-70" />
                  <div className="relative z-10 flex flex-col">
                    <span className="text-lg font-semibold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-[0.7rem]">
                      {language === "ar" ? stat.ar : stat.en}
                    </span>
                  </div>
                </div>
              ))}
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
