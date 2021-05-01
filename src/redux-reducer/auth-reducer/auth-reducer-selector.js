import {createSelector} from 'reselect';
import rootStateReducer from '../../redux-reducer/root-reducer-selector';

class AuthReducerSelector {
    getFirebaseUser = createSelector(
        rootStateReducer.getAuthReducer,
        (authReducer) => authReducer.firebaseUser
    )
    getUserProfile = createSelector(
        rootStateReducer.getAuthReducer,
        (authReducer) => authReducer.userProfile
    )
}

const authReducerSelector = new AuthReducerSelector();
export default authReducerSelector;
