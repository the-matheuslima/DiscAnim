import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/index';
import Detalins from './Pages/Detalins/index';
import DetalinsAnin from './Pages/DetalinsAni/index';
import Characters from './Pages/Characters/index';

import Navbar from "./Layout/Navbar/index";
import Search from "./components/Search/index";
import AppProvider from './AppContext/Providers';
import Footer from "./Layout/Footer/index";

function App() {
  return (
    <Router>
      <Navbar />
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Search />} />
          <Route path="/detalins/" element={<Detalins />} />
          <Route path="/detalins/:id/" element={<DetalinsAnin />} />
          <Route path='/detalins/:id/characters' element={<Characters />} />
        </Routes>
      </AppProvider>
      <Footer />
    </Router>
  )
}

export default App
