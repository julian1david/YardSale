import { useEffect, useState} from 'react';
import axios from 'axios'

const useGetProducts = (API) => {

    const[products, setProducts] = useState([]);
    //Con esto vamos a usar el recurso de UseEffect
	//esto nos permite hacer llamados a una API y transmitirlo a un compoenente. 
	//esto recibe una función anonima
	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
		//recurso de axios nos permite realizar las peticiones
	},[]) //se pasa un arreglo vacio porque no se va a escuchar sobre ningún elemento
    //se debe hacer un return para que retorne los products
    return products
}

export default useGetProducts;