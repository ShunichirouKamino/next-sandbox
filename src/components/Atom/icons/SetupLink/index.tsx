import { Setup } from "@ubie/ubie-icons";
import Link from "next/link";

export type SetupLinkProps = {
  link: string;
};

const SetupLink: React.FC<SetupLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Setup viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default SetupLink;
