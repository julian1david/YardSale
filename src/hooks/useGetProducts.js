import { useEffect, useState} from 'react';
import { getProducts } from '../utilities/getProducts';

const useGetProducts = (API) => {

    const[products, setProducts] = useState([]);
    //  Con esto vamos a usar el recurso de UseEffect
	//  esto nos permite hacer llamados a una API y transmitirlo a un compoenente. 
	//  esto recibe una función anonima
	useEffect(() => {
		const product = getProducts()
        setProducts(product);
		return products
		//  recurso de axios nos permite realizar las peticiones
	},[]) //  se pasa un arreglo vacio para que ejecute el effecto una sola vez
    //  se debe hacer un return para que retorne los products
	
}

export default useGetProducts;