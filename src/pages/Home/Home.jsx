import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import BtnInfo from '../components/BtnInfo';
import BtnForm from '../components/BtnForm';

const Home = () => {
  return (
    <>
      <title>Loja de Eletrônicos</title>

      <h1 id="topo">Tech Shop</h1>

      <div id="box">
        <Link id="btn" to="/vitrine">
          <img src="../IMG/Produtos.png" style={{ width: "100%" , height: "100%"}} alt="Produtos"/>
        </Link> 
      </div>

      <BtnForm />
      <BtnInfo />
    </>
  );
};

export default Home;
