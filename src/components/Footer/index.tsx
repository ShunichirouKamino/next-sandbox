import FooterMenu from "./FooterMenu";

export type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="bottom-0 w-auto h-auto items-center sticky">
        <FooterMenu></FooterMenu>
      </footer>
    </>
  );
};

export default Footer;
