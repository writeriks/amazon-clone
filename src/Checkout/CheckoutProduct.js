import React from 'react'
import {useStateValue} from '../Provider/StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({basketItem}) {
    const {id, image, title, price, rating} = basketItem;
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        console.log("hererere")
        dispatch({
            type: 'REMOVE_FROM_BASKET',
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
