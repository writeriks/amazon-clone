import {basketReducerTypes} from '../reducerTypes';


class BasketActionCreator {
    addToBasketAction = (item) => {
        return {
            type: basketReducerTypes.ADD_TO_BASKET,
            item
        }
    };

    removeFromBasketAction = (id) => {
        return {
            type: basketReducerTypes.REMOVE_FROM_BASKET,
            id: id,
        }
    };

    emptyBasketAction = () => {
        return {
            type: basketReducerTypes.EMPTY_BASKET,
        }
    }
}

const basketActionCreator = new BasketActionCreator();
export default basketActionCreator;