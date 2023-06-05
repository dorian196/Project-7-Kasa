// Assets
import logo from '../../assets/logo.png'
// Function
import Nav from '../Nav/index'
 
function Header() {
    return (
        <header className='header'>
				<img src={logo} alt="logo de l'agence kasa" />
            <Nav />
        </header>
        
    )
}

export default Header