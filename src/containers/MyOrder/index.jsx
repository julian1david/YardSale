import  { useContext } from 'react'
import Title from '@/components/Title'
import OrderItem from '@/containers/OrderItem'
import AppContext from '@/context/AppContext.js'
import arrow from '@/assets/icons/flechita.svg'
import './MyOrder.scss'
import '@/styles/Button.scss'



const MyOrder = () => {

	// aqui recibimos el state global
	const { state,toggleOrder } = useContext(AppContext)

	const sumTotal = () => {
		// el reduce nos ayuda a sumar cada uno de los valores
		const reducer = (accumalator, currentValue)=> accumalator + currentValue.price
		const sum = state.cart.reduce(reducer, 0);
		return sum
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" onClick={()=> toggleOrder()}  />
				<Title>My Order</Title>
			</div>
			<div className="my-order-content">
				{/* Como en este caso  el key ya lo habiamos usado ahora lo pasamos dando un nombre del index */}
				{state.cart.map((product, index) => (
					<OrderItem 
						indexValue={index}
						key={index}
						product={product}/>
				))}
			</div>
			<div className="order-total">
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
					<button className="Button button-order" type="submit">Checkout</button>
			</div>
		</aside>
	)
}

export default MyOrder