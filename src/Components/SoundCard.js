import './SoundCard.css';
import { Component } from 'react';

export default class SoundCard extends Component {

    state = {
        contactInfo: [],
        showContactInfo: false,
        cartButtonClicked: false
    }

    showContactInfo = () => {
        const id = this.props.sound.user_id
        fetch(`http://localhost:4000/users/${id}`)
            .then(response => response.json())
            .then(result => result.user)
            .then(user => this.setState({ 
                contactInfo: [user.firstName, user.lastName, user.email],
                showContactInfo: !this.state.showContactInfo 
            }))
    }

    addToCart = () => {
        if (!this.state.cartButtonClicked){
            fetch('http://localhost:4000/cartItems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cartItem: {
                    userID: this.props.userID,
                    soundID: this.props.sound.id,
                    price: this.props.sound.price,
                    soundUploaderID: this.props.sound.user_id
                    }
                })
            }).then(response => response.json())
            .then(result => result.cartItem[0])
            .then(item => this.props.addItemToCartItems(item))
            .then(this.setState({ cartButtonClicked: true }))
        }
    }

    render () {
        return (
            <div id="sound-card-container">
                <div id="sound-card">
                    <div id="name-and-creator">
                        <div id="name">
                            <h1>{this.props.sound.name}</h1>
                        </div>
                        <div id="contact">
                            <button onClick={this.showContactInfo}>Contact the Creator</button>
                        </div>
                    </div>
                    <div id="category-and-cart-button">
                        <div id="category">
                            <h2>{this.props.sound.category}</h2>
                        </div>
                        <button onClick={this.addToCart}>Add To Cart</button>
                    </div>
                    <div id="price">
                        <h3>${this.props.sound.price}</h3>
                    </div>
                    <div id="audio">
                        <audio src={this.props.sound.location} controls controlsList="nodownload" />
                    </div>
                </div>
                {
                this.state.showContactInfo
                ?
                <div id="contact-info">
                    <p>{this.state.contactInfo[0] + ' ' + this.state.contactInfo[1]}</p>
                    <p>{this.state.contactInfo[2]}</p>
                </div>
                :
                null
                }
            </div>
            
        )
    }
}