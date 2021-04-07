import {displayReducerTypes} from './displayReducerConstants';

class DisplayActionCreator {
    openMyAccountPopover = (popoverElement) => {
        return {
            type: displayReducerTypes.OPEN_MY_ACCOUNT_POPOVER,
            popoverElement
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