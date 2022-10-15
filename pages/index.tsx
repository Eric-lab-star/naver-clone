import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <div>
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Home;
