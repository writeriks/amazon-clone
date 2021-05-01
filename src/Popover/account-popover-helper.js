import {auth} from '../Firebase-Backend/firebase'
import displayActionCreator from '../redux-reducer/display-reducer/display-reducer-action-creator';
import {store} from '../reduxStore/createStore'
class AccountPopoverHelper {
    signOutFirebase(user) {
        if (user) {
            auth.signOut();
            store.dispatch(displayActionCreator.closePopover())
        }
    }

    redirectToLogin = (history) => {
        store.dispatch(displayActionCreator.closePopover())
        history.push("/login")
    }

    redirectToRegister = () => {
        store.dispatch(displayActionCreator.closePopover())
    }
}

const accountPopoverHelper = new AccountPopoverHelper();

export default accountPopoverHelper;