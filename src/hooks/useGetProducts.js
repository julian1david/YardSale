import { useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {

    const[products, setProducts] = useState([]);
    //  useEffect Execute this code only one time
	// We receive the API as parameter and call it
	useEffect(() => {
		const getProducts = async () => {
			const response = await axios(API);
			setProducts(response.data)
		}
		getProducts()
	},[]) //  Use the empty array to execute useEffect only one time
    //  Return state products
	return products;
}

export default useGetProducts;