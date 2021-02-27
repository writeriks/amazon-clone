class PaymentHelper {

    async confirmPaymentWithoutSecret(stripe, elements, cardElement) {
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        return {error, paymentMethod}
    }

    async confirmPaymentWithSecret(stripe, clientSecret, cardElement) {
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement
            }
        })

        return result
    }
}

const paymentHelper = new PaymentHelper()
export default paymentHelper