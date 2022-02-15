type Props = {
  text: string;
  align: "text-left" | "text-center" | "text-right" | "text-justify";
  size?: "text-xs" | "text-base" | "text-2xl" | "text-5xl";
};

const SimpleText: React.FC<Props> = ({ text, align, size = "text-base" }) => {
  const padding = "p-3";
  return <div className={`${align} ${size} ${padding}`}>{text}</div>;
};

export default SimpleText;
