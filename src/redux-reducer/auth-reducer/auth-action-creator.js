import {authReducerTypes} from "./auth-reducer-constants";

class AuthReducerActionCreator {
    setUserAuthentication(firebaseUser) {
        return {
            type: authReducerTypes.SET_FIREBASE_USER,
            firebaseUser: firebaseUser
        }
    }
    setUserProfile(profile) {
        return {
            type: authReducerTypes.SET_USER_PROFILE,
            userProfile: profile
        }
    }
}

const authReducerActionCreator = new AuthReducerActionCreator()
export default authReducerActionCreator