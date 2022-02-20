export type Column = {
  label: string;
  size?: string;
  bodyStyle?: string;
  // align?: "right" | "center" | "left";
  // required?: boolean;
  // render: (row: R, index: number, all: R[]) => React.ReactNode;
  // comparator?: (left: R, right: R) => number;
};

export type RowDataType = {
  label: string;
  data: string;
};

export type TableProps = {
  columns: Column[];
  rowdata?: RowDataType[][];
};

function Table({ columns, rowdata }: TableProps): JSX.Element {
  return (
    <>
      <div className="p-10">
        <table className="frex w-full table-auto rounded-lg sm:shadow-lg">
          <thead className="text-white">
            <tr className="bg-[#1e3da3]">
              {columns.map((col) => (
                <th className={`${col.size}` + " p-3 text-left"}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowdata.map((row) => (
              <tr>
                {columns.map((col) =>
                  col.bodyStyle ? (
                    <td
                      className={
                        `${col.size} ${col.bodyStyle}` +
                        " border hover:bg-gray-100 p-3"
                      }
                    >
                      {row.find((r) => r.label === col.label).data}
                    </td>
                  ) : (
                    <td
                      className={
                        `${col.size}` + " border hover:bg-gray-100 p-3"
                      }
                    >
                      {row.find((r) => r.label === col.label).data}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
