import { useState } from "react";
import { MemberRankType } from "../../lib/calc";
import SimpleText from "../SimpleText";
import Table, { Column, RowDataType } from "../Table";

export type AnalysisPageProps = {
  memberRankType: MemberRankType[];
};

const AnalysisPage: React.FC<AnalysisPageProps> = ({ memberRankType }) => {
  const size = "w-1/4";
  const columns: Column[] = [
    { label: "first", size: size },
    { label: "second", size: size },
    { label: "third", size: size },
    { label: "fourth", size: size },
  ];
  const { first, second, third, fourth } = memberRankType[0];
  const { member } = memberRankType[0];

  const initRowData = [first, second, third, fourth];
  const [toRowdata, setRowdata] = useState(initRowData);
  const [toMember, setMember] = useState(member);

  const initRowdata: RowDataType[] = columns.map((c, index) => {
    return {
      label: String(c.label),
      data: String(toRowdata[index]),
    };
  });

  console.log(initRowdata);

  return (
    <>
      <SimpleText
        text={toMember}
        align="text-left"
        style="font-bold"
        size="text-2xl"
      ></SimpleText>
      <section className="frex">
        <Table columns={columns} rowdata={[initRowdata]}></Table>
      </section>
    </>
  );
};

export default AnalysisPage;
