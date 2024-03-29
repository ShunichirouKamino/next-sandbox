import { SetupIcon } from "@ubie/ubie-icons";
import Link from "next/link";

export type SetupLinkProps = {
  link: string;
};

const SetupLink: React.FC<SetupLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer inline-block">
      <Link href={props.link}>
        <SetupIcon viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default SetupLink;
