import React from 'react';
// import Objetc1 from "./componentes/Objetc1"
import lewis from './img/lewis.jpg';
import pique from './img/pique.jpg';
import logo from './logo.svg';
import './App.css';

const Objetc1 = props => {
  return (
    <div className="comentario">
      <img className= "comentario__perfil" src={props.img} />

      <div> 
      <p className ="comentario__nome">{props.nome}</p>
      <p className ="comentario__subtitulo">{props.subtitulo}</p>
      <hr />
      <p>{props.comentario}</p>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className="App">
      <Objetc1
      img={lewis}
      nome = "lewis"
      subtitulo = "AMEI ESSE VIDEO KERO ++++"
      comentario = "Nossa, babado esse video. Esse gato é de mais!"
      
      />
      <Objetc1
      img={pique}
      nome = "Piqué"
      subtitulo = "Eu amo esse gato"
      comentario = "Muito legal esse video. Adoro esse gato."
      />
    </div>
  );
}

export default App;
