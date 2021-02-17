import { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Checkout from './Checkout';

import './Cart.css';

const unique = require('array-unique');


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
        //this isnt working because the id is different, lets compare soundid
        //or should we nip this when adding to cart, higher up?
        
        this.state.cartItems.forEach(item => {
            fetch(`http://localhost:4000/sounds/${item.soundID}`)
            .then(response => response.json())
            .then(result => result.file)
            .then(file => this.setState({ audioFiles: [...this.state.audioFiles, {file: file, cartItemID: item.id}]}))
        })
    }
    

    showItems = () => {
        const uniqAudioFiles = unique(this.state.audioFiles)
        console.log(uniqAudioFiles)
        return uniqAudioFiles.map(file => {
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
                <div>
                <p>Sub Total: ${subTotal.toFixed(2)} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Total: ${total.toFixed(2)}</p>
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
                    {/* <Link to="/checkout">
                    <button>Checkout</button>
                    </Link> */}
                    <Checkout key={total} total={total} audioFiles={this.state.audioFiles} userID={this.props.userID} />
                </div>
            </div>
        )
    }
}