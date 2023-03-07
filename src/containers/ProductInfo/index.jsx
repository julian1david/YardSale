import addCart from '@/icons/bt_add_to_cart.svg';
import Figure from '@/components/Figure';
import './ProductInfo.scss';
import '@/Button.scss';

const ProductInfo = () => {
	return (
		<>
			<Figure className='Figure--ProductInfo'>
				<img
					src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
					alt='bike'
				/>
			</Figure>
			<div className='ProductInfo__details'>
				<p>$35,00</p>
				<p>Bike</p>
				<p>
					With its practical position, this bike also fulfills a decorative
					function, add your hall or workspace.
				</p>
				<button className='Button Button__addCar--icon' type='submit'>
					<img src={addCart} alt='add to cart' />
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;
