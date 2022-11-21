import fs from "node:fs";
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import path from "node:path";
import { getTime } from "../../utils/getTime";
import { ScrapeType } from "../../types/newsTypes";

export default async function scrapper(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const time = getTime();

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url =
    "https://news.jtbc.co.kr/ranking/ranking_news.aspx?jt=NV&sc=00&sd=4";
  await page.goto(url);

  const topNewsSelector =
    "#form1 > div.news_main > div > div.bd > div > ol > li > div.rt_wrapper > div.rt > h5 > a";
  await page.waitForSelector(topNewsSelector);

  const links = await page.evaluate((topNewsSelector) => {
    return [...document.querySelectorAll(topNewsSelector)]
      .slice(1, 7)
      .map((anchor, index) => {
        const href = anchor.getAttribute("href");
        const title = anchor.innerHTML;
        return { id: index + 1, title, href };
      });
  }, topNewsSelector);

  const headNewsSelector =
    "#form1 > div.news_main > div > div.bd > div > ol > li.list_01 > div > div.img > a";

  await page.waitForSelector(headNewsSelector);

  const headLink = await page.evaluate((headNewsSelector) => {
    const anchor = document.querySelector(headNewsSelector);
    const href = anchor?.getAttribute("href");
    const img = anchor?.querySelector("img");
    const imgSrc = img?.getAttribute("src")?.replace(/(.tn150.jpg)$/g, "");
    const title = img?.getAttribute("alt");
    return {
      title,
      imgSrc,
      href,
      id: 0,
    };
  }, headNewsSelector);

  let result: ScrapeType;
  const cwd = process.cwd();
  const filePath = path.join(cwd, "FakeDB", "JTBCTop.json");

  try {
    fs.writeFileSync(
      filePath,
      JSON.stringify({ data: [headLink, ...links], time })
    );
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
