import {basketReducerTypes} from '../reducerTypes';

export const initialBasketState = {
    basket: [],
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const basketReducer = (state = initialBasketState, action) => {
    switch (action.type) {
        case basketReducerTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case basketReducerTypes.REMOVE_FROM_BASKET:
            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket
            }
        case basketReducerTypes.EMPTY_BASKET:
            return {
                ...state,
                basket: [],
            };
        default:
            return state;
    }
};

export default basketReducer;