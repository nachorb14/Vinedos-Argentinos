import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Viñedos Argentinos</h1>
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/1`}>Cabernet Sauvignon</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/2`}> Malbec</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/3`}>Merlot</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/4`}>Pinot Noir</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />
    </header>
  )
}

export default NavBar