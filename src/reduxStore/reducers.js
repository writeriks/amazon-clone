import {combineReducers} from 'redux';
import authReducer from '../redux-reducer/auth-reducer/auth-reducer';
import basketReducer from '../redux-reducer/basket-reducer/basket-reducer';
import displayReducer from '../redux-reducer/display-reducer/display-reducer';
import registerReducer from '../redux-reducer/register-reducer/register-reducer';

const reducers = combineReducers({
    auth: authReducer,
    basket: basketReducer,
    display: displayReducer,
    register: registerReducer,
});

export default reducers;