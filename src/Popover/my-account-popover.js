import React from 'react'
import "./my-account-popover.css"
import {useAuthValue} from '../store/authentication/AuthenticationProvider';
import NoSignedInUser from './no-signed-in-user';
import SignedInUserPopover from './signed-in-user-popover';


function MyAccount() {
    const [{user},] = useAuthValue();
    return (
        <div className="myAccount">
            {user ? <SignedInUserPopover /> : <NoSignedInUser />}
        </div>
    )
}

export default MyAccount
