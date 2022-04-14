import React, { useState, useContext }from 'react'
import AppContext from '../context/AppContext'
import Figure from '../components/Figure'
import addToCartImage from '@icons/bt_add_to_cart.svg'
import '@styles/ProductItem.scss'

//pasamos el product que es el itema  recibir
const ProductItem = ({product}) => {

  //Uso de Hooks, añadimos la logica del hook
  const { addToCart } = useContext(AppContext)
;  const { images, title, price } = product;

  //con esto se va a dar el manejo del clic de un solo clic
  const handleCart = (item) => {
    addToCart(item)
    console.log(item)
  }
  return (
    <div className="ProductItem">
      <Figure className="Figure--ProductItem">
        <img src={images[0]} alt={title}/>
      </Figure>
      <div className="ProductItem--info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        {/* Aqui vamos a usar el manejo de los evenetos y vamos a usar uno de sus colección */}
        <figure className="Figure--ProductItem-info" onClick={() => handleCart(product)}>
          <img src={addToCartImage} alt="Icon car" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem