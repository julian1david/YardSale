import React from 'react';
import OrderItem from '@containers/OrderItem/OrderItem';
import Title from '@components/Title/Title'
import Container from '@components/DivContainer/DivContainer'
import Section from '@components/Section/Section'
import '@styles/Form.scss'


const Orders = () => {
    return (
        <Section>
            <Container>
                <Title>My Orders</Title>
                <div className='Form'>
                    <OrderItem />
                </div>
            </Container>
        </Section>
    );
}

export default Orders;