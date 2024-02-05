import  React from 'react';

const Form = () => {
  return (

        <div className="form-container">
          <p id="promo">Quer receber notificações de novas promoções? Coloque seus dados aqui!</p>
          <form className="form-form" action="http://localhost:3003/alunos" method="GET">
            <label htmlFor="nome">Informe seu nome:</label>
            <input type="text" name="nome" placeholder="Nome" />
            <label htmlFor="email">Informe seu melhor E-mail:</label>
            <input type="text" name="email" placeholder="E-mail" />
            <label htmlFor="documento">CPF ou CNPJ</label>
            <input type="text" name="documento" />
            <div>
              <p>Sexo:</p>
              <input type="radio" name="tipo" value="fem" /> Feminino
              <input type="radio" name="tipo" value="masc" /> Masculino
            </div>

            <div>
              <label htmlFor="idade">Qual a sua idade?</label>
              <input type="number" name="idade" placeholder="IDADE" />
            </div>
            <div>
              <label htmlFor="estado">Selecione o seu Estado:</label>
              <select name="estado" required>
                <option value=""></option>
                <option value="rj">Rio de Janeiro</option>
                <option value="ba">Bahia</option>
                <option value="ce">Ceará</option>
              </select>
            </div>
            <button className="btEnviar" type="button" onClick={() => alert('Dados enviados com sucesso!')} style={{color: 'black'}}>Enviar</button>
          </form>
          </div>
      
  );
};

export default Form;