import React from 'react'
import {useAuthValue} from '../store/authentication/AuthenticationProvider'
import accountPopoverHelper from './account-popover-helper'

function SignedInUserPopover() {
    const [{user},] = useAuthValue()

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
