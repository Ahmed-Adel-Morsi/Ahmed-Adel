import ButtonIcon from "@/ui/ButtonIcon";
import { GithubIcon, LinkedInIcon, WhatsappIcon } from "@/ui/icons";

const socialMediaLinks = [
  { path: "https://github.com/ahmed-adel-morsi", icon: <GithubIcon /> },
  {
    path: "https://www.linkedin.com/in/ahmed-adel-morsi",
    icon: <LinkedInIcon />,
  },
  { path: "http://wa.me/+201019540239", icon: <WhatsappIcon /> },
];

const SocialMedia = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-6 text-muted-foreground">
      {socialMediaLinks.map((item) => (
        <ButtonIcon link={item.path} key={item.path}>
          {item.icon}
        </ButtonIcon>
      ))}
    </div>
  );
};

export default SocialMedia;
