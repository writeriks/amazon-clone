import {store} from '../reduxStore/createStore';
import registerReducerActionCreator from '../redux-reducer/register-reducer/register-reducer-action-creator';

class RegistrationHelper {
    handleRegistrationType(registrationType) {
        store.dispatch(registerReducerActionCreator.setRegistrationType(registrationType))
        registrationHelper.removeAllSelections()
    }

    handleEmailChange(email) {
        store.dispatch(registerReducerActionCreator.setEmail(email))
    }

    handleLoginChange(login) {
        store.dispatch(registerReducerActionCreator.setLogin(login))
    }

    handlePasswordChange(password) {
        store.dispatch(registerReducerActionCreator.setPassword(password))
    }

    handlePhoneChange(phone) {
        store.dispatch(registerReducerActionCreator.setPhone(phone))
    }

    handleTaxIdChange(taxId) {
        store.dispatch(registerReducerActionCreator.setTaxId(taxId))
    }

    handleBirthdateChange(birthdate) {
        store.dispatch(registerReducerActionCreator.setBirthdate(birthdate))
    }

    handleRegistrationConsent(checked) {
        store.dispatch(registerReducerActionCreator.setRegistrationConsent(checked))
    }

    handleMarketingConsent(checked) {
        store.dispatch(registerReducerActionCreator.setMarketingConsent(checked))
    }

    handleSelectAllRegulations(checked, setSelectAll) {
        setSelectAll(checked);
        if (checked) {
            store.dispatch(registerReducerActionCreator.setRegistrationConsent(true))
            store.dispatch(registerReducerActionCreator.setMarketingConsent(true))
        } else {
            store.dispatch(registerReducerActionCreator.setRegistrationConsent(false))
            store.dispatch(registerReducerActionCreator.setMarketingConsent(false))
        }
    }

    removeAllSelections() {
        store.dispatch(registerReducerActionCreator.setEmail(""))
        store.dispatch(registerReducerActionCreator.setLogin(""))
        store.dispatch(registerReducerActionCreator.setPassword(""))
        store.dispatch(registerReducerActionCreator.setPhone(""))
        store.dispatch(registerReducerActionCreator.setTaxId(""))
        store.dispatch(registerReducerActionCreator.setBirthdate(""))
        store.dispatch(registerReducerActionCreator.setRegistrationConsent(false))
        store.dispatch(registerReducerActionCreator.setMarketingConsent(false))
    }
}

const registrationHelper = new RegistrationHelper()
export default registrationHelper;