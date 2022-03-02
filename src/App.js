import React from "react";

import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Search />
      <Support />
      <Footer />
    </>
  );
}

export default App;
