import React, {useState} from 'react'
import './register.css'
import {withStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import {accountTypes} from './account-type-constants';


const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" size="small" {...props} />);

function RegisterAccountSelect() {
    const [registerType, setRegisterType] = useState("customer");

    return (
        <section className="account__type" >
            <div className="account__type__select">
                <FormControlLabel
                    value={accountTypes.CUSTOMER}
                    control={
                        <GreenRadio
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
                        <GreenRadio
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
