import { NextApiRequest, NextApiResponse } from "next";

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("running");
  const response = await fetch("http://localhost:3000/api/ytScraper");
  console.log("response", response);

  return res.status(200).json({ ok: true });
}
