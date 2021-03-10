import {displayReducerTypes} from '../reducerTypes';

export const initialDisplayState = {
    anchorEl: null,
}
const displayReducer = (state = initialDisplayState, action) => {
    switch (action.type) {
        case displayReducerTypes.OPEN_MY_ACCOUNT_POPOVER:
            return {
                ...state,
                anchorEl: action.anchorEl,
            }
        case displayReducerTypes.CLOSE_POPOVER:
            return {
                ...state,
                anchorEl: null,
            }

        default:
            return state;
    }
}

export default displayReducer