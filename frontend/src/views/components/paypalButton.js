import React, { useState, useEffect } from 'react';
import {NotificationDialog} from "./notification";

function PaypalButton() {
    const [paypalReady, setPaypalReady] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AbnS0tQTmT1dkeisoVms2eZinp2mtkGvZwOPmeE2iS7KVo6NdZt6XFpsJM_qQ1VrdbWamqldmUIgCAPa`;
        script.addEventListener('load', () => setPaypalReady(true));
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (paypalReady) {
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: '100.00', // replace with the actual amount
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: (data, actions) => {
                        return actions.order.capture().then((details) => {
                            // alert('Transaction completed by ' + details.payer.name.given_name);
                            // Call your server to save the transaction

                            // NotificationDialog({
                            //     title: "Payment Successful",
                            //     message: "Thank you for your payment",
                            //     confirmText: "OK",
                            //     onConfirm: () => {
                            //         window.location.href = "/";
                            //     }
                            // });
                        
                        });
                    },
                    onDecline: (err) => {
                        console.log(err);
                    },
                })
                .render('#paypal-button-container');
        }
    }, [paypalReady]);

    if (!paypalReady) {
        return <div>Loading...</div>;
    }

    return <div id="paypal-button-container"></div>;
}

export default PaypalButton;
