import { Link } from 'react-router-dom'

function Nav() {
    return ( 
        <nav className='nav-head'>
            <Link to="/" className='nav-home'>Accueil</Link>
            <Link to="/About" className='nav-about'>À Propos</Link>
        </nav>
    )
}


export default Nav