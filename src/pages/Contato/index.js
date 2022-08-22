import { Link } from 'react-router-dom';

function Contato() {
    return (
        <div>
            <h1>Página contato</h1>

            <Link to="/">Home</Link>
            <Link to="/sobre">sobre</Link>

        </div>
    )
}

export default Contato;