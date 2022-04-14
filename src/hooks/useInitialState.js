import {useState} from 'react'

//aqui vamos agregar el estado para agregar al carito
const initialState = {   
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            //con esta estructura manten la información
            ...state,
            //con esto mantienete lo que tiene y agrega lo que voy a pasar
            cart: [...state.cart, payload],
        })
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product,index) => index !== indexValue),
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState