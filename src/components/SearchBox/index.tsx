import SearchLink from "../icons/SearchLink";

export type SearchBoxProps = {};

const SearchBox: React.FC<SearchBoxProps> = () => {
  return (
    <>
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg h-12 w-96">
        <input
          type="text"
          placeholder="search"
          className="bg-gray-100 outline-none w-full"
        />
        <SearchLink link={""}></SearchLink>
      </div>
    </>
  );
};

export default SearchBox;
