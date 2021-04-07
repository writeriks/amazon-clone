import {displayReducerTypes} from './displayReducerConstants';

export const initialDisplayState = {
    popoverAnchorElement: null,
}
const displayReducer = (state = initialDisplayState, action) => {
    switch (action.type) {
        case displayReducerTypes.OPEN_MY_ACCOUNT_POPOVER:
            return {
                ...state,
                popoverAnchorElement: action.popoverAnchorElement,
            }
        case displayReducerTypes.CLOSE_POPOVER:
            return {
                ...state,
                popoverAnchorElement: null,
            }

        default:
            return state;
    }
}

export default displayReducer