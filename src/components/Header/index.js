import { Link } from 'react-router-dom';

import './style.css';

function Header() {
    return (
        <header>
            <h2 className='logo'>ReactApp</h2>
            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">contato</Link>
                <Link to="/produto">produto</Link>
            </div>
        </header>
    )
}

export default Header;