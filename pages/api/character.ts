import { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";

export interface IMarvelComic {
  results: {
    id: number;
    title: string;
    description?: string;
    thumbnail?: string;
  }[];
}

export default async function characterAPI(
  req: NextApiRequest,
  res: NextApiResponse<IMarvelComic>
) {
  const publicKey = process.env.MARVEL + "";
  const privateKey = process.env.MARVEL_PRIV + "";
  const ts = 2;
  const hash = md5(ts + privateKey + publicKey);
  const baseURL = "http://gateway.marvel.com/v1/public";
  const config = {
    limit: 10,
    orderBy: "name",
  };
  let option = "";
  for (const [property, key] of Object.entries(config)) {
    option = option + `&${property}=${key}`;
  }
  const param = decodeURIComponent(option);

  const response = await fetch(
    `${baseURL}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}${param}`
  );

  const data = await response.json();

  return res.status(200).json(data);
}
