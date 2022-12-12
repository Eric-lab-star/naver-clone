const MyLoader = ({
  src,
  width,
  quality,
}: {
  [key: string]: string | number;
}) => {
  return `https://i.imgur.com/${src}?w=${width}&q=${quality}`;
};

export default MyLoader;
