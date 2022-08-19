import { useRef } from 'react';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Section from '@/components/Section';
import Container from '@/components/DivContainer';
import '@/styles/Button.scss';
import '@/styles/Form.scss';
import { Link } from 'react-router-dom';

// En React se usa JS y este para las clases usa className y para los for usa htmlFor
function Login() {
	// creamos la referencia para form,se pasa null porque no se incializa
	// con ningún elemento
	const form = useRef(null);

	// Ahora vamos a trabar con FormData
	const handleSubmit = event => {
		// con eso se previene el evento
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			// se referencia atraves del name del Input
			username: formData.get('email'),
			password: formData.get('pass'),
		};
		console.log(data);
	};
	return (
		<Section>
			<Container>
				<form className='Form' ref={form}>
					<Label htmlFor='email'>Email Adress</Label>
					<Input type='email' name='email' placeholder='email@/example.com' />
					<Label htmlFor='pass'>Password</Label>
					<Input type='password' name='pass' placeholder='**********' />
					<button className='Button' onClick={handleSubmit}>
						Log in
					</button>
					<Link to='/password-recovery' className=''>
						<a>Forgot my password</a>
					</Link>
				</form>
				<Link to='/signup'>
					<button type='submit' className='Button Button-secondary'>
						Sign up
					</button>
				</Link>
			</Container>
		</Section>
	);
}

export default Login;
