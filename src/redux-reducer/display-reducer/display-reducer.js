import {displayReducerTypes} from '../reducerTypes';

export const initialDisplayState = {
    popoverElement: null,
}
const displayReducer = (state = initialDisplayState, action) => {
    switch (action.type) {
        case displayReducerTypes.OPEN_MY_ACCOUNT_POPOVER:
            return {
                ...state,
                popoverElement: action.popoverElement,
            }
        case displayReducerTypes.CLOSE_POPOVER:
            return {
                ...state,
                popoverElement: null,
            }

        default:
            return state;
    }
}

export default displayReducer