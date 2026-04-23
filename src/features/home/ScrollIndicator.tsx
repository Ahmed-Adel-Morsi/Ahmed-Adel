import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      viewport={{ once: true }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
      >
        <div className="w-1 h-2 rounded-full bg-muted-foreground" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
