import { useState } from 'react';

function App() {
  const  [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Aprender ReactJs',
    'Aprender Ingles!!!!'
  ]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1> Digite uma tarefa:</h1>
      <form onSubmit={handleRegister}>
        <label for="input1">Nome:</label><br />
        <input type="text" id="input1"
          placeholder="Digite uma tarefa...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

 