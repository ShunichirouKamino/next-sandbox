import { atom } from "recoil";

// Match Result
export const resultState = atom({
  key: "mutchResult",
  default: [["", "", "", "", "", ""]] as string[][],
});

// Match Label
export const matchState = atom({
  key: "label",
  default: {
    label: "example match",
    date: new Date(),
  },
});

// Participant
// 初期設定値は必ずdeplicateとなるようにする
export const memberState = atom({
  key: "member",
  default: ["A", "A", "A", "A", "A", "A"],
});
