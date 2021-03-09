import {auth} from '../Firebase-Backend/firebase'
import displayActionCreator from '../redux-reducer/display-reducer/display-reducer-action-creator';
import {store} from '../reduxStore/createStore'
class AccountPopoverHelper {
    signOutFirebase(user) {
        if (user) {
            auth.signOut();
        }
    }

    redirectToLogin = (history) => {
        store.dispatch(displayActionCreator.closeMyAccountPopover())
        history.push("/login")
    }

    redirectToRegister = () => {
        store.dispatch(displayActionCreator.closeMyAccountPopover())
    }
}

const accountPopoverHelper = new AccountPopoverHelper();

export default accountPopoverHelper;