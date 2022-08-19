import { useState } from 'react';
import Nome from "./components/nome";


function App() {


  // to use the useState, declare a constant as an array
  // first declare the name of this state (in this case "aluno")
  // second declare the name of the function that will change the value of this state
  // the name of the function has a pattern: "set" + (capital first letter) state name - setAluno
  // so set a default value in useState - in this case "Sujeito Programador"
  const [aluno, setAluno] = useState("Sujeito Programador");


  function handleChangeName(nome) {
    setAluno(nome)
  }

  return (
    <div>
      <h1>Meu primeiro app</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName("salve") }>Mudar estado</button>

      <br />
      <Nome aluno="Mateus" nota={8} />
    </div>
  );
}

export default App;

