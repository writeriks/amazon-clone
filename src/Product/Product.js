import React from 'react'
import './Product.css'
import {useBasketValue} from '../store/basket/BasketProvider'
import {addToBasketAction} from '../store/basket/basketActionCreator'

function Product({id, title, image, price, rating}) {

    const [, dispatch] = useBasketValue();

    const addToBasket = () => {
        const item = {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        }
        addToBasketAction(item, dispatch)
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
