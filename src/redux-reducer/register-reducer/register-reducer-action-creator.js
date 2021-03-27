import {registerReducerTypes} from './register-reducer-constants';

class DisplayActionCreator {
    setRegistrationType = (registrationType) => {
        return {
            type: registerReducerTypes.SET_REGISTRATION_TYPE,
            registrationType
        }
    };
    setEmail = (email) => {
        return {
            type: registerReducerTypes.SET_EMAIL,
            email
        }
    };
    setLogin = (email) => {
        return {
            type: registerReducerTypes.SET_LOGIN,
            email
        }
    };
    setPhone = (phone) => {
        return {
            type: registerReducerTypes.SET_PHONE_NUMBER,
            phone
        }
    };
    setPassword = (password) => {
        return {
            type: registerReducerTypes.SET_PASSWORD,
            password
        }
    };
    setTaxId = (taxId) => {
        return {
            type: registerReducerTypes.SET_TAX_ID,
            taxId
        }
    };
    setBirthdate = (birthDate) => {
        return {
            type: registerReducerTypes.SET_BIRTHDATE,
            birthDate
        }
    };
    setRegistrationConsent = (consentRegulations) => {
        return {
            type: registerReducerTypes.SET_REGISTRATION_CONSENT,
            consentRegulations
        }
    };
    setMarketingConsent = (consentMarketingRegulations) => {
        return {
            type: registerReducerTypes.SET_MARKETING_CONSENT,
            consentMarketingRegulations
        }
    };
}

const displayActionCreator = new DisplayActionCreator();
export default displayActionCreator;