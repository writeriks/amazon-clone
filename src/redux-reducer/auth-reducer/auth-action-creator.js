import {authReducerTypes} from "../reducerTypes";

class AuthReducerActionCreator {
    setUserAuthentication(user) {
        return {
            type: authReducerTypes.SET_USER,
            user: user
        }
    }
}

const authReducerActionCreator = new AuthReducerActionCreator()
export default authReducerActionCreator