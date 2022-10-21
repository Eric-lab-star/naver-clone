import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <div>
      <SearchBar />
      <Navbar />
      <Contents />
      <Footer />
    </div>
  );
};

export default Home;
