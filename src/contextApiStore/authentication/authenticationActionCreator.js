import {reducerTypes} from '../reducerTypes';

export const setUserAuthentication = (user, dispatch) => {
    dispatch(
        {
            type: reducerTypes.SET_USER,
            user: user
        }
    )
}
