import React, { useContext } from 'react'
import Title from '@components/Title/Title'
import OrderItem from '@containers/OrderItem/OrderItem'
import AppContext from '@context/AppContext.js'
import arrow from '@icons/flechita.svg'
import './MyOrder.scss'
import '@styles/Button.scss'



const MyOrder = () => {

	const { state } = useContext(AppContext)

	const sumTotal = () => {
		//el reduce nos ayuda a sumar cada uno de los valores
		const reducer = (accumalator, currentValue)=> accumalator + currentValue.price
		const sum = state.cart.reduce(reducer, 0);
		return sum
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow"/>
				<Title>My Order</Title>
			</div>
			<div className="my-order-content">
				{/* Como en este caso  el key ya lo habiamos usado ahora lo apsamos nombrandolo */}
				{state.cart.map((product, index) => (
					<OrderItem 
						indexValue={index}
						key={index}
						product={product}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="Button" type="submit">Checkout</button>
			</div>
		</aside>
	)
}

export default MyOrder