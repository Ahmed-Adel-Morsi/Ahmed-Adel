import { motion } from "framer-motion";
import { Download, ArrowLeft, Link, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import certificateImage from "@/assets/Certificate.webp";

const Resume = () => {
  const navigate = useNavigate();
  const { t, language, direction } = useLanguage();
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Force LTR and English on Resume page, restore on unmount
  useEffect(() => {
    const previousDir = document.documentElement.dir;
    const previousLang = document.documentElement.lang;

    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";

    return () => {
      document.documentElement.dir = previousDir;
      document.documentElement.lang = previousLang;
    };
  }, []);

  useEffect(() => {
    if (showCertificateModal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [showCertificateModal]);

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ahmed-Adel-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background" dir="ltr">
      <main className="container mx-auto py-10 sm:py-16 md:py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div
            className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            dir={direction}
            lang={language}
          >
            <div className="flex-1">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("back") || "Back"}
              </button>
              <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                Ahmed Adel
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Front-End Web Developer | React | Angular
              </p>
            </div>
            <Button
              onClick={handleDownloadPDF}
              className="gap-2 rounded-full w-full sm:w-auto"
            >
              <Download className="h-4 w-4" />
              {t("download") || "Download PDF"}
            </Button>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:ahmedadel0239@gmail.com"
                  className="text-primary hover:underline"
                >
                  ahmedadel0239@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +20 (101) 954-0239
              </p>
              <p>
                <span className="font-semibold">Location:</span> Cairo, Egypt
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/ahmed-adel-morsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/ahmed-adel-morsi
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href="https://github.com/Ahmed-Adel-Morsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/ahmed-adel-morsi
                </a>
              </p>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-4">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Recent Computer Science graduate specializing in front-end web
              development with strong expertise in React and Angular frameworks.
              Proven ability to build responsive, user-focused web applications
              using modern JavaScript, TypeScript, and CSS frameworks.
              Demonstrated technical proficiency through personal projects
              including e-commerce platforms, productivity tools, and portfolio
              websites. Combines technical development skills with multimedia
              production experience to create visually compelling and functional
              web experiences.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "TypeScript",
                    "Angular",
                    "React",
                    "Redux Toolkit",
                    "Tailwind CSS",
                    "Bootstrap",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["API", "Node.js", "Express", "Firebase", "MongoDB"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Cursor AI"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Team Collaboration",
                    "Communication",
                    "Time Management",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    Freelance Front-End Developer
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    2023 - Present
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">Self-Employed</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    Developed 10+ responsive web applications using React,
                    Angular, and TypeScript
                  </li>
                  <li>
                    Built full-stack e-commerce platform with shopping cart,
                    payment integration, and admin dashboard
                  </li>
                  <li>
                    Implemented RESTful APIs and Firebase backend services for
                    real-time data synchronization
                  </li>
                  <li>
                    Optimized web performance achieving 90+ Lighthouse scores
                    through code splitting and lazy loading
                  </li>
                  <li>
                    Integrated modern UI/UX practices using Tailwind CSS and
                    Framer Motion for smooth animations
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    Open Source Contributor
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    2022 - Present
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">GitHub Projects</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    Maintained personal GitHub portfolio with 15+ repositories
                    showcasing web development projects
                  </li>
                  <li>
                    Collaborated on community projects using Git workflows and
                    pull request reviews
                  </li>
                  <li>
                    Documented code and created technical README files for
                    project setup and deployment
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Additional Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Additional Experience
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    Designer and Multimedia Producer
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    2022 - 2024
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  Mufix Community • Volunteer
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    Created visual content and multimedia assets for community
                    engagement
                  </li>
                  <li>
                    Collaborated with team members to deliver projects on
                    schedule
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Video Editor</h3>
                  <span className="text-sm text-muted-foreground">
                    2023 - 2024
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  Santawy • Freelance
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    Edited educational videos using Adobe Premiere Pro and
                    DaVinci Resolve
                  </li>
                  <li>
                    Managed project timelines and client communications
                    effectively
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    Bachelor of Computers and Information
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    2020 - 2024
                  </span>
                </div>
                <p className="text-muted-foreground font-medium mb-2">
                  Computer Science Department
                </p>
                <p className="text-primary font-medium">Menofia University</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.53, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Certifications & Courses
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Web Developer using PHP Certificate
                    </h3>
                    <p className="text-primary font-medium">
                      Information Technology Institute (ITI)
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Feb 2022
                  </span>
                </div>

                <p className="text-sm font-medium mb-3">Course Content:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Database Fundamentals",
                    "PHP",
                    "MySQL",
                    "Freelancing Basics",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Link className="h-4 w-4" />
                  View Certificate
                </button>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="glass-card p-5 md:p-6 mb-6 md:mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Languages
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Arabic</span>
                <span className="text-sm text-muted-foreground">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">English</span>
                <span className="text-sm text-muted-foreground">
                  Professional Working Proficiency
                </span>
              </div>
            </div>
          </motion.div>

          {/* Projects Highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-card p-5 md:p-6"
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Key Projects
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-base mb-1">
                  Warehouse Management System
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  A full-stack web application for managing warehouse inventory,
                  products, customers, vendors, and transactions with real-time
                  reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Redux Toolkit",
                    "Bootstrap CSS",
                    "Node.js",
                    "MongoDB",
                    "Express",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">
                  Islamic Marriage Initiative
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  A comprehensive Islamic marriage platform connecting eligible
                  men and women based on Islamic values, featuring form
                  submission, profile browsing, voice recording, and educational
                  courses.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Swiper.js",
                    "Tailwind CSS",
                    "React Media Recorder",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">
                  Portfolio Website
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Dynamic portfolio with admin dashboard, project management,
                  and multi-language support
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Firebase", "Framer Motion"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                View all projects with live demos on{" "}
                <button
                  onClick={() => navigate("/")}
                  className="text-primary hover:underline font-semibold"
                >
                  portfolio page
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Certificate Modal Overlay */}
      {showCertificateModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCertificateModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={certificateImage}
              alt="ITI Web Developer Certificate"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Resume;
