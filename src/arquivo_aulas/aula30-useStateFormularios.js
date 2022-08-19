import { useState } from 'react';

function App() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();

    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <h1> Cadastro de usuario!</h1>
      <form onSubmit={handleRegister}>
        <label for="input1">Nome:</label><br />
        <input type="text" id="input1"
          placeholder="Digite seu nome...."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br />

        <label for="input2">Idade:</label><br />
        <input type="text" id="input2"
          placeholder="Digite sua idade...."
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br />
        <label for="input3">email:</label><br />
        <input type="text" id="input3"
          placeholder="Digite seu email...."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <button type="submit">Registrar</button>
      </form>

      <div>
        <span>Bem vindo:{user.nome}</span><br />
        <span>Idade:{user.idade}</span><br />
        <span>E-mail:{user.email}</span><br />
      </div>
    </div>
  );
}

export default App;

