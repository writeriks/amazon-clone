import {auth} from '../Firebase-Backend/firebase'

class AccountPopoverHelper {
    signOutFirebase(user) {
        if (user) {
            auth.signOut();
        }
    }
}

const accountPopoverHelper = new AccountPopoverHelper();

export default accountPopoverHelper;