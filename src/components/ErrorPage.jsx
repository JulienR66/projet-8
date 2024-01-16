import '../styles/ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div>
        <h1 className='number'>404</h1>
        <p className='message'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='return' to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorPage;