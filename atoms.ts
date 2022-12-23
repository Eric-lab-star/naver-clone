import { atom } from "recoil";

export const imgState = atom<{
  src: string;
  height: number;
  type?: string;
  width: number;
  blurDataURL: string;
}>({
  key: "imgState",
  default: { src: "", height: 0, width: 0, blurDataURL: "" },
});

export const newComicState = atom<number>({
  key: "newComicState",
  default: 0,
});
export const comicState = atom<number>({
  key: "comicState",
  default: 0,
});
