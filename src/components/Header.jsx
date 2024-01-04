import '../styles/Header.css';
import logo from '../assets/kasa.png';

function Header() {


    return (
        <header className='kasa-header'>
            <img src={logo} alt="" />
            <nav className='nav'>
                <a>Accueil</a>
                <a>A Propos</a>
            </nav>
        </header>
    )
}

export default Header