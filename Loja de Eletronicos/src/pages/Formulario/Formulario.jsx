import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormularioStyled from '../Formulario/FormularioStyled';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    documento: '',
    tipo: '',
    idade: '',
    estado: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isCPFValid = (cpf) => {
    return true;
  };

  const handleSubmit = () => {
    if (!formData.nome || !formData.email || !formData.documento || !formData.tipo || !formData.idade || !formData.estado) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!isEmailValid(formData.email)) {
      alert('Por favor, informe um e-mail válido.');
      return;
    }

    if (!isCPFValid(formData.documento)) {
      alert('Por favor, informe um CPF válido.');
      return;
    }

 
    try {
  
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar a requisição', error);
      alert('Erro ao enviar os dados.');
    }
  };

  return (
    <>
      <PageHeader></PageHeader>
      <FormularioStyled>
      <div className="full-screen-container">
        <div className="form-container">
          <p id="promo">Quer receber notificações de novas promoções? Coloque seus dados aqui!</p>
          <form className="form-form">
            <label htmlFor="nome">Informe seu nome:</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleInputChange}
              style={{ color: 'black' }}
              required
            />
            <label htmlFor="email">Informe seu melhor E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              style={{ color: 'black' }}
              required
            />
            <label htmlFor="documento">CPF ou CNPJ</label>
            <input
              type="text"
              name="documento"
              placeholder="CPF ou CNPJ"
              value={formData.documento}
              onChange={handleInputChange}
              style={{ color: 'black' }}
              required
            />
            <div>
              <p>Sexo:</p>
              <input type="radio" name="tipo" value="fem" checked={formData.tipo === 'fem'} onChange={handleInputChange} /> Feminino
              <input type="radio" name="tipo" value="masc" checked={formData.tipo === 'masc'} onChange={handleInputChange} /> Masculino
            </div>
            <div>
              <label htmlFor="idade">Qual a sua idade?</label>
              <input
                type="number"
                name="idade"
                placeholder="IDADE"
                value={formData.idade}
                onChange={handleInputChange}
                style={{ color: 'black' }}
                required
              />
            </div>
            <div>
              <label htmlFor="estado">Selecione o seu Estado:</label>
              <select name="estado" required value={formData.estado} onChange={handleInputChange} style={{ color: 'black' }}>
                <option value="" style={{ color: 'black' }}></option>
                <option value="rj" style={{ color: 'black' }}>Rio de Janeiro</option>
                <option value="ba" style={{ color: 'black' }}>Bahia</option>
                <option value="ce" style={{ color: 'black' }}>Ceará</option>
              </select>
            </div>
            <button className="btEnviar" type="button" onClick={handleSubmit} style={{ color: 'black' }}>Enviar</button>
          </form>
        </div>
      </div>
      </FormularioStyled>
    </>
  );
};

export default Form;
