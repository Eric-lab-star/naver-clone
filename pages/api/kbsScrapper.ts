import fs from "node:fs";
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "node:path";
import { getTime, Timetype } from "../../utils/getTime";

export type SBSDataType = {
  title: string | undefined | null;
  href: string | null | undefined;
  id: number;
  imgSrc?: string | null | undefined;
}[];

export interface ISBS {
  ok: boolean;
  err?: unknown;
  data?: SBSDataType;
  time?: Timetype;
}

export default async function scrapper(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const time = getTime();

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url =
    "https://news.sbs.co.kr/news/newsMain.do?plink=GNB&cooper=SBSNEWS";
  await page.goto(url);

  const topNewsSelector =
    "#content > div.m-section.main-col2 > div > div.fr.col-box.col-rank > ol li a";
  await page.waitForSelector(topNewsSelector);

  const links = await page.evaluate((topNewsSelector) => {
    return [...document.querySelectorAll(topNewsSelector)].map(
      (anchor, index) => {
        const href = anchor.getAttribute("href");

        const title = String.raw`${anchor.textContent?.trim()}`
          .replaceAll("\t", "")
          .replaceAll("\n", "");

        return { id: index + 1, title, href: `https://news.sbs.co.kr/${href}` };
      }
    );
  }, topNewsSelector);

  const headNewsSelector =
    "#container > div > div.w_box.w_headline > div.w_head_list > div.head_area > div > div.w_news_list.type_head > ul > li > a";

  await page.waitForSelector(headNewsSelector);

  const headLink = await page.evaluate((headNewsSelector) => {
    const anchor = document.querySelector(headNewsSelector);
    const href = anchor?.getAttribute("href");
    const img = anchor?.querySelector("span.thumb > img");
    const imgSrc = img?.getAttribute("src");
    const title = img?.getAttribute("alt");
    return {
      title,
      imgSrc: `https:${imgSrc}`,
      href: `https://news.sbs.co.kr/${href}`,
      id: 0,
    };
  }, headNewsSelector);

  let result: ISBS;
  const cwd = process.cwd();
  const filePath = path.join(cwd, "FakeDB", "KBSTop.json");

  try {
    console.log("writing file");
    fs.writeFileSync(filePath, JSON.stringify([headLink, ...links]));
    result = {
      ok: true,
      data: [headLink, ...links],
      time,
    };
  } catch (err) {
    result = { ok: false, err };
  }
  await browser.close();
  return res.status(200).json(result);
}
