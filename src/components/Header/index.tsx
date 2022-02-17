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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
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
