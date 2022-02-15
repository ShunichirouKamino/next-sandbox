type Props = {
  text: string;
  align: "text-left" | "text-center" | "text-right" | "text-justify";
  size?: "text-xs" | "text-base" | "text-2xl" | "text-5xl";
};

const SimpleText: React.FC<Props> = ({ text, align, size = "text-base" }) => {
  return <div className={`${align} ${size}`}>{text}</div>;
};

export default SimpleText;
