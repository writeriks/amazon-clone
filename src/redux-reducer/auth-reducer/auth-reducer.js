import {authReducerTypes} from '../reducerTypes';

export const initialAuthState = {
    user: null,
    profile: {},
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case authReducerTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default authReducer;