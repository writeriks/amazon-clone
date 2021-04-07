import {store} from '../reduxStore/createStore'
import displayActionCreator from '../redux-reducer/display-reducer/display-reducer-action-creator'

class HeaderHelper {
    openMyAccountPopover(event) {
        const anchorEl = event.currentTarget
        store.dispatch(displayActionCreator.openMyAccountPopover(anchorEl))
    }

    closeMyAccountPopover() {
        store.dispatch(displayActionCreator.closePopover())
    }
}

const headerHelper = new HeaderHelper()
export default headerHelper;