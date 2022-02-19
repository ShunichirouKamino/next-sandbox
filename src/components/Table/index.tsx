export type Column<R> = {
  label: string;
  size?: string;
  bodyStyle?: string;
  // align?: "right" | "center" | "left";
  // required?: boolean;
  // render: (row: R, index: number, all: R[]) => React.ReactNode;
  // comparator?: (left: R, right: R) => number;
};

export type TableProps<R> = {
  columns: Column<R>[];
  rawdata?: R[];
};

export type styles = {};

function Table<R>({ columns, rawdata }: TableProps<R>): JSX.Element {
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
            {rawdata.map((rawdata) => (
              <tr>
                {columns.map((col) =>
                  col.bodyStyle ? (
                    <td
                      className={
                        `${col.size} ${col.bodyStyle}` +
                        " border hover:bg-gray-100 p-3"
                      }
                    >
                      {rawdata[`${col.label.toLowerCase()}`]}
                    </td>
                  ) : (
                    <td
                      className={
                        `${col.size}` + " border hover:bg-gray-100 p-3"
                      }
                    >
                      {rawdata[`${col.label.toLowerCase()}`]}
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
