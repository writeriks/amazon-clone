import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};
export const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));
