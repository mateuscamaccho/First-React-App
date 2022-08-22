import {Link} from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <h1>Bem vindo ao sobre</h1>
      <Link to="/">home</Link>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Sobre;

