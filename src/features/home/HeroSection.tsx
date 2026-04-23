import { motion } from "framer-motion";
import Logo from "./Logo";
import Background from "./Background";
import Stats from "./Stats";
import ValuePoints from "./ValuePoints";
import ButtonGroup from "./ButtonGroup";
import Bio from "./Bio";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 sm:pb-24"
    >
      <Background />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-16">
          <Logo />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl text-start px-2 sm:px-0"
          >
            <Bio />
            <ValuePoints />
            <ButtonGroup />
            <Stats />
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
