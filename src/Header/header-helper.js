import {store} from '../reduxStore/createStore'
import displayActionCreator from '../redux-reducer/display-reducer/display-reducer-action-creator'

class HeaderHelper {
    openMyAccountPopover(event) {
        store.dispatch(displayActionCreator.openMyAccountPopover(event.currentTarget))
    }

    closeMyAccountPopover() {
        store.dispatch(displayActionCreator.closeMyAccountPopover())
    }
}

const headerHelper = new HeaderHelper()
export default headerHelper;