import { motion } from 'framer-motion';
import { Moon, Sun, Menu, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  
  const navItems = [
    { key: 'home', path: '/' },
    { key: 'projects', path: '/#projects' },
    { key: 'blog', path: '/blog' },
    { key: 'contact', path: '/#contact' },
  ];
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path.replace('#', ''));
  };
  
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-navbar w-auto max-w-4xl flex items-center gap-2 md:gap-6"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-display font-bold text-sm">A</span>
        </div>
      </Link>
      
      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map(item => (
          <Link
            key={item.key}
            to={item.path}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive(item.path) 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {t(item.key)}
          </Link>
        ))}
      </div>
      
      <div className="flex-1" />
      
      {/* Theme Toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        className="rounded-full w-9 h-9 hover:bg-muted/50"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? (
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
      >
        {language === 'en' ? '🇺🇸' : '🇸🇦'}
      </Button>
      
      {/* Mobile Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="glass-card border-0 mt-2">
          {navItems.map(item => (
            <DropdownMenuItem key={item.key} asChild>
              <Link to={item.path} className="cursor-pointer">
                {t(item.key)}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem asChild>
            <Link to="/admin" className="cursor-pointer">
              {t('adminDashboard')}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.nav>
  );
};

export default Navbar;
