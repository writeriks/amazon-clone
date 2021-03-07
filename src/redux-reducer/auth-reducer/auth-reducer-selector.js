import {createSelector} from 'reselect';
import rootStateReducer from '../../redux-reducer/root-reducer-selector';

class AuthReducerSelector {
    getCurrentUser = createSelector(
        rootStateReducer.getAuthReducer,
        (authReducer) => authReducer.user
    )
}

const authReducerSelector = new AuthReducerSelector();
export default authReducerSelector;
