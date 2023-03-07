import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/containers/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import CreateAccount from '@/pages/CreateAccount';
import PasswordRecovery from '@/pages/PasswordRecovery';
import NotFound from '@/pages/NotFound';
import NewPassword from '@/pages/NewPassword';
import SendEmail from '@/pages/SendEmail';
import Account from '@/pages/Account';
import Checkout from '@/pages/Checkout';
import Orders from '@/pages/Orders';
//  Importamos nuestro context
import AppContext from '@/context/AppContext';
import useInitialState from '@/hooks/useInitialState';
import '@/styles/global.css';

//  React router Dom Cambia ahora usa switch y los componenetes deben ir en JSX
//  adicional a diferencia de versiones anteriores ya no se usa component si no element
//  tampoco se usa la palabra exact
const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' index element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<CreateAccount />} />
						<Route path='/password-recovery' element={<PasswordRecovery />} />
						<Route path='/new-password' element={<NewPassword />} />
						<Route path='/send-email' element={<SendEmail />} />
						<Route path='/account' element={<Account />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/orders' element={<Orders />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export { App };
