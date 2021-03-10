import {createSelector} from 'reselect';


class RootStateReducer {
    getRootStateReducer = (state) => state;

    getAuthReducer = createSelector(
        this.getRootStateReducer,
        (state) => state.auth
    );

    getBasketReducer = createSelector(
        this.getRootStateReducer,
        (state) => state.basket
    );

    getDisplayReducer = createSelector(
        this.getRootStateReducer,
        (state) => state.display
    )
}

const rootStateReducer = new RootStateReducer();
export default rootStateReducer;