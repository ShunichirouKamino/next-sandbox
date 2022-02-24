import ImageContainer from "../../Atom/ImageContainer";
import SearchBox from "../../Atom/SearchBox";
import SimpleText from "../../Atom/SimpleText";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-10 bg-white py-6 sticky top-0">
        <SearchBox></SearchBox>
        <div className="flex items-center">
          <SimpleText
            text="Shunichiro"
            align="text-center"
            style="font-bold"
          ></SimpleText>
          <div className="px-5">
            <ImageContainer size="h-24" alt="no-image" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
