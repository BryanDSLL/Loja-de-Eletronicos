import React from 'react';
import PageHeader from '../components/PageHeader';
import BtnGit from '../components/BtnGit';
import BtnInsta from '../components/BtnInsta';
import BtnForm from '../components/BtnForm';

const Sobre = () => {
  return (
    <>

      <PageHeader></PageHeader>



      <div className="content-sobre">
        <div className="left-side-sobre">
          <h1 style={{ fontSize: "40px" }}>Bryan Claro Zimbrão</h1>
          <span style={{ fontSize: "15px" }}>Olá, eu sou o Bryan! Tenho 21 anos e atualmente moro em Teresópolis/RJ.</span>
          <p>Atualmente trabalho como Analista de Retaguarda na empresa
            Alterdata Software, lá eu exerço funções como Criação de Layouts (Pascal),
            Análises e tratamentos de bases de dados (SQL),
            Conversões de Bancos de Dados, entre outros...</p>

          <p style={{ marginTop: "5px" }}>No momento estudo programação e tenho como objetivo ingressar no mercado
            como DEV. Dentre alguns conhecimentos que tenho na área, seguem abaixo:</p>

          <div className="aptidoes">
            <table>
              <tr>
                <td className="colunaAp">Aptidões:</td>
                <td className="colunaAp">Em desenvolvimento:</td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>- Conhecimentos em Java, Python, CSS, HTML e JS</li>
                    <li>- Criação, manutenção e controle de bancos de dados (PostgreSQL, SQL Server, MySQL, MongoDB e Firebird)</li>
                    <li>- P.O.O</li>
                    <li>- Spring Boot</li>
                    <li>- Contato em auxílio e acompanhamento a clientes e/ou analistas de suporte</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>- ReactJs (Vite + RRD)</li>
                    <li>- BDD e TDD</li>
                    <li>- CSS (Avançado)</li>
                    <li>- QA Tester (Testes de Unidade, Integração, Componentes, Validação e Sistema)</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>



        </div>

        <div className="right-side-sobre">
          <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t39.30808-6/275473639_5235342236564153_3672341534526222465_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeHdItXk-neFJ3FnJt6wiBDvyKCXdnWJjdPIoJd2dYmN09NNhH6XwuotDDLVVlZMfZ9oGADzodw7ONT39D3dnyAm&_nc_ohc=N8CmfFt2xY0AX9FPc0G&_nc_ht=scontent.fsdu1-1.fna&oh=00_AfDz716Gq4md2liezbV8MPbEghYIhd2HSpyNIUPvF2J2_A&oe=64D8551B" alt="eu" />
          <div className="social">
            <BtnGit />
            <BtnInsta />
          </div>

        </div>
      </div>

      <BtnForm></BtnForm>

    </>
  )
};

export default Sobre;