import {auth} from '../Firebase-Backend/firebase'


class LoginHelper {

    signInWithFirebase(history, email, password) {
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            }).catch((error) => {
                alert(error.message)
            })
    }
}

const loginHelper = new LoginHelper();
export default loginHelper;