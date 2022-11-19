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

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const url = "https://www.wsj.com/?mod=wsjheader_logo";
  await page.goto(url);

  const topNewsSelector = "#most-popular-articles > ol > li > a";
  await page.waitForSelector(topNewsSelector);

  const links = await page.evaluate((topNewsSelector) => {
    return [...document.querySelectorAll(topNewsSelector)].map(
      (anchor, index) => {
        const href = anchor.getAttribute("href");
        const title = anchor.querySelector(
          "h3.WSJTheme--headline--nQ8J-FfZ "
        )?.innerHTML;

        return { id: index + 1, title, href };
      }
    );
  }, topNewsSelector);

  const headNewsSelector =
    "#most-popular-opinion-articles > ol > li:nth-child(1) > a";
  const imgSelector =
    "#most-popular-opinion-articles > ol > li:nth-child(1) > a > div.WSJTheme--thumb--DOohBjR2 > div.WSJTheme--image-container--3BUONb0N > div > div > div > img";

  console.log("waiting for headerselector");
  await page.waitForSelector(headNewsSelector);
  console.log("waiting for imgselector");
  // await page.waitForSelector(imgSelector);
  const headLink = await page.evaluate(
    ([headNewsSelector, imgSelector]) => {
      const anchor = document.querySelector(headNewsSelector);
      const href = anchor?.getAttribute("href");
      const img = document.querySelector(imgSelector);
      const imgSrc = img?.getAttribute("src");
      const title = anchor?.querySelector(
        "h3.WSJTheme--headline--nQ8J-FfZ"
      )?.innerHTML;
      return {
        title,
        imgSrc,
        href,
        id: 0,
      };
    },
    [headNewsSelector, imgSelector]
  );

  let result: ScrapeType;
  const cwd = process.cwd();
  const filePath = path.join(cwd, "FakeDB", "wsjTop.json");

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
