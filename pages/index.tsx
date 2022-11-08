import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import { SWRConfig } from "swr";

const Home: NextPage = () => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 9000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <div>
        <SearchBar />
        <Navbar />
        <Contents />
        <Footer />
      </div>
    </SWRConfig>
  );
};

export default Home;
