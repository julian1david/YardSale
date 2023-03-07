import axios from 'axios';

const getProducts = async API => {
	try {
		const response = await axios(API);
		const products = response.data;
		return products;
	} catch (e) {
		console.log(e);
	}
};
export { getProducts };
