import {reducerTypes} from '../reducerTypes';


export const addToBasketAction = (item, dispatch) => {
    dispatch({
        type: reducerTypes.ADD_TO_BASKET,
        item
    })
}

export const removeFromBasketAction = (id, dispatch) => {
    dispatch({
        type: reducerTypes.REMOVE_FROM_BASKET,
        id: id,
    })
}