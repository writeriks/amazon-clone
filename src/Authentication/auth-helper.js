import {auth} from '../Firebase-Backend/firebase'


class AuthHelper {
    signInWithFirebase(history, email, password) {
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            }).catch((error) => {
                alert(error.message)
            })
    }
}

const authHelper = new AuthHelper();
export default authHelper;