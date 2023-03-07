import { useState } from 'react';

//  aqui vamos agregar el estado para agregar al carito
const initialState = {
	cart: [],
	orderIsOpen: false,
	menuIsOpen: false,
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = payload => {
		setState({
			//  con esta estructura mantemos  la información
			...state,
			//  con esto mantiene lo que tiene y agrega lo que voy a pasar
			cart: state.cart.includes(payload)
				? state.cart
				: [...state.cart, payload],
		});
	};

	const removeFromCart = indexValue => {
		setState({
			...state,
			cart: state.cart.filter((product, index) => index !== indexValue),
		});
	};
	//  se agrega el estado de order para el menu.

	const toggleOrder = () => {
		setState({
			...state,
			orderIsOpen: !state.orderIsOpen,
			menuIsOpen: false,
		});
	};

	const toggleMenu = () => {
		setState({
			...state,
			orderIsOpen: false,
			menuIsOpen: !state.menuIsOpen,
		});
	};

	return {
		state,
		addToCart,
		removeFromCart,
		toggleOrder,
		toggleMenu,
	};
};

export default useInitialState;
