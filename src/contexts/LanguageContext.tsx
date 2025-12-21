import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

const translations: Translations = {
  // Navbar
  home: { en: 'Home', ar: 'الرئيسية' },
  projects: { en: 'Projects', ar: 'المشاريع' },
  blog: { en: 'Blog', ar: 'المدونة' },
  contact: { en: 'Contact', ar: 'تواصل' },
  
  // Hero
  hello: { en: "Hello, I'm", ar: 'مرحباً، أنا' },
  name: { en: 'Mohamed Ahmed', ar: 'محمد أحمد' },
  role: { en: 'Frontend Web Developer', ar: 'مطور واجهات ويب' },
  viewWork: { en: 'View My Work', ar: 'عرض أعمالي' },
  contactMe: { en: 'Contact Me', ar: 'تواصل معي' },
  
  // Projects
  myProjects: { en: 'My Projects', ar: 'مشاريعي' },
  viewDetails: { en: 'View Details', ar: 'عرض التفاصيل' },
  ecommerce: { en: 'E-Commerce App', ar: 'تطبيق تجارة إلكترونية' },
  ecommerceDesc: { en: 'Online shopping platform', ar: 'منصة تسوق إلكترونية' },
  taskManager: { en: 'Task Manager', ar: 'مدير المهام' },
  taskManagerDesc: { en: 'Productivity Tool', ar: 'أداة إنتاجية' },
  portfolioWebsite: { en: 'Portfolio Website', ar: 'موقع شخصي' },
  portfolioDesc: { en: 'Personal Portfolio', ar: 'معرض أعمال شخصي' },
  
  // Skills
  skillsTitle: { en: 'Skills & Technologies', ar: 'المهارات والتقنيات' },
  
  // Contact
  contactTitle: { en: 'Get In Touch', ar: 'تواصل معي' },
  yourName: { en: 'Your Name', ar: 'اسمك' },
  yourEmail: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
  message: { en: 'Message', ar: 'الرسالة' },
  sendMessage: { en: 'Send Message', ar: 'إرسال الرسالة' },
  
  // Admin
  adminDashboard: { en: 'Admin Dashboard', ar: 'لوحة التحكم' },
  dashboard: { en: 'Dashboard', ar: 'الرئيسية' },
  messages: { en: 'Messages', ar: 'الرسائل' },
  analytics: { en: 'Analytics', ar: 'التحليلات' },
  settings: { en: 'Settings', ar: 'الإعدادات' },
  totalProjects: { en: 'Total Projects', ar: 'إجمالي المشاريع' },
  newMessages: { en: 'New Messages', ar: 'رسائل جديدة' },
  totalViews: { en: 'Total Views', ar: 'إجمالي المشاهدات' },
  activeUsers: { en: 'Active Users', ar: 'المستخدمون النشطون' },
  manageProjects: { en: 'Manage Projects', ar: 'إدارة المشاريع' },
  title: { en: 'Title', ar: 'العنوان' },
  status: { en: 'Status', ar: 'الحالة' },
  actions: { en: 'Actions', ar: 'الإجراءات' },
  published: { en: 'Published', ar: 'منشور' },
  draft: { en: 'Draft', ar: 'مسودة' },
  edit: { en: 'Edit', ar: 'تعديل' },
  delete: { en: 'Delete', ar: 'حذف' },
  trafficOverview: { en: 'Traffic Overview', ar: 'نظرة على الزيارات' },
  userAnalytics: { en: 'User Analytics', ar: 'تحليلات المستخدمين' },
  returning: { en: 'Returning', ar: 'عائدون' },
  new: { en: 'New', ar: 'جدد' },
  
  // Footer
  copyright: { en: '© 2024 Mohamed Ahmed. All rights reserved.', ar: '© 2024 محمد أحمد. جميع الحقوق محفوظة.' },
};

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };
  
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
