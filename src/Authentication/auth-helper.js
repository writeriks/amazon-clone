import {store} from '../reduxStore/createStore';
import authApiRequests from '../firebaseRequests/auth-api-requests';
import authReducerActionCreator from '../redux-reducer/auth-reducer/auth-action-creator'

class AuthHelper {
    async signInUser(history, email, password) {
        await authApiRequests.signInUserWithFirebase(email, password)
        history.push("/")
    }

    async registerUser(registerInfo) {
        const {email, password} = registerInfo;
        const {user} = await authApiRequests.registerUserWithFirebase(email, password)
        await authHelper.createUserDetails(registerInfo, user)
        await authHelper.getUserProfileAndSaveToRedux(user)
    }

    async createUserDetails(registerInfo, user) {
        await authApiRequests.createUserDetailsWithFirebase(registerInfo, user)
    }

    async getUserProfileAndSaveToRedux(user) {
        const profile = await authApiRequests.getCurrentFirebaseUserProfile(user.uid)
        store.dispatch(authReducerActionCreator.setUserProfile(profile))
        store.dispatch(authReducerActionCreator.setUserAuthentication(user))
    }

    removeUserFromRedux() {
        store.dispatch(authReducerActionCreator.setUserProfile(null))
        store.dispatch(authReducerActionCreator.setUserAuthentication(null))
    }
}

const authHelper = new AuthHelper();
export default authHelper;