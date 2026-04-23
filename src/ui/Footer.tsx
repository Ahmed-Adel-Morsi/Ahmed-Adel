import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language, direction } = useLanguage();

  return (
    <footer
      className="py-8 px-6 border-t border-border"
      dir={direction}
      lang={language}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
