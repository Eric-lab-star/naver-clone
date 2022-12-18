import { atom } from "recoil";

export const imgState = atom<{
  src: string;
  height: number;
  type?: string;
  width: number;
}>({
  key: "imgState",
  default: { src: "", height: 0, type: "jpg", width: 0 },
});
