import { Component } from 'react';
import PurchasedItemsContainer from './PurchasedItemsContainer';
import './ProfilePage.css';

export default class ProfilePage extends Component {

    state = {
        user: {},
        purchasedItems: [],
    }

    componentDidMount = () => {
        const userID = this.props.userID

        fetch(`http://localhost:4000/users/${userID}`)
            .then(response => response.json())
            .then(result => result.user)
            .then(user => this.setState({ user: user }))

            fetch('http://localhost:4000/purchasedItems')
                .then(response => response.json())
                .then(result => result.items)
                .then(items => items.filter(item => item.userID === userID))
                .then(filteredItems => this.setState({ purchasedItems: filteredItems }))
    }

    showItems = () => {
        return <PurchasedItemsContainer purchasedItems={this.state.purchasedItems} />
    }

    render () {
        return (
            <div id="profile-container">
                <div id="user-info-card">
                    <p>{this.state.user.firstName}{" "}{this.state.user.lastName}</p>
                    <p>{this.state.user.username}</p>
                    <p>{this.state.user.email}</p>
                </div>
                    {this.showItems()}
            </div>
        )
    }
}