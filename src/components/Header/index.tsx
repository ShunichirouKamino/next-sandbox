import SearchLink from "../icons/SearchLink";
import ImageContainer from "../ImageContainer";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-10 bg-white py-6">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg h-12 w-96">
          <input
            type="text"
            placeholder="search"
            className="bg-gray-100 outline-none w-full"
          />
          <SearchLink link={""}></SearchLink>
        </div>
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
