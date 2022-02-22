import { useState } from "react";
import { MemberRankType, RankSet } from "../../types/result";
import SelectBox from "../SelectBox";
import SimpleText from "../SimpleText";
import Table, { Column, RowDataType } from "../Table";

export type AnalysisPageProps = {
  memberRankType: MemberRankType[];
};

const getTimes = (rankSet: RankSet): number => {
  return rankSet.first + rankSet.second + rankSet.third + rankSet.fourth;
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
  const times = getTimes(rankSet);

  const [toRankSet, setRankSet] = useState(rankSet);
  const [toRankPercentSet, setRankPercentSet] = useState(rankPercentSet);
  const [toMember, setMember] = useState(member);
  const [toTimes, setTimes] = useState(times);

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
    setTimes(getTimes(rankSet));
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
      <div className="flex flex-wrap w-auto">
        <div className="flex w-1/2">
          <section className="w-1/2">
            <SimpleText
              text={"Member: " + toMember}
              align="text-left"
              style="font-bold"
              size="text-2xl"
            ></SimpleText>
          </section>
          <section className="w-1/2">
            <SimpleText
              text={"Times: " + toTimes}
              align="text-left"
              style="font-bold"
              size="text-2xl"
            ></SimpleText>
          </section>
        </div>
      </div>
      <div className="flex flex-wrap w-auto">
        <section className="w-2/3">
          <Table
            columns={columns}
            rowdata={[rankRowdata, rankPercentRowdata]}
          ></Table>
        </section>
        <section className="w-1/3">
          <Table
            columns={columns}
            rowdata={[rankRowdata, rankPercentRowdata]}
          ></Table>
        </section>
      </div>
    </>
  );
};

export default AnalysisPage;
