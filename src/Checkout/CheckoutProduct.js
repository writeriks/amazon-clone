import React, {forwardRef} from 'react'
import {useDispatch} from 'react-redux';
import './CheckoutProduct.css'
import basketActionCreator from '../redux-reducer/basket-reducer/basket-action-creator'

const CheckoutProduct = forwardRef(({basketItem, hideButton}, ref) => {
    const {id, image, title, price, rating} = basketItem;
    const dispatch = useDispatch()

    const removeFromBasket = () => {
        dispatch(basketActionCreator.removeFromBasketAction(id))
    }

    return (
        <div className="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__image" src={image} alt={title} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">{rating}
                    {
                        Array(rating).fill().map((_, i) =>
                            <p key={i}>⭐</p>
                        )
                    }
                </p>
                {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
            </div>
        </div>
    )
});

export default CheckoutProduct
