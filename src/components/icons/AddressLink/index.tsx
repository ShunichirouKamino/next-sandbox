import { Address } from "@ubie/ubie-icons";
import Link from "next/link";

type Props = {
  link: string;
};

const AddressLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Address />
      </Link>
    </div>
  );
};

export default AddressLink;
