import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <p className='textCardProducto'>{nombre} </p>
            <p className='textCardProducto'>${precio}</p>
            <Link className='miBtn' to={`/item/${id}`}>Ver Detalles</Link>
        </div>
    )
}

export default Item