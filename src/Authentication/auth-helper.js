import {store} from '../reduxStore/createStore';
import authApiRequests from '../firebaseRequests/auth-api-requests';
import authReducerActionCreator from '../redux-reducer/auth-reducer/auth-action-creator'

class AuthHelper {
    async signInUser(history, email, password) {
        const user = await authApiRequests.signInUserWithFirebase(email, password)
        if (!user) {
            console.error("ERROR : User did no return")
        }
        await authHelper.getUserProfileAndSaveToRedux(user)
        history.push("/")
    }

    async registerUser(registerInfo) {
        const {email, password} = registerInfo;
        const {user} = await authApiRequests.registerUserWithFirebase(email, password)
        if (!user) {
            console.error("ERROR : User did not register")
        }
        await authHelper.createUserDetails(registerInfo, user)
        await authHelper.getUserProfileAndSaveToRedux(user)
    }

    async createUserDetails(registerInfo, user) {
        await authApiRequests.createUserDetailsWithFirebase(registerInfo, user)
    }

    async getUserProfileAndSaveToRedux(user) {
        try {
            const profile = await authApiRequests.getCurrentFirebaseUserProfile(user.uid)
            store.dispatch(authReducerActionCreator.setUserProfile(profile))
            store.dispatch(authReducerActionCreator.setUserAuthentication(user))
        } catch (e) {
            console.log("🚀 ~ file: auth-helper.js ~ line 35 ~ AuthHelper ~ getUserProfileAndSaveToRedux ~ e", e)
        }
    }

    removeUserFromRedux() {
        store.dispatch(authReducerActionCreator.setUserProfile(null))
        store.dispatch(authReducerActionCreator.setUserAuthentication(null))
    }
}

const authHelper = new AuthHelper();
export default authHelper;