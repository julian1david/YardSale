import React from 'react';
import OrderItem from '../containers/OrderItem';
import Title from '../components/Title'
import Container from '../components/Container'
import Section from '../components/Section'
import '../styles/Form.scss'


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