export type SelectBoxProp = {
  elements: string[];
  handleChange?: React.ChangeEventHandler<HTMLSelectElement>;
  size?: string; // example "h-12 w-96"
};

const SelectBox: React.FC<SelectBoxProp> = ({
  elements,
  handleChange,
  size = "h-12 w-96",
}): JSX.Element => {
  return (
    <>
      <div className="px-1 py-1">
        <select
          onChange={handleChange}
          className="form-select
          h-12 w-full 
      appearance-none block 
      px-1 py-1 m-0 
      text-base font-normal text-gray-700
      bg-white bg-clip-padding bg-no-repeat 
      border border-solid border-gray-300
      rounded-lg transition ease-in-out
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
