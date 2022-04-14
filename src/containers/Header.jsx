import React, {useState, useContext} from 'react';
import Logo from '../components/Logo'
import Menu from '@containers/Menu'
import MyOrder from '@containers/MyOrder'
import AppContext from '../context/AppContext'
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import arrow from '@icons/flechita.svg'

const Header = () => {

	//Hooks
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false)
	//usamos el context para conectar el estado 
	const {state:{cart}} = useContext(AppContext)

	const handleToggle = () =>{
		//con esto cada que se da clic se va a a cambiar el estado se´gun este
		setToggle(!toggle);
	}

	return (
		<header>
			<nav>
				<Logo src={menu} alt="logo nav-bar" className="Logo__nav--mobile" />
				<div className="Header__nav--left">
					<Logo src={logo} alt="logo-desktop" className="Logo__nav" />
					<ul>
						<li><a href="/">All</a></li>
						<li><a>Clothes</a></li>
						<li><a>Electronics</a></li>
						<li><a>Furnitures</a></li>
						<li><a>Toys</a></li>
						<li><a>Others</a></li>
					</ul>
				</div>
				<div className="Header__nav--right">
					<ul>
						<li className="Header_nav--right-email">
						youremail@example.com
						</li>
						<li className="Header_nav--right-arrow" onClick={handleToggle}>
							<img src={arrow} alt="arrow"/>
						</li>
						<li className="Header_nav--right-shoppingCar" 
						onClick={ () => setToggleOrders(!toggleOrders)}>
							<img src={shoppingCart} alt="shopping cart" />
							{cart.length > 0 ? <div>{cart.length > 9 ? `+9` : cart.length} </div> : null}
						</li>
					</ul>
				</div>
				{/* Aqui se hace la validación de si la llamada del botón es true or false */}
				{toggle && <Menu />}
				{toggleOrders && <MyOrder/>}
			</nav>
		</header>

	);
}

export default Header;