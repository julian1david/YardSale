import React from 'react';
import Order from '@containers/Order/Order'
import OrderItem from '@containers/OrderItem/OrderItem'
import Section from '@components/Section/Section';
import Title from '@components/Title/Title';
import '@styles/Checkout.scss';
import '@styles/Form.scss'

const Checkout = () => {
    return (
        <Section>
            <div className="Checkout">
                <div className="Checkout__container">
                    <Title>My Orders</Title>
                    <div className='Form'>
                        <Order className="Checkout--Order" />
                    </div>
                    <OrderItem />
                </div>
            </div>
        </Section>
    );
}

export default Checkout;