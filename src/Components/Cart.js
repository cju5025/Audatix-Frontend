import { Component } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';

import './Cart.css';

export default class Cart extends Component {

    state = {
        cartItems: this.props.cartItems,
        audioFiles: [],
        subTotal: 0,
        tax: 0,
        total: 0
    }

    removeItemFromCartItems = (item) => {
        this.setState({ 
            cartItems: this.state.cartItems.filter(cartItem => cartItem.id !== item.cartItemID),
            audioFiles: this.state.audioFiles.filter(audioFile => audioFile.file.id !== item.file.id)
        })
    }

    componentDidMount = () => {
        this.state.cartItems.forEach(item => {
            fetch(`http://localhost:4000/sounds/${item.soundID}`)
            .then(response => response.json())
            .then(result => result.file)
            .then(file => this.setState({ audioFiles: [...this.state.audioFiles, {file: file, cartItemID: item.id}]}))
        })
    }
    

    showItems = () => {
        return this.state.audioFiles.map(file => {
            return <CartItem item={file} key={file.id} removeItemFromCartItems={this.removeItemFromCartItems} />
        })
    }

    render () {
        const prices = this.state.audioFiles.map(file => file.file.price);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const subTotal = prices.length > 0 ? prices.reduce(reducer) : 0
        const tax = (subTotal * 0.06)
        const total = (subTotal + tax)

        const showTotals = () => {
            return (
                <div id="totals-container">
                <div id="totals-labels-container">
                <p>Subtotal:</p>
                <p>Tax:</p>
                <p>Total:</p>
                </div>
                <div id="totals-values-container">
                <p>${subTotal.toFixed(2)} </p>
                <p>${tax.toFixed(2)}</p>
                <p>${total.toFixed(2)}</p>
                </div>
                </div>
            )
        }

        return (
            <div id="cart-page">
                <div id='cart-items-container'>
                    {this.showItems()}
                </div>
                <div id="totals">
                {showTotals()}
                    <Checkout key={total} total={total} audioFiles={this.state.audioFiles} userID={this.props.userID} />
                </div>
            </div>
        )
    }
}