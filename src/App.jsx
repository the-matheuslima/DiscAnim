import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/";
import Catalog from "./pages/catalog";
import MoreInfo from "./pages/more-info";
import Characters from "./pages/characters/";

import Navbar from "./components/navbar";
import Search from "./pages/Search/index";
import Footer from "./components/footer/";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Search />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/catalog/:id/" element={<MoreInfo />} />
          <Route path="/catalog/:id/characters" element={<Characters />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
