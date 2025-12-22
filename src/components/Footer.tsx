import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
