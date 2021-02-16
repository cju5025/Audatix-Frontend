import { useRef, useEffect, useState } from 'react';
import './Checkout.css'

export default function Checkout (props) {

    const [total, setTotal] = useState(props.total);

    const paypal = useRef()

    useEffect(() => {
        const totalValue = total.toFixed(2)
        window.paypal.Buttons({
            createOrder: (data, actions, error) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: 'Sound Design',
                            amount: {
                                currency_code: "USD",
                                value: totalValue
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