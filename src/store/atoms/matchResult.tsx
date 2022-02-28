import { atom } from "recoil";

// Match Result
export const resultState = atom({
  key: "mutchResult",
  default: [[0, 0, 0, 0]],
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
export const memberState = atom({
  key: "member",
  default: ["A", "B", "C", "D"],
});
