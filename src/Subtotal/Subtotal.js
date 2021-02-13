import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useBasketValue} from '../store/basket/BasketProvider';
import {getBasketTotal} from '../store/basket/basketReducer';

function Subtotal() {

    const [{basket}] = useBasketValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"€"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
