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
  const url = "https://www.ytn.co.kr/";
  await page.goto(url);

  const topNewsSelector =
    "#nav_content > div.many.YTN_CSA_popularnews > div > ul > li > a";
  await page.waitForSelector(topNewsSelector);

  const links = await page.evaluate((topNewsSelector) => {
    return [...document.querySelectorAll(topNewsSelector)]
      .slice(0, 6)
      .map((anchor, index) => {
        const href = anchor.getAttribute("href");
        const title = anchor.innerHTML;
        return { id: index + 1, title, href };
      });
  }, topNewsSelector);

  const headNewsSelector =
    "#nav_content > div.now > div.now01.YTN_CSA_bottomnews1 > ul:nth-child(1) > li:nth-child(1)";
  await page.waitForSelector(headNewsSelector);
  const headLink = await page.evaluate((headNewsSelector) => {
    const li = document.querySelector(headNewsSelector);
    const anchor = li?.querySelector("div.thumbwrap a");
    const href = anchor?.getAttribute("href");
    const imgSrc = anchor?.querySelector("img")?.getAttribute("src");
    const title = li?.querySelector("span a")?.innerHTML;
    return { href, title, id: 0, imgSrc };
  }, headNewsSelector);

  let result: ScrapeType;
  const cwd = process.cwd();
  const filePath = path.join(cwd, "FakeDB", "YTNTop.json");

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
