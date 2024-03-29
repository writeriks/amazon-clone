import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';

import CustomerRegister from './customer-register';
import SupplierRegister from './supplier-register';
import RegisterAccountSelect from './register-account-select';

import {useSelector} from 'react-redux';
import registerReducerSelector from '../redux-reducer/register-reducer/register-reducer-selector';

import './register.css'
import {registrationTypes} from '../redux-reducer/register-reducer/register-reducer-constants';
import authHelper from './auth-helper';
import authReducerSelector from '../redux-reducer/auth-reducer/auth-reducer-selector';
import registrationHelper from './registration-helper';

function Register() {
    const history = useHistory();
    const {registerUser} = authHelper
    const {removeAllSelections, shouldDisableSubmitButton} = registrationHelper
    const registerType = useSelector(registerReducerSelector.getRegistrationType)
    const email = useSelector(registerReducerSelector.getEmail)
    const password = useSelector(registerReducerSelector.getPassword)
    const login = useSelector(registerReducerSelector.getLogin)
    const phone = useSelector(registerReducerSelector.getPhone)
    const taxId = useSelector(registerReducerSelector.getTaxId)
    const birthdate = useSelector(registerReducerSelector.getBirthdate)
    const consentRegulations = useSelector(registerReducerSelector.getConsentRegulations)
    const consentMarketingRegulations = useSelector(registerReducerSelector.getMarketingRegulations)
    const user = useSelector(authReducerSelector.getFirebaseUser)

    const registerInfo = {
        registerType,
        email,
        password,
        login,
        phone,
        taxId,
        birthdate,
        consentRegulations,
        consentMarketingRegulations
    }

    useEffect(() => {
        if (user) {
            history.push("/")
            removeAllSelections()
        }
    }, [user, history, removeAllSelections])

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
                    className="login__signInButton"
                    disabled={!shouldDisableSubmitButton(registerInfo)}
                    onClick={() => registerUser(registerInfo)}>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Register
