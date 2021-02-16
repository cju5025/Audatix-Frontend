import { useRef, useEffect } from 'react';
import './Checkout.css'

export default function Checkout (props) {

    const paypal = useRef()

    useEffect(() => {
        console.log(props.total)
        window.paypal.Buttons({
            createOrder: (data, actions, error) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: 'Sound Design',
                            amount: {
                                currency_code: "USD",
                                value: props.total
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                window.location.replace('http://localhost:3000/profilePage');
            },
            onError: (error) => {
                console.log(error)
            }
        }).render(paypal.current)
    }, [])

        return (
            <div id="checkout-container">
            <div ref={paypal} />
            </div>
        )
}