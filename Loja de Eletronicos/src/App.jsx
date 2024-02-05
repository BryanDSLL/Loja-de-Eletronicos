import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './pages/Home/Home';
import Vitrine from './pages/Vitrine/Vitrine';
import Detalhe from './pages/Detalhe/Detalhe';
import Sobre from './pages/Sobre/Sobre';
import Formulario from './pages/Formulario/Formulario';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Loja-de-Eletronicos" element={<Home />} />
        <Route path="/vitrine" element={<Vitrine />} />
        <Route path="/detalhe/:id" element={<Detalhe />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
