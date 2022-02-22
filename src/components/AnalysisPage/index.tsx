import { useState } from "react";
import { MemberRankType } from "../../types/result";
import SelectBox from "../SelectBox";
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
  const { rankSet } = memberRankType[0];
  const { member } = memberRankType[0];
  const members = memberRankType.map((m) => {
    return m.member;
  });

  const [toRowdata, setRowdata] = useState(rankSet);
  const [toMember, setMember] = useState(member);

  const initRowdata: RowDataType[] = columns.map((c) => {
    return {
      label: String(c.label),
      data: String(toRowdata[c.label]),
    };
  });

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (c) => {
    const member = c.target.value;
    const { rankSet } = memberRankType.find((m) => m.member === member);
    setMember(member);
    setRowdata(rankSet);
  };

  return (
    <>
      <SelectBox elements={members} handleChange={handleChange}></SelectBox>
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
