export type Timetype = {
  [key: string]: number;
};

export function getTime(): Timetype {
  const now = Date.now();
  const currentDate = new Date(now);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const hours = currentDate.getHours();
  const min = currentDate.getMinutes();
  return { year, month, date, hours, min };
}
