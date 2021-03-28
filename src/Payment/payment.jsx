import React, {useEffect, useState} from 'react';
import './payment.css';
import basketReducerSelector from '../redux-reducer/basket-reducer/basket-reducer-selector';
import CheckoutProduct from '../Checkout/checkout-product';
import {Link, useHistory} from 'react-router-dom';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import paymentHelper from './payment-helper';
import {useSelector} from 'react-redux';
import authReducerSelector from '../redux-reducer/auth-reducer/auth-reducer-selector';


function Payment() {
    const history = useHistory()

    const basket = useSelector(basketReducerSelector.getBasket)
    const basketTotal = useSelector(basketReducerSelector.getBasketTotal)
    const user = useSelector(authReducerSelector.getFirebaseUser)

    const stripe = useStripe();
    const elements = useElements();

    const {submitPayment} = paymentHelper;

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(false)

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${basketTotal * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket, basketTotal])



    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const paymentParameters = {
            stripe,
            elements,
            CardElement,
            clientSecret,
            user,
            basket,
            history,
            setProcessing,
            setSucceeded,
            setError,
        }
        await submitPayment(paymentParameters)
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
                                            <h4>Order Total: {value}</h4>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={basketTotal}
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
