import React, {useState} from 'react'
import './register.css'

function CustomerRegister() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [selectAll, setSelectAll] = useState(false);
    const [consentRegulations, setConsentRegulations] = useState(false);
    const [consentMarketingRegulations, setConsentMarketingRegulations] = useState(false);

    return (
        <section className="customer-register">
            <form className="register-form">
                <div className="register-data">
                    <p>1. Registration data</p>
                    <input type='text' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="date__of__birth">
                    <p>2. Date of Birth</p>
                    <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </div>
                <div className="consent">
                    <p>3. Consents and declarations</p>
                    <small>
                        * Required consents or statements
                    </small>
                    <label>
                        <input type="checkbox" value={selectAll} onChange={(e) => {setSelectAll(e.target.value)}} />
                        <small>
                            Select all
                        </small>
                    </label>

                    <hr className="seperate-line" />
                    <label>
                        <input type="checkbox" value={consentRegulations} onChange={(e) => {setConsentRegulations(e.target.value)}} />
                        <small>
                            * I  declare that I know and accept the Amazon Regulations.
                            </small>
                    </label>
                    <label>
                        <input type="checkbox" value={consentMarketingRegulations} onChange={(e) => {setConsentMarketingRegulations(e.target.value)}} />
                        <small>
                            I consent to the processing of my personal data for marketing purposes and to receive commercial information
                            from Amazon using electronic means of communication (including e-mail).
                    </small>
                    </label>
                </div>
            </form>
        </section>
    )
}

export default CustomerRegister
