import {combineReducers} from 'redux';
import authReducer from '../redux-reducer/auth-reducer/auth-reducer';
import basketReducer from '../redux-reducer/basket-reducer/basket-reducer';

const reducers = combineReducers({
    auth: authReducer,
    basket: basketReducer,
});

export default reducers;