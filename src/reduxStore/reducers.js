import {combineReducers} from 'redux';
import authReducer from '../redux-reducer/auth-reducer/auth-reducer';
import basketReducer from '../redux-reducer/basket-reducer/basket-reducer';
import displayReducer from '../redux-reducer/display-reducer/display-reducer';

const reducers = combineReducers({
    auth: authReducer,
    basket: basketReducer,
    display: displayReducer,
});

export default reducers;