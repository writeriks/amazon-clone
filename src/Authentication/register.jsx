import React from 'react'
import './register.css'
import RegisterAccountSelect from './register-account-select';
import {Link} from 'react-router-dom'
import CustomerRegister from './customer-register';

function Register() {

    return (
        <div className="register">
            <Link to='/'>
                <img alt="login" className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className="register__container">
                <h1>Register</h1>
                <RegisterAccountSelect />
                <CustomerRegister />
            </div>
        </div>
    )
}

export default Register
