import {db} from "../Firebase-Backend/firebase";
import basketActionCreator from "../redux-reducer/basket-reducer/basket-action-creator";
import {store} from '../reduxStore/createStore'
class PaymentHelper {

    async confirmPaymentWithSecret(stripe, clientSecret, cardElement, user, basket) {
        const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement
            }
        })
        await db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
    }

    /**
     * creates request to stripe with received client secret from the useEffect
     * and card element from react stripe
     * 
     * @param {Object} paymentParameters contains all parameters to submit payment
     */
    async submitPayment(paymentParameters) {
        const {
            stripe,
            elements,
            CardElement,
            clientSecret,
            user,
            basket,
            history,
            setProcessing,
            setSucceeded,
            setError
        } = paymentParameters
        try {
            setProcessing(true);
            const cardElement = elements.getElement(CardElement);
            if (clientSecret) {
                await paymentHelper.confirmPaymentWithSecret(stripe, clientSecret, cardElement, user, basket)
                setSucceeded(true)
                setProcessing(false)
                setError(null)
                history.replace('/orders')
            }
            store.dispatch(basketActionCreator.emptyBasketAction())
        } catch (error) {
            console.log("Failed to submit payment", error)
        }
    }
}

const paymentHelper = new PaymentHelper()
export default paymentHelper