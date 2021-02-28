import React from 'react'
import {useAuthValue} from '../store/authentication/AuthenticationProvider';
import {useBasketValue} from '../store/basket/BasketProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

const Checkout = () => {
    const [{basket},] = useBasketValue();
    const [{user},] = useAuthValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout ad" />

                <div>
                    <h3>Hello, {user ? user?.email : `Guest`}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <FlipMove leaveAnimation="accordionHorizontal">
                        {basket.map((basketItem, i) => (
                            <CheckoutProduct key={basketItem.id} basketItem={basketItem} />
                        ))}
                    </FlipMove>
                </div>
            </div>


            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
