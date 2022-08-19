
import Alink from '@/components/Alink'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Span from '@/components/Span'
import Container from '@/components/DivContainer'
import Section from '@/components/Section'
import Figure from '@/components/Figure'
import email from '@/assets/icons/email.svg'
import '@/styles/Button.scss'


const SendEmail = () => {
    return (
        <Section>
            <Container className="Container--email">
                <Title>Email has been Sent!</Title>
                <Subtitle>Please check your inbox for instructions on how to reset the password</Subtitle>
                <Figure className="Figure--email-image">
                    <img src={email} alt="email" />
                </Figure>
                <button className="Button" type="submit">Log in</button>
                <p><Span className="Span--email">Didn&apos;t receive the email?</Span><Alink>Resend</Alink></p>
            </Container>
        </Section>
    )
}

export default SendEmail