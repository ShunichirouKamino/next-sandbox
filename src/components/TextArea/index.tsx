type Props = {
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
