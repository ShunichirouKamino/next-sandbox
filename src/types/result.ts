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
export type MemberRankType = {
    member: string;
    rankSet: RankSet;
};

/**
 * 複数対局に対する
 */
export type RankSet = {
    first: number;
    second: number;
    third: number;
    fourth: number;
};

export type RankPersentSet = {
    first: number;
    second: number;
    third: number;
    fourth: number;
};