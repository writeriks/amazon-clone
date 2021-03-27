import React, {useState} from 'react'

import {useSelector} from 'react-redux';
import registerReducerSelector from '../redux-reducer/register-reducer/register-reducer-selector'

import './register.css'

import registrationHelper from './registration-helper';

function CustomerRegister() {
    const {
        handleEmailChange,
        handlePasswordChange,
        handleBirthdateChange,
        handleRegistrationConsent,
        handleMarketingConsent,
        handleSelectAllRegulations,
    } = registrationHelper;

    const email = useSelector(registerReducerSelector.getEmail)
    const password = useSelector(registerReducerSelector.getPassword)
    const birthdate = useSelector(registerReducerSelector.getBirthdate)
    const consentRegulations = useSelector(registerReducerSelector.getConsentRegulations)
    const consentMarketingRegulations = useSelector(registerReducerSelector.getMarketingRegulations)

    const [selectAll, setSelectAll] = useState(false);

    return (
        <section className="customer-register">
            <div className="register-data">
                <p>1. Registration data</p>
                <input type='text' placeholder="Email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
                <input type='password' placeholder="Password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
            </div>
            <div className="date__of__birth">
                <p>2. Date of Birth</p>
                <input type="date" value={birthdate} onChange={(e) => handleBirthdateChange(e.target.value)} />
            </div>
            <div className="consent">
                <p>3. Consents and declarations</p>
                <small>
                    * Required consents or statements
                    </small>
                <label>
                    <input type="checkbox" checked={selectAll} onChange={(e) => {handleSelectAllRegulations(e.target.checked, setSelectAll)}} />
                    <small>
                        Select all
                        </small>
                </label>

                <hr className="seperate-line" />
                <label>
                    <input type="checkbox" checked={consentRegulations} onChange={(e) => {handleRegistrationConsent(e.target.checked)}} />
                    <small>
                        * I  declare that I know and accept the Amazon Regulations.
                            </small>
                </label>
                <label>
                    <input type="checkbox" checked={consentMarketingRegulations} onChange={(e) => {handleMarketingConsent(e.target.checked)}} />
                    <small>
                        I consent to the processing of my personal data for marketing purposes and to receive commercial information
                        from Amazon using electronic means of communication (including e-mail).
                    </small>
                </label>
            </div>
        </section>
    )
}

export default CustomerRegister
