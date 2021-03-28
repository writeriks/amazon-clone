import {store} from '../reduxStore/createStore';
import authApiRequests from '../firebaseRequests/auth-api-requests';


class AuthHelper {
    signInUser(history, email, password) {
        authApiRequests.signInUserWithFirebase(email, password)
        history.push("/")
    }

    async registerUser(email, password) {
        authApiRequests.registerUserWithFirebase(email, password)
    }

    async createUserDetails(registerInfo) {
        authApiRequests.createUserDetailsWithFirebase(registerInfo)
    }

    async getUserProfileAndSaveToRedux(user) {
        const profile = await authApiRequests.getCurrentFirebaseUserProfile(user.uid)
        console.log("🚀 ~ file: auth-helper.js ~ line 21 ~ AuthHelper ~ getUserProfileAndSaveToRedux ~ profile", profile)
        //authHelper.setUserProfileToRedux(profile)
    }
}

const authHelper = new AuthHelper();
export default authHelper;