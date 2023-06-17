import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if(cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link className="miBtn" to='/'> Ver Productos </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button className="miBtn" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link className="miBtn" to='/checkout'>Finalizar Compra</Link>
            <Link to="/" className = "miBtn" > Seguir Comprando</Link>
        </div>
    )
}

export default Cart