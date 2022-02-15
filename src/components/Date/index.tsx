import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};
const Date: React.FC<Props> = ({ dateString }) => {
  const date: Date = parseISO(dateString);
  return (
    <>
      <div className="p-2 pr-8 text-right">
        <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
      </div>
    </>
  );
};

export default Date;
