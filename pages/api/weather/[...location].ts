import { NextApiRequest, NextApiResponse } from "next";

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=36&lon=127&appid=d5ad214b1b044e97ed9389e018c98f45&units=metric&lang=kr"
  );
  const json: IWeatherData = await response.json();
  return res.status(200).json({ data: json });
}
