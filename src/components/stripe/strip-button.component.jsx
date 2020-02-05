import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_EjGQgGJXVuqdDg5H9zPVto4L00kkc91ew1';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    };

    return(
        <StripeCheckout
            label={'Pay Now'}
            stripeKey={publishableKey}
            name={'CRWN Clothing Ltd.'}
            billingAddress
            shippingAddress
            image={'https://svgshare.com/i/CUz.svg'}
            token={onToken}
            amount={priceForStripe}
            description={`Your total is $${price}`}
            panelLabel={'Pay Now'}
        />
    )
};

export default StripeCheckoutButton;