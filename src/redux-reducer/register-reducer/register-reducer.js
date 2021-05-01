import {registrationTypes, registerReducerTypes} from './register-reducer-constants';

export const initialRegisterState = {
    registrationType: registrationTypes.CUSTOMER,
    email: "",
    login: "",
    password: "",
    phone: "",
    taxId: "",
    birthDate: "",
    consentRegulations: false,
    consentMarketingRegulations: false,
}

const registerReducer = (state = initialRegisterState, action) => {
    switch (action.type) {
        case registerReducerTypes.SET_REGISTRATION_TYPE:
            return {
                ...state,
                registrationType: action.registrationType,
            }
        case registerReducerTypes.SET_EMAIL:
            return {
                ...state,
                email: action.email,
            }
        case registerReducerTypes.SET_LOGIN:
            return {
                ...state,
                login: action.login,
            }
        case registerReducerTypes.SET_PHONE_NUMBER:
            return {
                ...state,
                phone: action.phone,
            }
        case registerReducerTypes.SET_PASSWORD:
            return {
                ...state,
                password: action.password,
            }
        case registerReducerTypes.SET_TAX_ID:
            return {
                ...state,
                taxId: action.taxId,
            }
        case registerReducerTypes.SET_BIRTHDATE:
            return {
                ...state,
                birthDate: action.birthDate,
            }
        case registerReducerTypes.SET_REGISTRATION_CONSENT:
            return {
                ...state,
                consentRegulations: action.consentRegulations,
            }
        case registerReducerTypes.SET_MARKETING_CONSENT:
            return {
                ...state,
                consentMarketingRegulations: action.consentMarketingRegulations,
            }
        default:
            return state;
    }
}

export default registerReducer