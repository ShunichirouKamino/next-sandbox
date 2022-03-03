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
    <div className="text-center w-full px-10 py-10">
      <button
        onClick={onClick}
        className="
        bg-[#1e3da3] 
        hover:text-[#EC5252]
        text-white 
        font-bold 
        py-2 px-4 
        w-full 
        h-24 
        rounded-lg 
        inline-flex 
        duration-150 
        items-center justify-center"
      >
        {text}
      </button>
    </div>
  );
};

export default SimpleButton;
