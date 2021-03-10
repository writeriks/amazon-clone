import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import accountPopoverHelper from './account-popover-helper'

function NoSignedInUser() {
    const history = useHistory()

    const {redirectToLogin, redirectToRegister} = accountPopoverHelper;

    return (
        <>
            <div className="myAccount__Section">
                <button onClick={() => redirectToLogin(history)}>Login</button>
            </div>

            <div className="myAccount__Section">
                <small>
                    Dont have an Account? Please&nbsp;
                    <Link to="/Register" onClick={redirectToRegister}>
                        Register
                    </Link>
                </small>
            </div>
        </>
    )
}

export default NoSignedInUser
