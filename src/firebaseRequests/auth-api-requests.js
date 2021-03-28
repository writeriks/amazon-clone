import {auth, db} from '../Firebase-Backend/firebase'


class AuthApiRequests {

    async signInUserWithFirebase(email, password) {
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log("🚀 ~ file: auth-api-requests.js ~ line 10 ~ AuthApiRequests ~ signInUserWithFirebase ~ error", error)
        }
    }

    async registerUserWithFirebase(email, password) {
        try {
            await auth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log("🚀 ~ file: auth-api-requests.js ~ line 18 ~ AuthApiRequests ~ registerUserWithFirebase ~ error", error)
        }
    }

    async createUserDetailsWithFirebase(registerInfo) {
        try {
            const {
                user, registerType, email, login, phone,
                taxId, birthdate, consentRegulations, consentMarketingRegulations
            } = registerInfo;
            await db.collection('users')
                .doc(user?.uid)
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
            console.log("🚀 ~ file: auth-api-requests.js ~ line 41 ~ AuthApiRequests ~ createUserDetailsWithFirebase ~ error", error)
        }
    }

    async getCurrentFirebaseUserProfile(userId) {
        try {
            const profileRef = db.collection('users').doc(userId);
            const profile = await profileRef.get()
            return profile.data()
        } catch (error) {
            console.log("🚀 ~ file: auth-api-requests.js ~ line 49 ~ AuthApiRequests ~ getCurrentFirebaseUserProfile ~ error", error)
        }

    }
}

const authApiRequests = new AuthApiRequests()
export default authApiRequests;