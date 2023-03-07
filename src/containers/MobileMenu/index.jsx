import Alink from '@/components/Alink';
import './MenuMobile.scss';

const MenuMobile = () => {
	return (
		<div className='MobileMenu'>
			<div>
				<h4>CATEGORIES</h4>
				<ul>
					<li>
						<Alink className='Link__menu'>All</Alink>
					</li>
					<li>
						<Alink className='Link__menu'>Clothes</Alink>
					</li>
					<li>
						<Alink className='Link__menu'>Electronics</Alink>
					</li>
					<li>
						<Alink className='Link__menu'>Fornitures</Alink>
					</li>
					<li>
						<Alink className='Link__menu'>Toys</Alink>
					</li>
					<li>
						<Alink className='Link__menu'>Others</Alink>
					</li>
				</ul>
				<ul>
					<li>
						<Alink className='Link__menu'>My orders</Alink>
					</li>
					<li>
						<Alink className='Link__menu'>My account</Alink>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<Alink className='Link__menu--email'>yourmail@/example.com</Alink>
					</li>
					<li>
						<Alink>Sign out</Alink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MenuMobile;
