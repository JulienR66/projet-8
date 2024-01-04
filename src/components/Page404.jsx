import '../styles/Page404.css';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <>
        <h1 className='number'>404</h1>
        <p className='message'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='return' to="/">Retourner sur la page d’accueil</Link>
        </>
    )
}

export default Page404;