import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre}</h2>
      <h3>${precio}</h3>
      <p>{descripcion}</p>
      <img className='imgProducto' src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link to="/cart" className='miBtn'> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad} />)
      }
    </div>
  )
}
export default ItemDetail