type Props = {
  text: string;
  align: "text-left" | "text-center" | "text-right" | "text-justify";
};

const SimpleText: React.FC<Props> = ({ text, align }) => {
  return <div className={`${align}`}>{text}</div>;
};

export default SimpleText;
