import React from 'react';
// import logo from './logo.svg';
import './App.css';
import sol from './img/sol.jpg';
import nubes from './img/nubes1.jpg'


const LinhaDoTempo = props => {
  return (
    <div className="previsao-container">
      <div className="previsao">
        <div className="LinhaDoTempo">
          <p className="previsao__data">{props.data}</p>
          <p className="previsao__resumo">{props.previsao}</p>
          <img className="previsao__img" src={props.img} />
          <table className="previsao-temperatura">
            <tr className="previsao-temperatura__linha">
              <td>Máxima</td>
              <td>{props.maxgrado}</td>
              <td>Mínima</td>
              <td>{props.mingrado}</td>
            </tr>
          </table>
        </div>
      </div>
      </div>
        )
      }

    
    
    
function App() {
  return (
    <div className="previsao-container">
        <LinhaDoTempo
          data="31/05/2019"
          previsao="Ensolarado"
          img={sol}
          maxgrado="31ºC"
          mingrado="20ºC"
        />
        <LinhaDoTempo
          data="01/06/2019"
          previsao="Nublado"
          img={nubes}
          maxgrado="29ºC"
          mingrado="18ºC"
        />
      </div>
      );
    }
    
    export default App;
