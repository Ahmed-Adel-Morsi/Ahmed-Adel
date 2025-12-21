import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Moon,
  Sun,
  Menu
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const AdminSidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, direction } = useLanguage();
  const location = useLocation();
  
  const navItems = [
    { key: 'dashboard', path: '/admin', icon: LayoutDashboard },
    { key: 'projects', path: '/admin/projects', icon: FolderKanban },
    { key: 'messages', path: '/admin/messages', icon: MessageSquare },
    { key: 'analytics', path: '/admin/analytics', icon: BarChart3 },
    { key: 'settings', path: '/admin/settings', icon: Settings },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <motion.aside
      initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-card w-64 min-h-screen flex flex-col ${direction === 'rtl' ? 'rounded-l-none rounded-r-2xl' : 'rounded-r-2xl rounded-l-none'}`}
    >
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold">A</span>
          </div>
          <span className="font-display font-semibold text-lg">{t('adminDashboard')}</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{t(item.key)}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-border flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="rounded-full"
        >
          {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleLanguage}
          className="rounded-full text-xs"
        >
          {language === 'en' ? '🇺🇸' : '🇸🇦'}
        </Button>
      </div>
    </motion.aside>
  );
};

export default AdminSidebar;
