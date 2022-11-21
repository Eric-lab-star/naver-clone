import { NextApiRequest, NextApiResponse } from "next";

export default async function ytScraper(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const configOption = {
    part: encodeURIComponent(
      ["snippet", "contentDetails", "statistics"].join(",")
    ),
    chart: "mostPopular",
    regionCode: "KR",
    key: process.env.YT_KEY,
  };
  const baseURL = "https://youtube.googleapis.com/youtube/v3/videos";
  let option = "";
  for (const [key, value] of Object.entries(configOption)) {
    if (option === "") {
      option += `${key}=${value}`;
    } else {
      option += `&${key}=${value}`;
    }
  }
  const result = await fetch(`${baseURL}?${option}`);
  const json = await result.json();
  return res.json(json);
}
