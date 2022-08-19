import { useContext }from 'react'
import AppContext from '@/context/AppContext.js'
import Figure from '@/components/Figure'
import addToCartImage from '@/assets/icons/bt_add_to_cart.svg'
import addedToCartImage from '@/assets/icons/bt_added_to_cart.svg'
import './ProductItem.scss'

// pasamos el product que es el itema  recibir
const ProductItem = ({product}) => {

  // Uso de Hooks, añadimos la logica del hook
  const { state, addToCart } = useContext(AppContext);
  const { images, title, price } = product;

  // con esto se va a dar el manejo del clic de un solo clic
  const handleCart = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item)
  }

  return (
    <div className="ProductItem">
      <Figure className="Figure--ProductItem">
        <img src={images[0]} alt={title} loading="lazy" />
      </Figure>
      <div className="ProductItem--info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        {/* Aqui vamos a usar el manejo de los evenetos y vamos a usar uno de sus colección */}
        <figure className="Figure--ProductItem-info" onClick={() => handleCart(product)}>
              { state.cart.includes(product) ? 
              <img className="disabled add-to-cart-btn" src={addedToCartImage} alt="added to cart" />  
              : <img className="add-to-cart-btn pointer" src={addToCartImage} alt="add to cart" /> }
        </figure>
      </div>
    </div>
  )
}

export default ProductItem