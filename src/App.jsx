import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/index";
import Detalins from "./Pages/Detalins/index";
import DetalinsAnin from "./Pages/DetalinsAni/index";
import Characters from "./Pages/Characters/index";

import Navbar from "./Layout/Navbar/index";
import Search from "./Pages/Search/index";
import AppProvider from "./AppContext/Providers";
import Footer from "./Layout/Footer/index";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Search />} />
          <Route path="/detalins/" element={<Detalins />} />
          <Route path="/detalins/:id/" forceRefresh={true} element={<DetalinsAnin />} />
          <Route path="/detalins/:id/characters" element={<Characters />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
