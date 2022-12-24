import { atom } from "recoil";

export const newComicState = atom<number>({
  key: "newComicState",
  default: 0,
});
export const comicState = atom<number>({
  key: "comicState",
  default: 0,
});
