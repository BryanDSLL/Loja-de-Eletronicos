import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const Card = ({ id, descProd, logoFab, fotoProd, preco, estoque }) => {
  return (
    <div className="column is-3">
      <div className="card">
        <Link to={`/detalhe/${id}`}>
          <div className="card-image">
            <figure className="image is-100x100">
              <img src={fotoProd} alt="Product" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={logoFab} alt="Logo" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-5">{descProd}</p>
                <p className="subtitle is-7">{preco}</p>
              </div>
            </div>
            <div className="content">
              <small>Estoque disponível: {estoque}</small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
