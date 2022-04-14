import React, { useContext } from 'react'
import AppContext from '@context/AppContext.js'
import close from '@icons/icon_close.png'
import './OrderItem.scss'

const OrderItem = ( { product, indexValue} ) => {

  const { removeFromCart } = useContext(AppContext)

  const handleRemove = (index) =>{
    removeFromCart(index)
  }
  return (
    <div className="OrderItem">
      <figure className="Figure--Orderitem">
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p >{product.title}</p>
      <p>${product.price}</p>
      <img className="OrdenItem--close" src={close} alt="close" onClick={ () => handleRemove(indexValue)} />
    </div>
  )
}

export default OrderItem