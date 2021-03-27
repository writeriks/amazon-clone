import React from 'react'
import {Link} from 'react-router-dom'
import CustomerRegister from './customer-register';
import SupplierRegister from './supplier-register';
import RegisterAccountSelect from './register-account-select';

import {useSelector} from 'react-redux';
import registerReducerSelector from '../redux-reducer/register-reducer/register-reducer-selector';

import './register.css'
import {registrationTypes} from '../redux-reducer/register-reducer/register-reducer-constants';

function Register() {
    const registerType = useSelector(registerReducerSelector.getRegistrationType)
    return (
        <div className="register">
            <div className="registration_banner">
                <Link to='/'>
                    <img alt="login" className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
                </Link>
            </div>
            <div className="register__container">
                <h1>Register</h1>
                <RegisterAccountSelect />
                {
                    registerType === registrationTypes.CUSTOMER ?
                        <CustomerRegister />
                        :
                        <SupplierRegister />
                }
                <button
                    type="submit"
                    className="login__signInButton">
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Register
