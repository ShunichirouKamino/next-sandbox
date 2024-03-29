import { GenderHumanIcon } from "@ubie/ubie-icons";
import Link from "next/link";

export type HumanLinkProps = {
  link: string;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/gender-human.svg
const HumanLink: React.FC<HumanLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer inline-block">
      <Link href={props.link}>
        <GenderHumanIcon viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default HumanLink;
