import {db} from "../Firebase-Backend/firebase";
class PaymentHelper {

    async confirmPaymentWithoutSecret(stripe, elements, cardElement) {
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        return {error, paymentMethod}
    }

    async confirmPaymentWithSecret(stripe, clientSecret, cardElement, user, basket) {
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement
            }
        }).then(({paymentIntent}) => {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            return paymentIntent
        })


        return result
    }
}

const paymentHelper = new PaymentHelper()
export default paymentHelper