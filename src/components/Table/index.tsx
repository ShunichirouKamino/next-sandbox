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
  return (
    <>
      <div className="p-10">
        <table className="frex w-full table-auto rounded-lg sm:shadow-lg">
          <thead className="text-white">
            <tr className="bg-[#1e3da3]">
              <th className="p-3 text-left w-1/3">Name</th>
              <th className="p-3 text-left w-1/3">Email</th>
              <th className="p-3 text-left w-1/3">Actions</th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                John Covv
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                contato@johncovv.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                Michael Jackson
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                m_jackson@mail.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                Julia
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                julia@mail.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                Martin Madrazo
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                martin.madrazo@mail.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
