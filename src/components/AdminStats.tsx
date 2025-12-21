import { motion } from 'framer-motion';
import { FolderKanban, MessageSquare, Eye, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  delay 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string | number;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-6 hover-lift"
  >
    <div className="flex items-start justify-between mb-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <p className="text-3xl font-display font-bold text-foreground">{value}</p>
  </motion.div>
);

const AdminStats = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: FolderKanban, key: 'totalProjects', value: 12 },
    { icon: MessageSquare, key: 'newMessages', value: 5 },
    { icon: Eye, key: 'totalViews', value: '8,400' },
    { icon: Users, key: 'activeUsers', value: '1,200' },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.key}
          icon={stat.icon}
          label={t(stat.key)}
          value={stat.value}
          delay={0.1 * (index + 1)}
        />
      ))}
    </div>
  );
};

export default AdminStats;
