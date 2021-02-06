import React from 'react'
import {reducerTypes} from '../Provider/reducerTypes';
import {useStateValue} from '../Provider/StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({basketItem}) {
    const {id, image, title, price, rating} = basketItem;
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: reducerTypes.REMOVE_FROM_BASKET,
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={title} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">{rating}
                    {
                        Array(rating).fill().map((_, i) =>
                            <p>⭐</p>
                        )
                    }
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
