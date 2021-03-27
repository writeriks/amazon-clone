import React from 'react';

import {useSelector} from 'react-redux';
import registerReducerSelector from '../redux-reducer/register-reducer/register-reducer-selector';

import './register.css';
import registrationHelper from './registration-helper';

function SupplierRegister() {
    const {
        handleEmailChange,
        handlePasswordChange,
        handleLoginChange,
        handlePhoneChange,
        handleTaxIdChange
    } = registrationHelper;

    const email = useSelector(registerReducerSelector.getEmail)
    const login = useSelector(registerReducerSelector.getLogin)
    const password = useSelector(registerReducerSelector.getPassword)
    const phone = useSelector(registerReducerSelector.getPhone)
    const taxId = useSelector(registerReducerSelector.getTaxId)
    return (
        <section className="supplier-register">
            <div className="register-data">
                <p>1. Registration data</p>
                <input type='text' placeholder="Email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
                <input type='text' placeholder="Login" value={login} onChange={(e) => handleLoginChange(e.target.value)} />
                <input type='password' placeholder="Password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
                <input type='text' placeholder="Phone" value={phone} onChange={(e) => handlePhoneChange(e.target.value)} />
                <input type='text' placeholder="Tax Info" value={taxId} onChange={(e) => handleTaxIdChange(e.target.value)} />
            </div>
        </section>
    )
}

export default SupplierRegister
