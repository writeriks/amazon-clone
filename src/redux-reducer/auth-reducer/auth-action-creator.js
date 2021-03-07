import {reducerTypes} from "../reducerTypes";

class AuthReducerActionCreator {
    setUserAuthentication(user) {
        return {
            type: reducerTypes.SET_USER,
            user: user
        }
    }
}

const authReducerActionCreator = new AuthReducerActionCreator()
export default authReducerActionCreator