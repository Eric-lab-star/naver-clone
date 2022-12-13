import type { InferGetServerSidePropsType, NextPage } from "next";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import { SWRConfig } from "swr";
import { SWRDevTools } from "swr-devtools";
import Head from "next/head";

const Home: NextPage<{ product: number[] }> = ({ product }) => {
  console.log(product);
  return (
    <SWRDevTools>
      <SWRConfig
        value={{
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

export const getServerSideProps = () => {
  return {
    props: {
      product: [1, 2, 3, 4],
    },
  };
};

export default Home;
