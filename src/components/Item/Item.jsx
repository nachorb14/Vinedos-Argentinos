import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3> {nombre} </h3>
            <p> <strong>${precio}</strong> </p>
            <Link to={`/item/${id}`}>Ver Detalles</Link>
        </div>
    )
}

export default Item