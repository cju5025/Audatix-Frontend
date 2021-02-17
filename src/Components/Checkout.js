import { useRef, useEffect, useState } from 'react';
import './Checkout.css'

export default function Checkout (props) {

    const audioFileIDs = props.audioFiles.map(audioFile => audioFile.file.id)

    const [total, setTotal] = useState(props.total);

    const userID = props.userID

    const totalValue = total.toFixed(2)

    const paypal = useRef()

    const createPurchasedItems = () => {
        audioFileIDs.forEach(audioFileID => {
            fetch('http://localhost:4000/purchasedItems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    purchasedItem: {
                        userID: userID,
                        itemID: audioFileID,
                    }
                })
            })
        })
    }

    useEffect(() => {
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
                // const order = await actions.order.capture()
                // Thank you screen with a couple second timeout
                createPurchasedItems()
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