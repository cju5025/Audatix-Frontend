import { Component } from 'react';
import CartItem from './CartItem';

export default class Cart extends Component {

    state = {
        cartItems: this.props.cartItems,
        audioFiles: []
    }

    removeItemFromCartItems = (item) => {
        this.setState({ 
            cartItems: this.state.cartItems.filter(cartItem => cartItem.id !== item.cartItemID),
            audioFiles: this.state.audioFiles.filter(audioFile => audioFile.file.id !== item.file.id)
        })
    }

    componentDidMount = () => {
        return this.state.cartItems.forEach(item => {
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
        return (
            <div id='cart-items-container'>
                {this.showItems()}
            </div>
        )
    }
}