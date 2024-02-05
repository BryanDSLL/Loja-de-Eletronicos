// PageHeader.js
import React from 'react';

const PageHeader = () => {
  return (

    <div className="backhome">
      <nav className="nav has-background-white is-fixed-top">
        <div id="empresa" className="nav-left"> 
          <a className="nav-item" href="/">
            <h1 className="topo">Tech Shop</h1>
          </a>
        </div>


        <div id="backlink" className="nav-right nav-menu"> 
          <a className="nav-item" href="/">
            Voltar para a página anterior
          </a>
        </div>
      </nav>
    </div>

  );
};

export default PageHeader;
