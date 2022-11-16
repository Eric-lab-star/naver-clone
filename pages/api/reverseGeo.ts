import { NextApiRequest, NextApiResponse } from "next";

export interface IReverseGeo {
  plus_code: {};
  results: {
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
  }[];
  status: boolean;
}

export default async function reverseGeo(
  req: NextApiRequest,
  res: NextApiResponse<IReverseGeo>
) {
  const { coords } = req.cookies;
  const { lat, long } = coords && JSON.parse(coords);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.GGMAP_KEY}&language=ko`
  );
  const data: IReverseGeo = await response.json();
  return res.status(200).json(data);
}
