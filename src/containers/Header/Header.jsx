import React, {useState, useContext} from 'react';
import Logo from '@components/Logo/Logo'
import Menu from '@containers/Menu/Menu'
import MyOrder from '@containers/MyOrder/MyOrder'
import AppContext from '@context/AppContext.js'
import './Header.scss';

import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import arrow from '@icons/flechita.svg'

const Header = () => {

	//Hooks
	//usamos el context para conectar el estado 
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

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
						<li className="Header_nav--right-arrow" onClick={()=>toggleMenu()}>
							<img src={arrow} alt="arrow"/>
						</li>
						<li className="Header_nav--right-shoppingCar" 
						onClick={() => toggleOrder()}>
							<img src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length > 9 ? `+9` : state.cart.length} </div> : null}
						</li>
					</ul>
				</div>
			</nav>
			<div className="Header__menu--orders">
					{/* Aqui se hace la validación de si la llamada del botón es true or false */}
					<div className="Header-menu">
						{state.menuIsOpen && <Menu/> }
					</div>
					{state.orderIsOpen && <MyOrder />}
			</div>
		</header>

	);
}

export default Header;