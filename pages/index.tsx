import type { InferGetStaticPropsType, NextPage } from "next";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import { SWRConfig } from "swr";
import { SWRDevTools } from "swr-devtools";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import { BlurhashCanvas } from "react-blurhash";
import { useSetRecoilState } from "recoil";
import { imgState } from "../atoms";
import { useEffect } from "react";

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  img,
  blurhash,
}) => {
  const setImgsrc = useSetRecoilState(imgState);
  useEffect(() => {
    if (img) {
      setImgsrc(img);
    }
  }, [img, setImgsrc]);
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
  const { blurhash, img } = await getPlaiceholder(
    "https://i.annihil.us/u/prod/marvel/i/mg/e/30/635931932c976/landscape_medium.jpg"
  );

  return {
    props: {
      img,
      blurhash,
    },
  };
};

export default Home;
