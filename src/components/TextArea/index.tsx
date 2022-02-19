export type TextAreaProps = {
  text: string;
};

const TextArea: React.FC<TextAreaProps> = ({ text }) => {
  return (
    <>
      <div className="text-left max-w-3xl">{text}</div>
    </>
  );
};

export default TextArea;
