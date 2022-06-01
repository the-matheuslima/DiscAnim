import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home'
import Detalins from './components/Pages/Detalins'
import Navbar from "./components/Layout/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Search />} />
        <Route path="/detalins/:id" element={<Detalins />} />
      </Routes>
    </Router>
  )
}

export default App
