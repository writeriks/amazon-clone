import React from 'react'
import authReducerSelector from '../redux-reducer/auth-reducer/auth-reducer-selector'
import basketReducerSelector from '../redux-reducer/basket-reducer/basket-reducer-selector'
import {useSelector} from 'react-redux'
import Subtotal from '../Subtotal/subtotal'
import './checkout.css'
import CheckoutProduct from './checkout-product'
import FlipMove from 'react-flip-move'

const Checkout = () => {
    const basket = useSelector(basketReducerSelector.getBasket)
    const user = useSelector(authReducerSelector.getFirebaseUser)

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
                        {basket.map((basketItem) => (
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
