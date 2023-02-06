import { HomeOutlineIcon } from "@ubie/ubie-icons";
import Link from "next/link";

export type HomeLinkProps = {
  link: string;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/home-outline.svg
const HomeLink: React.FC<HomeLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer inline-block">
      <Link href={props.link}>
        <HomeOutlineIcon viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default HomeLink;
