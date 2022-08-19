import Nome from "./components/nome";

function App() {
  return (
    <div>
      <h1>Meu primeiro app</h1>
      <Nome aluno="Mateus" nota={8} />
      <br/>
      <Nome aluno="Augusto" nota={10} />
    </div>
  );
}

export default App;

