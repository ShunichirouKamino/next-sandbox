export type Column<R> = {
  label: string;
  // style?: React.CSSProperties;
  // align?: "right" | "center" | "left";
  // required?: boolean;
  // render: (row: R, index: number, all: R[]) => React.ReactNode;
  // comparator?: (left: R, right: R) => number;
};

export type Props = {
  text: string;
};

const TextArea: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div className="text-left max-w-3xl">{text}</div>
    </>
  );
};

export default TextArea;
