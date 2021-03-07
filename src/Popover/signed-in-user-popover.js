import React from 'react'
import accountPopoverHelper from './account-popover-helper'
import {useSelector} from 'react-redux'
import authReducerSelector from '../redux-reducer/auth-reducer/auth-reducer-selector'


function SignedInUserPopover() {
    const user = useSelector(authReducerSelector.getCurrentUser)
    const {signOutFirebase} = accountPopoverHelper;

    return (
        <>
            <div className="myAccount__Section">
                <small>Hello {user?.email} </small>
            </div>
            <div className="myAccount__Section">
                <button onClick={() => signOutFirebase(user)}>
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default SignedInUserPopover
