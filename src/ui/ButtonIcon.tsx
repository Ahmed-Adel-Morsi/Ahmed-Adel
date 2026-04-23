const ButtonIcon = ({ children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="hover:text-primary transition-colors [&_svg]:size-6"
    >
      {children}
    </a>
  );
};

export default ButtonIcon;
