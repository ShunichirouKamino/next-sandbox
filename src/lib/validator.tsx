/**
 * 3桁以下の数値であることをチェックするバリデータです.
 * @param text 任意の文字列
 * @returns 判定結果
 */
export const numberValidator = (text: string): boolean => {
  return new RegExp("^[+-]?\\d{1,3}$").test(text);
};

/**
 * 3桁以下の数値か空であることを確認するバリデータです.
 * @param text 任意の文字列
 * @returns 判定結果
 */
export const numberOrNullValidator = (text: string): boolean => {
  return new RegExp("^([+-]?\\d{1,3}|)$").test(text);
};
