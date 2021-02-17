import React from 'react'
import './Payment.css'
import {useAuthValue} from '../store/authentication/AuthenticationProvider'
import {useBasketValue} from '../store/basket/BasketProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import {Link} from 'react-router-dom'

function Payment() {
    const [{user},] = useAuthValue()
    const [{basket},] = useBasketValue()
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map((item, i) => <CheckoutProduct key={item.id} basketItem={item} />)
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        <div className="payment__details">

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Payment
