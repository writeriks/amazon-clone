import React, {useState} from 'react'
import './register.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {accountTypes} from './account-type-constants';
import GreenRadioButton from '../Utility/green-radio-button'

function RegisterAccountSelect() {
    const [registerType, setRegisterType] = useState("customer");

    return (
        <section className="account__type" >
            <div className="account__type__select">
                <FormControlLabel
                    value={accountTypes.CUSTOMER}
                    control={
                        <GreenRadioButton
                            checked={registerType === accountTypes.CUSTOMER}
                            onChange={(e) => setRegisterType(e.target.value)}
                            value={accountTypes.CUSTOMER}
                            name="radio-button-customer"
                            inputProps={{'aria-label': 'customer'}}
                        />
                    }
                    label="Customer" />
            </div>
            <div className="account__type__select">
                <FormControlLabel
                    value={accountTypes.SUPPLIER}
                    control={
                        <GreenRadioButton
                            checked={registerType === accountTypes.SUPPLIER}
                            onChange={(e) => setRegisterType(e.target.value)}
                            value={accountTypes.SUPPLIER}
                            name="radio-button-supplier"
                            inputProps={{'aria-label': 'supplier'}}
                        />
                    }
                    label="Supplier" />
            </div>
        </section>
    )
}

export default RegisterAccountSelect
