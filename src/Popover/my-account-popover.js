import React from 'react'
import "./my-account-popover.css"
import NoSignedInUser from './no-signed-in-user';
import SignedInUserPopover from './signed-in-user-popover';
import authReducerSelector from '../redux-reducer/auth-reducer/auth-reducer-selector'
import {useSelector} from 'react-redux'


function MyAccount() {
    const user = useSelector(authReducerSelector.getCurrentUser)

    return (
        <div className="myAccount">
            {user ? <SignedInUserPopover /> : <NoSignedInUser />}
        </div>
    )
}

export default MyAccount
