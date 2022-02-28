import { atom } from "recoil";

// Match Result
export const resultState = atom({
  key: "mutchResult",
  default: [[0, 0, 0, 0]],
});

// Match Label
export const labelState = atom({
  key: "label",
  default: {
    date: "2000-01-01",
    label: "example match",
  },
});

// Participant
export const memberState = atom({
  key: "member",
  default: ["A", "B", "C", "D"],
});
