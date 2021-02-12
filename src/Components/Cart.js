import { Component } from 'react';
import CartItem from './CartItem';

export default class Cart extends Component {

    state = {
        audioFiles: []
    }

    componentDidMount = () => {
        return this.props.cartItems.forEach(item => {
            fetch(`http://localhost:4000/sounds/${item.soundID}`)
                .then(response => response.json())
                .then(result => result.file)
                .then(file => this.setState({ audioFiles: [...this.state.audioFiles, file]}))
        })
    }

    showItems = () => {
        return this.state.audioFiles.map(file => {
            return <CartItem item={file} />
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