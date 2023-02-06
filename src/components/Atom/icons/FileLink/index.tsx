import { FileIcon } from "@ubie/ubie-icons";
import Link from "next/link";

export type FileLinkProps = {
  link: string;
};

const FileLink: React.FC<FileLinkProps> = (props): JSX.Element => {
  return (
    <div className="cursor-pointer inline-block">
      <Link href={props.link}>
        <FileIcon viewBox="0 0 24 24" className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default FileLink;
