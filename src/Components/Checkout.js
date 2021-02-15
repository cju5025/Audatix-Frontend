import { Component } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './Checkout.css'

export default class Checkout extends Component {

    render () {
        return (
            <div id="checkout-container">
                <PayPalScriptProvider options={{ "client-id": "sb" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>
            </div>
        )
    }
}