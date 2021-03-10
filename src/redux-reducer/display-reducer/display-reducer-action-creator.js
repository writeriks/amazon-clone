import {displayReducerTypes} from '../reducerTypes';

class DisplayActionCreator {
    openMyAccountPopover = (anchorEl) => {
        return {
            type: displayReducerTypes.OPEN_MY_ACCOUNT_POPOVER,
            anchorEl
        }
    };

    closeMyAccountPopover = () => {
        return {
            type: displayReducerTypes.CLOSE_POPOVER,
        }
    };
}

const displayActionCreator = new DisplayActionCreator();
export default displayActionCreator;