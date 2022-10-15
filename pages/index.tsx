import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
const Home: NextPage = () => {
  return (
    <div>
      <SearchBar />
      <Navbar />
      <Contents />
    </div>
  );
};

export default Home;
