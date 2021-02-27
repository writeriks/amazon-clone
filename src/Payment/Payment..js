import React, {useEffect, useState} from 'react'
import './Payment.css'
import {useAuthValue} from '../store/authentication/AuthenticationProvider'
import {useBasketValue} from '../store/basket/BasketProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import {Link, useHistory} from 'react-router-dom'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../store/basket/basketReducer'
import axios from '../axios'
import paymentHelper from './payment-helper'
import {emptyBasketAction} from '../store/basket/basketActionCreator'
//const stripeAction = require('stripe')('sk_test_YAaXSPovtBvzCEBIn8SnLmkC00zmBK3veE');


function Payment() {
    const history = useHistory()
    const [{user},] = useAuthValue()
    const [{basket}, dispatch] = useBasketValue()
    const stripe = useStripe();
    const elements = useElements();
    const {confirmPaymentWithoutSecret} = paymentHelper;

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(false)

    useEffect(() => {
        // Get client Secret from Cloud Function
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])


    /**
     * creates request to stripe with received client secret from the useEffect
     * and card element from react stripe
     * 
     * @param {*} e event object to prevent postback refreshing
     */
    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        setProcessing(true);
        const cardElement = elements.getElement(CardElement);
        if (clientSecret) {
            await paymentHelper.confirmPaymentWithSecret(stripe, clientSecret, cardElement)
            setSucceeded(true)
            setProcessing(false)
            setError(null)
            history.replace('/orders')
        } else {
            const {error, paymentMethod} = await confirmPaymentWithoutSecret(stripe, elements, cardElement)
            setProcessing(false)
            if (paymentMethod) {
                setSucceeded(true)
                setError(null)
                history.replace('/orders')
            } else {
                setError(error.message)
            }
        }
        emptyBasketAction(dispatch)
    }

    const handlePaymentChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handlePaymentSubmit}>
                            <CardElement onChange={handlePaymentChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span>
                                        {processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Payment
