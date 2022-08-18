
import Input from '@/components/Input'
import Label from '@/components/Label'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Container from '@/components/DivContainer'
import Section from '@/components/Section'
import '@/styles/Button.scss'
import '@/styles/Form.scss'

function NewPassword() {
    return (
        <Section>
            <Container >
                <form className='Form'>
                    <Title>Create a new  password</Title>
                    <Subtitle>Enter a new password for your account</Subtitle>
                    <Label htmlFor="pass">Password</Label>
                    <Input type="password" name="pass" id="pass" placeholder="**********" />
                    <Label htmlFor="confirm-pass">Confirm your password</Label>
                    <Input type="password" name="confirm-pass" id="confirm-pass" placeholder="**********" />
                    <button className='Button'>Confirm</button>
                </form>
            </Container>
        </Section>
    )
}

export default NewPassword