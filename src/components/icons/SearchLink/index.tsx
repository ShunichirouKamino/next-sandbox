import { Search } from "@ubie/ubie-icons";
import Link from "next/link";

type Props = {
  link: string;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/search.svg
const SearchLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Search viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default SearchLink;
