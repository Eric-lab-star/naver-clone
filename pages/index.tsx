import type { InferGetStaticPropsType, NextPage } from "next";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import { SWRConfig } from "swr";
import { SWRDevTools } from "swr-devtools";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import { useSetRecoilState } from "recoil";
import { imgState } from "../atoms";
import { useEffect } from "react";
import md5 from "md5";

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  imageProps,
}) => {
  const setImgsrc = useSetRecoilState(imgState);
  useEffect(() => {
    if (imageProps) {
      setImgsrc(imageProps);
    }
  }, [imageProps, setImgsrc]);
  return (
    <SWRDevTools>
      <SWRConfig
        value={{
          fallback: {
            "/api/product": [1, 2, 3],
          },
          revalidateOnFocus: false,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <div>
          <Head>
            <title>Naver Clone</title>
          </Head>

          <SearchBar />
          <Navbar />
          <Contents />
          <Footer />
        </div>
      </SWRConfig>
    </SWRDevTools>
  );
};

export const getStaticProps = async () => {
  const publicKey = process.env.MARVEL + "";
  const privateKey = process.env.MARVEL_PRIV + "";
  const ts = 2;
  const hash = md5(ts + privateKey + publicKey);
  const baseURL = "http://gateway.marvel.com/v1/public";
  const config = {
    limit: 10,
    orderBy: "onsaleDate",
    formatType: "comic",
    dateDescriptor: "lastWeek",
  };
  let option = "";
  for (const [property, key] of Object.entries(config)) {
    option = option + `&${property}=${key}`;
  }
  const param = decodeURIComponent(option);

  const response = await fetch(
    `${baseURL}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}${param}`
  );

  const data = await response.json();

  const { base64, img } = await getPlaiceholder(
    "https://i.annihil.us/u/prod/marvel/i/mg/e/30/635931932c976/landscape_medium.jpg"
  );

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    },
  };
};

export default Home;
