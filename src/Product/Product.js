import React from 'react'
import './Product.css'
import {useDispatch} from 'react-redux'
import basketActionCreator from '../redux-reducer/basket-reducer/basket-action-creator'

function Product({id, title, image, price, rating}) {

    const dispatch = useDispatch();

    const addToBasket = () => {
        const item = {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        }
        dispatch(basketActionCreator.addToBasketAction(item))
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) =>
                            <p key={i}>⭐</p>
                        )
                    }

                </div>
            </div>

            <img alt={title} src={image} />

            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
