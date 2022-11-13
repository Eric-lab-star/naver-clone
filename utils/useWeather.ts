import useSWR from "swr";

function useWeather({ lat, long }: { lat: number; long: number }) {
  const { data, error } = useSWR(`/api/weather`);
  return { data };
}
