import { Display } from "@ubie/ubie-icons";
import Link from "next/link";

type Props = {
  link: string;
};

const DisplayLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Display viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default DisplayLink;
