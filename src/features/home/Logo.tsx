import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.webp";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-shrink-0"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20 rounded-full blur-2xl scale-110" />
        <img
          src={profilePhoto}
          alt="Profile"
          className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
        />
      </div>
    </motion.div>
  );
};

export default Logo;
