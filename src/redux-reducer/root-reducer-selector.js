import {createSelector} from 'reselect';


class RootStateReducer {
    getRootStateReducer = (state) => state

    getAuthReducer = createSelector(
        this.getRootStateReducer,
        (state) => state.auth
    );

    getBasketReducer = createSelector(
        this.getRootStateReducer,
        (state) => state.basket
    )
}

const rootStateReducer = new RootStateReducer();
export default rootStateReducer;