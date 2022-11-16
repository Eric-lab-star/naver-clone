import { setCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { IReverseGeo } from "../pages/api/reverseGeo";
import { IWeatherData } from "../pages/api/weather";

export default function WeatherBanner() {
  const [counter, setCounter] = useState(0);
  const [coordObj, setPosition] = useState<{
    lat: number;
    long: number;
  }>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev += 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const geo = window.navigator.geolocation;
    geo.getCurrentPosition((pos) => {
      setPosition({ lat: pos.coords.latitude, long: pos.coords.longitude });
      setCookie("coords", {
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  }, []);

  const { data: weatherData, error } = useSWR<IWeatherData>(
    coordObj ? [`/api/weather/`, coordObj] : null
  );
  const { data: location } = useSWR<IReverseGeo>(
    coordObj ? [`/api/reverseGeo/`, coordObj] : null
  );

  return (
    <div>
      {counter % 2 === 1 && (
        <div className="flex text-[15px] text-slate-800 items-center font-semibold space-x-2">
          <div>
            <span className="mr-1 text-xs">습도</span>
            <span className="text-slate-700 font-bold">
              {weatherData?.main.humidity || "--"}
            </span>
            <span className="text-[11px]">&#37;</span>
          </div>
          <div>
            <span className="mr-1 text-xs">풍속</span>
            <span className="font-bold text-slate-700">
              {weatherData?.wind.speed || "--"}
            </span>
            <span className="text-[11px]">m/s</span>
          </div>
          <div>
            <span className="mr-1 text-xs">체감</span>
            <span className="font-bold text-slate-700">
              {weatherData?.main.feels_like || "--"}
            </span>
            <span className="text-[11px]">&#8451;</span>
          </div>
        </div>
      )}
      {counter % 2 === 0 && (
        <div className="flex text-[15px] text-slate-800 items-center font-semibold space-x-1">
          <div className="w-10 h-10 relative left-2">
            {weatherData?.weather[0]?.icon && (
              <Image
                src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                alt="icon"
                layout="fill"
              />
            )}
          </div>
          <div>
            <span>{weatherData?.main?.temp || "--"}</span>
            <span className="text-xs">&#8451;</span>
          </div>
          <div className="text-[12px] font-bold">
            {weatherData?.weather[0]?.description}
          </div>
          <div className="text-[12px] font-bold">
            {location?.results[1].address_components[1].long_name}
          </div>
        </div>
      )}
    </div>
  );
}
