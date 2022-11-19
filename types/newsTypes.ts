import { Timetype } from "../utils/getTime";

export type ScrapeType = {
  ok: boolean;
  err?: unknown;
  data?: DataType;
  time?: Timetype;
};

export type DataType = {
  title: string | undefined | null;
  href: string | null | undefined;
  id: number;
  imgSrc?: string | null | undefined;
}[];
