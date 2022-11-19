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
  const url = "https://news.kbs.co.kr/common/main.html";
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

        return { id: index + 1, title, href: `https://news.kbs.co.kr${href}` };
      }
    );
  }, topNewsSelector);

  const headNewsSelector =
    "#content > div.m-section.main-headline.type1 > div > ul:nth-child(2) > li > a";

  await page.waitForSelector(headNewsSelector);

  const headLink = await page.evaluate((headNewsSelector) => {
    const anchor = document.querySelector(headNewsSelector);
    const href = anchor?.getAttribute("href");
    const img = anchor?.querySelector("span.img-center > img");
    const imgSrc = img?.getAttribute("src");
    const title = img?.getAttribute("alt")?.replace(/(<br>)/g, "");
    return {
      title,
      imgSrc: `https://news.kbs.co.kr${imgSrc}`,
      href: `https://news.kbs.co.kr${href}`,
      id: 0,
    };
  }, headNewsSelector);

  let result: ScrapeType;
  const cwd = process.cwd();
  const filePath = path.join(cwd, "FakeDB", "KBSTop.json");

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
