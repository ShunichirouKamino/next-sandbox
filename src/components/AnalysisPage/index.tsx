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

  // init data
  const { rankSet, rankPercentSet, member } = memberRankType[0];

  const [toRankSet, setRankSet] = useState(rankSet);
  const [toRankPercentSet, setRankPercentSet] = useState(rankPercentSet);
  const [toMember, setMember] = useState(member);

  // for select box
  const members = memberRankType.map((m) => {
    return m.member;
  });

  // handle select box changing
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (c) => {
    const member = c.target.value;
    const { rankSet, rankPercentSet } = memberRankType.find(
      (m) => m.member === member
    );
    setMember(member);
    setRankSet(rankSet);
    setRankPercentSet(rankPercentSet);
  };

  // convert for table layout
  const rankRowdata: RowDataType[] = columns.map((c) => {
    return {
      label: String(c.label),
      data: String(toRankSet[c.label] + " times"),
    };
  });

  // convert for table layout
  const rankPercentRowdata: RowDataType[] = columns.map((c) => {
    return {
      label: String(c.label),
      data: String(toRankPercentSet[c.label] + " %"),
    };
  });

  return (
    <>
      <SelectBox elements={members} handleChange={handleChange}></SelectBox>
      <SimpleText
        text={"Analysis: " + toMember}
        align="text-left"
        style="font-bold"
        size="text-2xl"
      ></SimpleText>
      <section className="frex">
        <Table
          columns={columns}
          rowdata={[rankRowdata, rankPercentRowdata]}
        ></Table>
      </section>
    </>
  );
};

export default AnalysisPage;
