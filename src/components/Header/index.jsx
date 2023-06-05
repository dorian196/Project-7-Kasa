import logo from '../../assets/logo.png'
import Nav from '../Nav/index'
 
function Header() {
    return (
        <header className='header'>
				<img src={logo} alt="logo de l'agence kasa" />
            <Nav className="nav-header"/>
        </header>
        
    )
}

export default Header