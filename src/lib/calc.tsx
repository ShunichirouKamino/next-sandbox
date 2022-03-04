import { Filter } from "@ubie/ubie-icons";
import { RankPercentSet, RankSet, EachResultType } from "../types/result";

/**
 * 複数局におけるそれぞれの順位の割合を返却します.
 *
 * @param name 対象参加者
 * @param members 参加者の一覧
 * @param results 複数対戦の結果
 * @returns {@link RankPersentSet}
 */
export const getRankPercent = async (
  name: string,
  members: string[],
  results: number[][]
): Promise<RankPercentSet> => {
  const rankTimes = await getRankTimes(name, members, results);
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
export const getRankTimes = async (
  name: string,
  members: string[],
  results: number[][]
): Promise<RankSet> => {
  const sortedResults = sortResult(results, members);
  const rankList = (await sortedResults).map((sortedResult) => {
    return sortedResult.findIndex((result) => result.name === name);
  });
  return {
    first: rankList.filter((r) => r === 1).length,
    second: rankList.filter((r) => r === 2).length,
    third: rankList.filter((r) => r === 3).length,
    fourth: rankList.filter((r) => r === 4).length,
  };
};

/**
 * 一局における1人の順位を返却します.
 * 返却値は1～4もしくはundefinedのPromiseです.
 *
 * @param name 対象参加者
 * @param members 参加者の一覧
 * @param results 一局の結果
 * @returns 通常は順位、4を超える場合やscoreが無いmemberの場合はundefined
 */
export const getRank = async (
  name: string,
  members: string[],
  results: number[]
): Promise<number | undefined> => {
  // 値が無い場合はrank付与対象外
  if (results[members.findIndex((m) => m === name)] === undefined) {
    return undefined;
  }
  const sorted = (await sortResult([results], members))[0];
  const rank = sorted.findIndex((l) => l.name === name) + 1;

  console.log("rank" + rank + "name" + name);

  return rank <= 4 ? rank : undefined;
};

/**
 * 順位に応じてソートを行います。
 */
export const sortResult = async (
  results: number[][],
  members: string[]
): Promise<EachResultType[][]> => {
  const resultMaintainer = async () => {
    return results.map((result) => {
      return result.map((score) => {
        return score === undefined ? -999 : score;
      });
    });
  };
  const thisResults = await resultMaintainer();
  const resultGrantedMembers = thisResults.map((row) => {
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
