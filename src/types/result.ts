/**
 * 対局一回に対する個人の結果です.
 */
export type EachResultType = {
    name: string;
    score: number;
};

/**
 * 対局一回に対する結果です.
 */
export type ResultType = {
    date: string;
    label: string;
    each: EachResultType[];
};


/**
 * 対局複数回に対する個人の各順位取得回数です.
 */
export type MemberRankType = {
    member: string;
    rankSet: RankSet;
    rankPercentSet: RankPercentSet;
};

/**
 * 複数対局に対する各順位の回数です。
 */
export type RankSet = {
    first: number;
    second: number;
    third: number;
    fourth: number;
};

/**
 * 複数対局に対する各順位の割合です。
 */
export type RankPercentSet = {
    first: number;
    second: number;
    third: number;
    fourth: number;
};