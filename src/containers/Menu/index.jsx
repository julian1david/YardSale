import './Menu.scss';
import Alink from '@/components/Alink';
import { Link } from 'react-router-dom';

const Menu = ({ className }) => {
	return (
		<div className={['Menu', className].join(' ')}>
			<ul>
				<li>
					<Link to='/orders'>
						<Alink className='Link__menu'>My orders</Alink>
					</Link>
				</li>
				<li>
					<Link to='/account'>
						<Alink className='Link__menu'>My account</Alink>
					</Link>
				</li>
				<li>
					<Link to='/'>
						<Alink>Sign out</Alink>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
