export type resultListType = {
  members: string[];
  results: number[];
};

export type resultType = {
  member: string;
  result: number;
};

/**
 * result
 */
export const getRankTimes = (
  results: number[][],
  members: string[],
  rank: number
) => {
  console.log("here");
  const resultGrantedMembers = results.map((row) => {
    return members.map((m, index) => {
      return { member: m, result: row[index] } as resultType;
    });
  });

  const sortedResult = resultGrantedMembers.map((row) => {
    return row.sort(sortByResult);
  });

  console.log(sortedResult);
};

export const sortByResult = (a: resultType, b: resultType) => {
  return a.result < b.result ? 1 : -1;
};
