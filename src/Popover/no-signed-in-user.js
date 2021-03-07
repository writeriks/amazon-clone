import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function NoSignedInUser() {
    const history = useHistory()
    const redirectLogin = () => {
        history.push("/login")
    }
    return (
        <>
            <div className="myAccount__Section">
                <button onClick={redirectLogin}>Login</button>
            </div>

            <div className="myAccount__Section">
                <small>
                    Dont have an Account? Please&nbsp;
                    <Link to="/Register">
                        Register
                    </Link>
                </small>
            </div>
        </>
    )
}

export default NoSignedInUser
