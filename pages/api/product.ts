import { NextApiRequest, NextApiResponse } from "next";

export default function Product(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json([1, 2, 3, 4]);
}
