import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const skills = [
  { name: 'Angular', icon: '🅰️', color: '#DD0031' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: '🌊', color: '#06B6D4' },
  { name: 'Node.js', icon: 'JS', color: '#339933' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Git', icon: '📦', color: '#F05032' },
];

const SkillsSection = () => {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const }
    },
  };
  
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 aurora-bg opacity-20" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          {t('skillsTitle')}
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card px-6 py-4 flex items-center gap-3 cursor-pointer"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
