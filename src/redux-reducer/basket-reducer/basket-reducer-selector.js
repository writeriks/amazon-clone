import {createSelector} from 'reselect';
import rootStateReducer from '../../redux-reducer/root-reducer-selector';

class BasketReducerSelector {
    getBasket = createSelector(
        rootStateReducer.getBasketReducer,
        (basketReducer) => basketReducer.basket
    )

    getBasketTotal = createSelector(
        this.getBasket,
        (basket) => basket?.reduce((amount, item) => item.price + amount, 0)
    )
}

const basketReducerSelector = new BasketReducerSelector();
export default basketReducerSelector;