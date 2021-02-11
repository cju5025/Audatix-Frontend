import { Component } from 'react';

export default class Cart extends Component {

    showItems = () => {
        return this.props.cartItems.forEach(item => {
            fetch('http://localhost:4000')
        })
    }

    render () {
        return (
            <div>
                {this.showItems()}
            </div>
        )
    }
}