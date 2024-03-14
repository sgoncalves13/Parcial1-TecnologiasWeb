import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js"
import Perfil from './Perfil.js';
import Imgdatil from './imgdetali.js';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Detallle" element={<Imgdatil />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
