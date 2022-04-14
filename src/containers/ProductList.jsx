import React from 'react';
import ProductItem from './ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts'; 

//solo de ejemplo ya que no es la mejor ofrma
const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {

	//instanciamos nuestro hook
	const products = useGetProducts(API);

	return (
		<section>
			<div className="ProductList">
		{/*itireamos por cada uno de ls items*/}
			{products.map(product => (
				<ProductItem product={product} key={product.id}/>
			))}
			</div>
		</section>
	)
}

export default ProductList