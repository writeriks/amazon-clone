import {reducerTypes} from '../reducerTypes';


class BasketActionCreator {
    addToBasketAction = (item) => {
        return {
            type: reducerTypes.ADD_TO_BASKET,
            item
        }
    };

    removeFromBasketAction = (id) => {
        return {
            type: reducerTypes.REMOVE_FROM_BASKET,
            id: id,
        }
    };

    emptyBasketAction = () => {
        return {
            type: reducerTypes.EMPTY_BASKET,
        }
    }
}

const basketActionCreator = new BasketActionCreator();
export default basketActionCreator;