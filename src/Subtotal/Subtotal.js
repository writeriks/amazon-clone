import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import basketReducerSelector from '../redux-reducer/basket-reducer/basket-reducer-selector'
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'


function Subtotal() {
    const history = useHistory();
    const basket = useSelector(basketReducerSelector.getBasket)
    const basketTotal = useSelector(basketReducerSelector.getBasketTotal)

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
                value={basketTotal}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
