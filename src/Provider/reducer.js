import {reducerTypes} from './reducerTypes';

export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch (action.type) {
        case reducerTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case reducerTypes.REMOVE_FROM_BASKET:
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
        case reducerTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;