export type Column<R> = {
  label: string;
  size?: string;

  // style?: React.CSSProperties;
  // align?: "right" | "center" | "left";
  // required?: boolean;
  // render: (row: R, index: number, all: R[]) => React.ReactNode;
  // comparator?: (left: R, right: R) => number;
};

export type TableProps<R> = {
  columns: Column<R>[];
  rawdata?: R[];
};

function Table<R>({ columns, rawdata }: TableProps<R>): JSX.Element {
  console.log(rawdata[0][`${columns[0].label.toLowerCase()}`]);
  return (
    <>
      <div className="p-10">
        <table className="frex w-full table-auto rounded-lg sm:shadow-lg">
          <thead className="text-white">
            <tr className="bg-[#1e3da3]">
              {columns.map((col, index) => (
                <th className={`${col.size}` + " p-3 text-left"}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rawdata.map((rawdata) => (
              <tr>
                {columns.map((col) => (
                  <td className="border hover:bg-gray-100 p-3">
                    {rawdata[`${col.label.toLowerCase()}`]}
                  </td>
                ))}
              </tr>
            ))}

            {/* <tr>
              <td className="border hover:bg-gray-100 p-3">John Covv</td>
              <td className="border hover:bg-gray-100 p-3">
                contato@johncovv.com
              </td>
              <td className="border hover:bg-gray-100 p-3 text-red-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr>
              <td className="border hover:bg-gray-100 p-3">Michael Jackson</td>
              <td className="border hover:bg-gray-100 p-3">
                m_jackson@mail.com
              </td>
              <td className="border hover:bg-gray-100 p-3 text-red-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
