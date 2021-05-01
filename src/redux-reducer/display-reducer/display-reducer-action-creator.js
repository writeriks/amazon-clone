import {displayReducerTypes} from './displayReducerConstants';

class DisplayActionCreator {
    openMyAccountPopover = (popoverAnchorElement) => {
        return {
            type: displayReducerTypes.OPEN_MY_ACCOUNT_POPOVER,
            popoverAnchorElement
        }
    };

    closePopover = () => {
        return {
            type: displayReducerTypes.CLOSE_POPOVER,
        }
    };
}

const displayActionCreator = new DisplayActionCreator();
export default displayActionCreator;