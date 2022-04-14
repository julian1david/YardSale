import React from 'react'
import Container from '@components/DivContainer/DivContainer'
import Section from '@components/Section/Section'
import Title from '@components/Title/Title'
import Label from '@components/Label/Label'
import Span from '@components/Span/Span'
import '@styles/Button.scss'
import '@styles/Form.scss'

const MyAccout = () => {
    return (
        <Section>
            <Container className="Container__mobile">
                <Title className="Title__create">My account</Title>
                <form className='Form'>
                    <Label htmlFor="name">Name</Label>
                    <Span>Your Name is here</Span>
                    <Label htmlFor="name">Email</Label>
                    <Span>youremail@example.com</Span>
                    <Label htmlFor="pass">Password</Label>
                    <Span>***************</Span>
                </form>
                <button type="submit" className=" Button Button-secondary">Edit</button>
            </Container>
        </Section>
    )
}

export default MyAccout