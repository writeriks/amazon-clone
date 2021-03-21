import React, {useState} from 'react'
import './register.css'


function CustomerRegister() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className="form">
            <div>
                <p>1. Registration data</p>
                <input type='text' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="date__of__birth">
                2. Date of Birth
                <input type="date" />
            </div>
            <div className="consent">
                3. Consents and declarations
                * Required consents or statements
                <label>
                    <input type="checkbox" />
                    Select all
                </label>
                <label>
                    <input type="checkbox" />
                    * I  declare that I know and accept the Amazon Regulations.
                </label>
                <label>
                    <input type="checkbox" />
                    I consent to the processing of my personal data for marketing purposes and to receive commercial information from Allegro.pl sp. Z oo using electronic means of communication (including e-mail). Expand
                </label>
            </div>
        </section>
    )
}

export default CustomerRegister
