import '../styles/Header.css';
import logo from '../assets/kasa.png';
import { Link } from 'react-router-dom';


function Header() {


    return (
        <header className='kasa-header'>
            <img src={logo} alt="" />
            <nav className='nav'>
                <Link className='nav-link' to="/">Accueil</Link>
                <Link className='nav-link' to="/Apropos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header