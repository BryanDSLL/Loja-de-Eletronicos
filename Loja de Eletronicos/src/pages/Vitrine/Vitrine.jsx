import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import BtnInfo from '../components/BtnInfo';
import BtnForm from '../components/BtnForm';

const Vitrine = () => {
  const [cards, setCards] = useState([]);

  // Buscar da API
  const fetchItems = async () => {
    try {
      const response = await fetch('https://63069afec0d0f2b8011f9944.mockapi.io/produtos');
      if (response.ok) {
        const data = await response.json();
        
        // Filtra os produtos da loja
        const filteredData = data.filter(item => item.loja === "TechShop");
        setCards(filteredData);
      } else {
        console.error('Erro ao buscar os dados da API');
      }
    } catch (error) {
      console.error('Erro ao enviar a requisição', error);
    }
  };

  // Buscar os dados da API
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <PageHeader></PageHeader>

      <div className="container">
        <div className="columns is-multiline">
           {cards.map((item) => (
             <Card
               key={item.id}
               id={item.id}
               descProd={item.descProd}
               logoFab={item.logoFab}
               fotoProd={item.fotoProd}
               preco={item.precoProd}
               estoque={item.estoque}
             />
           ))}
       </div>
      </div> 

      <BtnForm></BtnForm>
      <BtnInfo></BtnInfo>
    </>
  )
};

export default Vitrine;
