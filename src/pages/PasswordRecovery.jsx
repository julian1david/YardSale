import Container from '@/components/DivContainer';
import Section from '@/components/Section';
import Title from '@/components/Title';
import Subtitle from '@/components/Subtitle';
import Alink from '@/components/Alink';
import Label from '@/components/Label';
import Input from '@/components/Input';
import { Link } from 'react-router-dom';
import '@/styles/Button.scss';
import '@/styles/Form.scss';

const RecoveryPassword = () => {
	return (
		<Section>
			<Container>
				<form className='Form'>
					<Title>Password Recovery</Title>
					<Subtitle>
						Inform the email address used <br></br> to create your account
					</Subtitle>
					<Label htmlFor='email'>Email Adress</Label>
					<Input
						type='email'
						name='email'
						id='email'
						placeholder='email@/example.com'
					/>
					<button className='Button' type='submit'>
						Submit
					</button>
					<Link to='/login'>
						<Alink>Back to log in</Alink>
					</Link>
				</form>
			</Container>
		</Section>
	);
};

export default RecoveryPassword;
