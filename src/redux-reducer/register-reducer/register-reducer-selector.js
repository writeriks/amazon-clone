import {createSelector} from 'reselect';
import rootStateReducer from '../../redux-reducer/root-reducer-selector';

class RegisterReducerSelector {
    getRegistrationType = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.registrationType
    )
    getEmail = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.email
    )
    getLogin = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.login
    )
    getPhone = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.phone
    )
    getPassword = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.password
    )
    getTaxId = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.taxId
    )
    getBirthdate = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.birthDate
    )
    getConsentRegulations = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.consentRegulations
    )
    getMarketingRegulations = createSelector(
        rootStateReducer.getRegisterReducer,
        (registerReducer) => registerReducer.consentMarketingRegulations
    )
}

const registerReducerSelector = new RegisterReducerSelector();
export default registerReducerSelector;