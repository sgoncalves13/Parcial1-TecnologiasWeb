import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js"
import Perfil from './Perfil.js';
import Imgdetail from './Imgdetail.js';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Detalle" element={<Imgdetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
