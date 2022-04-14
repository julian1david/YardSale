import React from 'react'
import Span from '../components/Span';
import '../styles/Order.scss';
import arrow from '@icons/flechita.svg'


const Order = ( {className} ) => {
	return (
		<div className={["Order", className].join(" ")}>
			<p>
				<Span className="Span--order-one">03.25.21</Span>
				<Span className="Span--order-two">6 articles</Span>
			</p>
			<p>$560.00</p>
			<img src={arrow} alt="arrow"/>
		</div>
	)
}

export default Order