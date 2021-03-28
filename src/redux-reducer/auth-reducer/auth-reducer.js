import {authReducerTypes} from './auth-reducer-constants';

export const initialAuthState = {
    firebaseUser: null,
    userProfile: null,
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case authReducerTypes.SET_FIREBASE_USER:
            return {
                ...state,
                firebaseUser: action.firebaseUser
            }
        case authReducerTypes.SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        default:
            return state;
    }
};

export default authReducer;