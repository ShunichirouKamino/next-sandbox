export type SelectBoxProp = {
  elements: string[];
  handleChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

const SelectBox: React.FC<SelectBoxProp> = ({
  elements,
  handleChange,
}): JSX.Element => {
  return (
    <>
      <div className="px-4 py-2">
        <select
          onChange={handleChange}
          className="form-select 
      appearance-none 
      block 
      w-full 
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          {elements.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default SelectBox;
