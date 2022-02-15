import { Twitter } from "@ubie/ubie-icons";
import Link from "next/link";

type Props = {
  link: string;
};

const TwitterLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Twitter />
      </Link>
    </div>
  );
};

export default TwitterLink;
