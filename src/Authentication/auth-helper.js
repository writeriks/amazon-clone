import {auth, db} from '../Firebase-Backend/firebase'


class AuthHelper {
    signInWithFirebase(history, email, password) {
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            }).catch((error) => {
                alert(error.message)
            })
    }

    async registerUser(email, password) {
        try {
            await auth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log("🚀 ~ file: auth-helper.js ~ line 27 ~ AuthHelper ~ registerUser ~ error", error)
        }
    }

    async createUserDetails(registerInfo) {
        const {
            user,
            registerType,
            email,
            login,
            phone,
            taxId,
            birthdate,
            consentRegulations,
            consentMarketingRegulations
        } = registerInfo;
        try {
            await db.collection('users')
                .doc(user?.id)
                .set({
                    registerType,
                    email,
                    login,
                    phone,
                    taxId,
                    birthdate,
                    consentRegulations,
                    consentMarketingRegulations
                })
        } catch (error) {
            console.log("🚀 ~ file: auth-helper.js ~ line 60 ~ AuthHelper ~ createUserDetails ~ error", error)
        }
    }
}

const authHelper = new AuthHelper();
export default authHelper;