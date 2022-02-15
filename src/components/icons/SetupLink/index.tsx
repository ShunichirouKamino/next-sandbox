import { Setup } from "@ubie/ubie-icons";
import Link from "next/link";

type Props = {
  link: string;
};

const SetupLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Setup />
      </Link>
    </div>
  );
};

export default SetupLink;
