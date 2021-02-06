import React from 'react'
import {useStateValue} from '../Provider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket},] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout ad" />

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map((basketItem) => (
                        <CheckoutProduct basketItem={basketItem} />
                    ))}
                </div>
            </div>


            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
