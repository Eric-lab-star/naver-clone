import useSWR from "swr";

export default function useIcon(code: string | undefined) {
  const { data, error } = useSWR(
    `http://openweathermap.org/img/wn/${code}@2x.png`
  );
  return { icon: data, isError: error, isLoading: !error && !data };
}
