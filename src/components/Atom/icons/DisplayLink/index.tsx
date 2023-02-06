import { DisplayIcon } from "@ubie/ubie-icons";
import Link from "next/link";

export type DisplayLinkProps = {
  link: string;
};

const DisplayLink: React.FC<DisplayLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer inline-block">
      <Link href={props.link}>
        <DisplayIcon viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default DisplayLink;
