import {reducerTypes} from '../reducerTypes';

export const initialAuthState = {
    user: null,
}


const authReducer = (state, action) => {
    switch (action.type) {
        case reducerTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default authReducer;