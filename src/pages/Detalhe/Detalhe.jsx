import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import BtnInfo from '../components/BtnInfo';

const Detalhe = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  // Função para buscar os detalhes do produto
  const fetchProduto = async () => {
    try {
      const response = await fetch(`https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduto(data);
      } else {
        console.error('Erro ao buscar os detalhes do produto da API');
      }
    } catch (error) {
      console.error('Erro ao enviar a requisição', error);
    }
  };

  // Ao carregar o componente, busca os detalhes do produto
  useEffect(() => {
    fetchProduto();
  }, [id]);

  if (!produto) {
    return null; // Ou uma mensagem de carregando, dependendo da sua preferência
  }

  return (
    <>
      <nav className="nav" style={{ height: "80px" }}>
        <div id="empresa" className="nav-left">
          <Link className="nav-item" to="/">
            <h1 className="topo">Tech Shop</h1>
          </Link>
        </div>

        <div id="backlink" className="nav-right nav-menu">
          <Link className="nav-item" to="/vitrine">
            Voltar para a página anterior
          </Link>
        </div>
      </nav>
      <main>
        <div className="content">
          <div className="left-side">
            <h1 style={{ color: "white" }}>{produto.descProd}</h1>
            <p>{produto.detalhes}</p>
            <span>{produto.precoProd}</span>
            <button onClick={() => alert('Produto adicionado ao carrinho com sucesso!')} className='btnAddCarrinho'>
              Adicionar ao carrinho
            </button>
          </div>

          <div className="right-side">
            <img id="imagem" src={produto.fotoProd} alt="Product" />
          </div>
        </div>
      </main>
      <BtnInfo></BtnInfo>
    </>
  );
};

export default Detalhe;
