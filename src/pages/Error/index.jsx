import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className='error'>
            <h1 className="error-404">404</h1>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error-link' to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error