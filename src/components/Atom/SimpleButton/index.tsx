export type SimpleButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/plusB.svg
const SimpleButton: React.FC<SimpleButtonProps> = ({
  onClick,
  text,
}): JSX.Element => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="
        bg-[#1e3da3] 
        hover:text-[#EC5252]
        text-white 
        font-bold 
        py-2 px-4 
        rounded-lg 
        inline-flex 
        duration-150 
        items-center"
      >
        {text}
      </button>
    </div>
  );
};

export default SimpleButton;
