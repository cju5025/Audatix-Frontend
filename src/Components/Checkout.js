import { useRef, useEffect, useState } from 'react';
import './Checkout.css'

export default function Checkout (props) {

    const audioFiles = props.audioFiles.map(audioFile => audioFile.file)

    const [total, setTotal] = useState(props.total);

    const userID = ''

    const totalValue = total.toFixed(2)

    const paypal = useRef()

    useEffect(() => {
        console.log(`Audio Files: ${audioFiles}, user id: ${userID}`)
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
                // Thank you screen with a couple second timeout
                // helper function that creates purchaced_items
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