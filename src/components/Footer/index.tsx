export type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="flex bottom-0 bg-gray-600 w-auto h-auto items-center sticky">
        <p className="w-full text-center">Copyright © 2020 SHAKE Inc.</p>
      </footer>
    </>
  );
};

export default Footer;
