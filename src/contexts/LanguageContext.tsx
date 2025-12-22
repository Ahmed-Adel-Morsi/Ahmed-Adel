import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

const currentYear = new Date().getFullYear();

const translations: Translations = {
  // Navbar
  home: { en: "Home", ar: "الرئيسية" },
  projects: { en: "Projects", ar: "المشاريع" },
  skills: { en: "Skills", ar: "المهارات" },
  contact: { en: "Contact", ar: "تواصل" },

  // Hero
  hello: { en: "Hello, I'm", ar: "مرحباً، أنا" },
  name: { en: "Ahmed Adel", ar: "أحمد عادل" },
  role: { en: "Frontend Web Developer", ar: "مطور واجهات ويب" },
  viewWork: { en: "View My Work", ar: "عرض أعمالي" },
  contactMe: { en: "Contact Me", ar: "تواصل معي" },

  // Projects
  myProjects: { en: "My Projects", ar: "مشاريعي" },
  viewDetails: { en: "View Details", ar: "عرض التفاصيل" },
  liveDemo: { en: "Live Demo", ar: "عرض مباشر" },
  backToProjects: { en: "Back to Projects", ar: "العودة للمشاريع" },
  projectNotFound: { en: "Project not found", ar: "المشروع غير موجود" },
  warehouse: { en: "Warehouse Management System", ar: "نظام إدارة مخارن" },
  warehouseDesc: {
    en: "Warehouse Management System (ERP)",
    ar: "نظام إدارة مخارن",
  },
  zwaj: { en: "Zwaj Islamy App", ar: "موقع زواج إسلامي" },
  zwajDesc: {
    en: "Online Zwaj Islamy platform",
    ar: "تفاصيل منصة الزواج الإسلامي",
  },
  sticky: { en: "Sticky Notes App", ar: "موقع لحفظ ملاحظاتك" },
  stickyDesc: {
    en: "Productivity Sticky Notes Tool",
    ar: "أداة حفظ ملاحظات لزيادة الإنتاجية",
  },
  timer: { en: "Countdown Timer & Stopwatch", ar: "عداد تنازلي وساعة إيقاف" },
  timerDesc: {
    en: "Timer and Stopwatch Tool",
    ar: "أداة عداد تنازلي وساعة إيقاف",
  },
  landing: { en: "Landing Page", ar: "صفحة هبوط" },
  landingDesc: {
    en: "Modern Landing Page",
    ar: "صفحة هبوط حديثة",
  },
  // Skills
  skillsTitle: { en: "Skills & Technologies", ar: "المهارات والتقنيات" },

  // Contact
  contactTitle: { en: "Get In Touch", ar: "تواصل معي" },
  yourName: { en: "Your Name", ar: "الإسم" },
  yourEmail: { en: "Your Email", ar: "البريد الإلكتروني" },
  message: { en: "Message", ar: "الرسالة" },
  sendMessage: { en: "Send Message", ar: "إرسال الرسالة" },

  // Admin
  adminDashboard: { en: "Admin Dashboard", ar: "لوحة التحكم" },
  dashboard: { en: "Dashboard", ar: "الرئيسية" },
  messages: { en: "Messages", ar: "الرسائل" },
  analytics: { en: "Analytics", ar: "التحليلات" },
  settings: { en: "Settings", ar: "الإعدادات" },
  totalProjects: { en: "Total Projects", ar: "إجمالي المشاريع" },
  newMessages: { en: "New Messages", ar: "رسائل جديدة" },
  totalViews: { en: "Total Views", ar: "إجمالي المشاهدات" },
  activeUsers: { en: "Active Users", ar: "المستخدمون النشطون" },
  manageProjects: { en: "Manage Projects", ar: "إدارة المشاريع" },
  title: { en: "Title", ar: "العنوان" },
  status: { en: "Status", ar: "الحالة" },
  actions: { en: "Actions", ar: "الإجراءات" },
  published: { en: "Published", ar: "منشور" },
  draft: { en: "Draft", ar: "مسودة" },
  edit: { en: "Edit", ar: "تعديل" },
  delete: { en: "Delete", ar: "حذف" },
  trafficOverview: { en: "Traffic Overview", ar: "نظرة على الزيارات" },
  userAnalytics: { en: "User Analytics", ar: "تحليلات المستخدمين" },
  returning: { en: "Returning", ar: "عائدون" },
  new: { en: "New", ar: "جدد" },

  // Footer
  copyright: {
    en: `© ${currentYear} Ahmed Adel. All rights reserved.`,
    ar: `© ${currentYear} أحمد عادل. جميع الحقوق محفوظة.`,
  },
};

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, direction, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
