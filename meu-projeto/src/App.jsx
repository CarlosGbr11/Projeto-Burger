import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./pages/Navbar";
import Section from "./pages/Section";
import Cardapio from "./pages/Cardapio";
import Promocoes from "./pages/Promocoes"
import Sobre from "./pages/Sobre"
import Sobremesa from "./pages/Sobremesa"
import Bebida from "./pages/Bebida"
import Acompanhamento from "./pages/Acompanhamento"
import "./styles.css";



function App() {
  return (
    <Router>
    <div>
      <Navbar />
       <Routes>
        <Route path="/section" element={<Section/>}/>
        <Route path="/cardapio" element={<Cardapio/>}/>
        <Route path="/promocoes" element={<Promocoes/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
    </div>
    <div>
       <Routes>
        <Route path="/sobremesa" element={<Sobremesa/>}/>
        <Route path="/bebida" element={<Bebida/>}/>
        <Route path="/acompanhamento" element={<Acompanhamento/>}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
