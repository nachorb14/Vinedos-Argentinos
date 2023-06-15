import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  const logoVinoteca = '../img/logo-vinedos.jpg';

  return (
    <header className='fondoNav'>
      <Link to={"/"}>
        <img className='logoVinoteca' src={logoVinoteca} alt="Logo Vinoteca" />
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink className="navBarBtn" to={`/categoria/1`}>Cabernet Sauvignon</NavLink>
                </li>
                <li>
                  <NavLink className="navBarBtn" to={`/categoria/2`}> Malbec</NavLink>
                </li>
                <li>
                  <NavLink className="navBarBtn" to={`/categoria/3`}>Merlot</NavLink>
                </li>
                <li>
                  <NavLink className="navBarBtn" to={`/categoria/4`}>Pinot Noir</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />
    </header>
  )
}

export default NavBar