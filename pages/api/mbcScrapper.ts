import fs from "node:fs";
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "node:path";
import { getTime, Timetype } from "../../utils/getTime";

export type MBCDataType = {
  title: string | undefined;
  href: string | null;
  id: number;
  imgSrc?: string | null | undefined;
}[];

export interface IMBC {
  ok: boolean;
  err?: unknown;
  data?: MBCDataType;
  time?: Timetype;
}

export default async function scrapper(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const time = getTime();

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "https://imnews.imbc.com/pc_main.html";
  await page.goto(url);

  const topNeswSelector =
    "#content > section:nth-child(6) > div > div.cont_left.news_rank > div.list_hori a";
  await page.waitForSelector(topNeswSelector);

  const links = await page.evaluate((topNeswSelector) => {
    return [...document.querySelectorAll(topNeswSelector)].map(
      (anchor, index) => {
        const href = anchor.getAttribute("href");
        const title = anchor.querySelector("span.title")?.innerHTML;
        if (index === 0) {
          const img = anchor.querySelector("span.img > img");
          const imgSrc = img?.getAttribute("src");
          return { id: index + 1, title, href, imgSrc: `https:${imgSrc}` };
        }
        return { id: index + 1, title, href };
      }
    );
  }, topNeswSelector);
  let result: IMBC;
  const cwd = process.cwd();
  const filePath = path.join(cwd, "FakeDB", "mbcTop.json");
  try {
    console.log("writing file");
    fs.writeFileSync(filePath, JSON.stringify(links));
    result = { ok: true, data: links, time };
  } catch (err) {
    result = { ok: false, err };
  }
  await browser.close();
  return res.status(200).json(result);
}
