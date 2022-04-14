import React from 'react'
import Link from '@components/Link/Link'
import Title from '@components/Title/Title'
import Subtitle from '@components/Subtitle/Subtitle'
import Span from '@components/Span/Span'
import Container from '@components/DivContainer/DivContainer'
import Section from '@components/Section/Section'
import Figure from '@components/Figure/Figure'
import email from '@icons/email.svg'
import '@styles/Button.scss'


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
                <p><Span className="Span--email">Didn't receive the email?</Span><Link>Resend</Link></p>
            </Container>
        </Section>
    )
}

export default SendEmail