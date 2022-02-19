import SearchLink from "../icons/SearchLink";
import ImageContainer from "../ImageContainer";
import SearchBox from "../SearchBox";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-10 bg-white py-6">
        <SearchBox></SearchBox>
        <div className="flex items-center">
          <div className="px-5">
            <ImageContainer size="h-24" alt="no-image" />
          </div>
          <p>Shunichirou</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
