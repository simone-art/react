import React from 'react';
import logo from './logo.svg';
import './App.css';

const pessoa = {
  nome: "Simone",
  sobrenome : "Santos"
}

const saudacao = obj => `Olá, ${obj.nome} ${obj.sobrenome}`;

const contador = 0
function ContadorFinal(){
  if (contador === 0){
    return 'contador nao iniciado'  
  }else{
    return 'contador iniciado'
  }
}

const Nav = props => {
  return (
    <div>
  <p>{props.nome}</p>
  <p>{props.titulo}</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Nav
        nome = "Home"
        titulo= "Sobre"
      />
      <h1>{saudacao(pessoa)}, aquí está o seu: </h1>
      <p><strong>CONTADOR : 0</strong></p>
      <p>{contador}</p>
      {/* {Se for 0 returna:} */}
      <p>{ContadorFinal()}</p>
      {/* {se for diferente de 0, retorna:} */}
      {/* <p>Contador Iniciado</p> */}
      <div className= "buttonGeral">
      <button className = "Uno">+1</button>
      <button className = "Dos">-1</button>
      <button className = "Tres">Resetar</button>
      </div>
    </div>
  );
}

export default App;
