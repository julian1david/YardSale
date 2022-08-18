import './ProductList.scss';
import ProductItem from '@/containers/ProductItem';
import useGetProducts from '@/hooks/useGetProducts'; 

// solo de ejemplo ya que no es la mejor ofrma
const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {

	// useHook
	const products = useGetProducts(API);
	
	return (
		<section>
			<div className="ProductList">
		{/* itireamos por cada uno de ls items */}
			{products.map(product => (
				<ProductItem product={product} key={product.id}/>
			))}
			</div>
		</section>
	)
}

export default ProductList