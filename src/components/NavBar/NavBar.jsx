import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Viñedos Argentinos</h1>

        <nav>
            <ul>
                <li>Marcas</li>
                <li>Viñedos</li>
                <li>Uvas</li>
            </ul>
        </nav>

        <CartWidget />
    </header>
  )
}

export default NavBar