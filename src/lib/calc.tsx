import { RankPercentSet, RankSet, EachResultType } from "../types/result";

/**
 * 複数局におけるそれぞれの順位の割合を返却します.
 *
 * @param name 対象参加者
 * @param members 参加者の一覧
 * @param results 複数対戦の結果
 * @returns {@link RankPersentSet}
 */
export const getRankPercent = (
  name: string,
  members: string[],
  results: number[][]
): RankPercentSet => {
  const rankTimes = getRankTimes(name, members, results);
  const resultLength =
    rankTimes.first + rankTimes.second + rankTimes.third + rankTimes.fourth;
  return {
    first: Math.round((rankTimes.first / resultLength) * 1000) / 10,
    second: Math.round((rankTimes.second / resultLength) * 1000) / 10,
    third: Math.round((rankTimes.third / resultLength) * 1000) / 10,
    fourth: Math.round((rankTimes.fourth / resultLength) * 1000) / 10,
  };
};

/**
 * 複数局におけるそれぞれの順位の回数を返却します.
 *
 * @param name 対象参加者
 * @param members 参加者の一覧
 * @param results 複数対戦の結果
 * @returns {@link RankSet}
 */
export const getRankTimes = (
  name: string,
  members: string[],
  results: number[][]
): RankSet => {
  const sortedResults = sortResult(results, members);
  const rankList = sortedResults.map((sortedResult) => {
    return sortedResult.findIndex((result) => result.name === name);
  });
  return {
    first: rankList.filter((r) => r === 0).length,
    second: rankList.filter((r) => r === 1).length,
    third: rankList.filter((r) => r === 2).length,
    fourth: rankList.filter((r) => r === 3).length,
  };
};

/**
 * 一局における1人の順位を返却します.
 *
 * @param name 対象参加者
 * @param members 参加者の一覧
 * @param results 一局の結果
 * @returns 順位もしくは4を超える場合はundefined
 */
export const getRank = (
  name: string,
  members: string[],
  results: number[]
): number | undefined => {
  const sorted = sortResult([results], members);
  const rank = sorted[0].findIndex((l) => l.name === name);
  return rank <= 4 ? rank : undefined;
};

/**
 * 順位に応じてソートを行います。
 */
export const sortResult = (
  results: number[][],
  members: string[]
): EachResultType[][] => {
  const resultGrantedMembers = results.map((row) => {
    return members.map((m, index) => {
      return { name: m, score: row[index] } as EachResultType;
    });
  });

  return resultGrantedMembers.map((row) => {
    return row.sort(sortByResult);
  });
};

const sortByResult = (a: EachResultType, b: EachResultType) => {
  return a.score < b.score ? 1 : -1;
};
