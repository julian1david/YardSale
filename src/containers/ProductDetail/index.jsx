import ProductInfo from '@/containers/ProductInfo';
import './ProductDetail.scss';
import close from '@/icons/icon_close.png';

const ProductDetail = () => {
	return (
		<aside className='ProductDetail'>
			<div className='ProductDetail__close'>
				<img src={close} alt='close' />
			</div>
			<ProductInfo />
		</aside>
	);
};

export default ProductDetail;
