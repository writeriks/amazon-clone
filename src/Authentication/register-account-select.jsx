import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import GreenRadioButton from '../Utility/green-radio-button';

import {useSelector} from 'react-redux';
import registerReducerSelector from '../redux-reducer/register-reducer/register-reducer-selector'
import {registrationTypes} from '../redux-reducer/register-reducer/register-reducer-constants';
import registrationHelper from './registration-helper';

import './register.css'

function RegisterAccountSelect(props) {
    const {handleRegistrationType} = registrationHelper;
    const registerType = useSelector(registerReducerSelector.getRegistrationType)

    return (
        <section className="account__type" >
            <div className="account__type__select">
                <FormControlLabel
                    value={registrationTypes.CUSTOMER}
                    control={
                        <GreenRadioButton
                            checked={registerType === registrationTypes.CUSTOMER}
                            onChange={(e) => handleRegistrationType(e.target.value)}
                            value={registrationTypes.CUSTOMER}
                            name="radio-button-customer"
                            inputProps={{'aria-label': 'customer'}}
                        />
                    }
                    label="Customer" />
            </div>
            <div className="account__type__select">
                <FormControlLabel
                    value={registrationTypes.SUPPLIER}
                    control={
                        <GreenRadioButton
                            checked={registerType === registrationTypes.SUPPLIER}
                            onChange={(e) => handleRegistrationType(e.target.value)}
                            value={registrationTypes.SUPPLIER}
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
