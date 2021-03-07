import React from 'react'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import Moment from 'react-moment'
import './Orders.css'

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <Moment style={{fontWeight: "600"}} unix format="DD/MM/YYYY hh:mm" >
                {order.data.created}
            </Moment>
            {
                order.data.basket?.map(item => <CheckoutProduct key={item.id} basketItem={item} hideButton />)
            }
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order__total">
                            Order total: {value}
                        </h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
        </div >
    )
}

export default Order
