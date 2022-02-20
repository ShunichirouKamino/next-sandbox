/**
 * 対局一回に対する結果です.
 */
export type ResultType = {
  member: string;
  result: number;
};

/**
 * 対局複数回に対する個人の各順位取得回数です.
 */
export type MembersRankType = {
  member: string;
  first: number;
  second: number;
  third: number;
  fourth: number;
};

/**
 * 複数局におけるそれぞれの順位の回数を返却します.
 *
 * @param member 対象参加者
 * @param members 参加者の一覧
 * @param results 一局の結果
 * @returns {@link MembersRankType}
 */
export const getRankTimes = (
  member: string,
  members: string[],
  results: number[][]
): MembersRankType => {
  const sortedResults = sortResult(results, members);
  const rankList = sortedResults.map((sortedResult) => {
    return sortedResult.findIndex((result) => result.member === member);
  });
  return {
    member: member,
    first: rankList.filter((r) => r === 0).length,
    second: rankList.filter((r) => r === 1).length,
    third: rankList.filter((r) => r === 2).length,
    fourth: rankList.filter((r) => r === 3).length,
  };
};

/**
 * 一局における1人の順位を返却します.
 *
 * @param member 対象参加者
 * @param members 参加者の一覧
 * @param results 一局の結果
 * @returns 順位もしくは4を超える場合はundefined
 */
export const getRank = (
  member: string,
  members: string[],
  results: number[]
): number | undefined => {
  const sorted = sortResult([results], members);
  const rank = sorted[0].findIndex((l) => l.member === member);
  return rank <= 4 ? rank : undefined;
};

/**
 * 順位に応じてソートを行います。
 */
export const sortResult = (
  results: number[][],
  members: string[]
): ResultType[][] => {
  const resultGrantedMembers = results.map((row) => {
    return members.map((m, index) => {
      return { member: m, result: row[index] } as ResultType;
    });
  });

  return resultGrantedMembers.map((row) => {
    return row.sort(sortByResult);
  });
};

const sortByResult = (a: ResultType, b: ResultType) => {
  return a.result < b.result ? 1 : -1;
};
