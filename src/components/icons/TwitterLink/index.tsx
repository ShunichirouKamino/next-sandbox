import { Twitter } from "@ubie/ubie-icons";
import Link from "next/link";

export type TwitterLinkProps = {
  link: string;
};

const TwitterLink: React.FC<TwitterLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Twitter viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default TwitterLink;
