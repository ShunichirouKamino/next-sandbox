import { Account } from "@ubie/ubie-icons";
import Link from "next/link";

export type AccountLinkProps = {
  link: string;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/account.svg
const AccountLink: React.FC<AccountLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <Account viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default AccountLink;
