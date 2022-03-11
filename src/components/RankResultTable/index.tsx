import { useState } from "react";
import { MemberRankType, RankPercentSet, RankSet } from "../../types/result";
import SelectBox from "../Atom/SelectBox";
import SimpleText from "../Atom/SimpleText";
import Table, { Column, RowDataType } from "../Table";

export type RankResultTableProps = {
  memberRankType: MemberRankType[];
};

const getTimes = (rankSet: RankSet): number => {
  return rankSet.first + rankSet.second + rankSet.third + rankSet.fourth;
};

const getWinPer = (rankPersentSet: RankPercentSet): number => {
  return (
    Math.round(
      (Number(rankPersentSet.first) + Number(rankPersentSet.second)) * 10
    ) / 10
  );
};

/**
 * 個人の戦績を表示するコンポーネントです.
 *
 * @param param0
 * @returns
 */
const RankResultTable: React.FC<RankResultTableProps> = ({
  memberRankType,
}) => {
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
      <div className="w-1/2 p-4">
        <SelectBox elements={members} handleChange={handleChange}></SelectBox>
      </div>
      <div className="flex flex-wrap w-auto">
        <div className="flex w-2/3">
          <section className="w-1/3">
            <SimpleText
              text={"Member : " + toMember}
              align="text-left"
              style="font-bold"
              size="text-2xl"
            ></SimpleText>
          </section>
          <section className="w-1/3">
            <SimpleText
              text={"Times : " + toTimes}
              align="text-left"
              style="font-bold"
              size="text-2xl"
            ></SimpleText>
          </section>
          <section className="w-1/3">
            <SimpleText
              text={"WinPer : " + getWinPer(toRankPercentSet) + "%"}
              align="text-left"
              style="font-bold"
              size="text-2xl"
            ></SimpleText>
          </section>
        </div>
      </div>
      <div className="w-auto">
        <Table
          columns={columns}
          rowdata={[rankRowdata, rankPercentRowdata]}
        ></Table>
      </div>
    </>
  );
};

export default RankResultTable;
