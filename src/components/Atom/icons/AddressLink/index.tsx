import { Address } from "@ubie/ubie-icons";
import Link from "next/link";

type Props = {
  link: string;
};

const AddressLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer inline-block">
      <Link href={props.link}>
        <Address viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default AddressLink;
