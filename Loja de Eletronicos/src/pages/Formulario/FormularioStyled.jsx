import styled from 'styled-components';

const FormularioStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-content {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-form label {
    margin-bottom: 5px;
  }
  
  .form-form input,
  .form-form select {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-form button {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .form-form button:hover {
    background-color: #555;
  }

  
`;

export default FormularioStyle;
