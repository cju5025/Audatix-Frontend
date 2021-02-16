import { Component } from 'react';
import './ProfilePage.css';

export default class ProfilePage extends Component {

    state = {
        user: {}
    }

    componentDidMount = () => {
        const id = this.props.userID
        fetch(`http://localhost:4000/users/${id}`)
            .then(response => response.json())
            .then(result => result.user)
            .then(user => this.setState({ user: user }))
    }

    render () {
        return (
            <div id="profile-container">
                <div id="user-info-card">
                    <p>{this.state.user.firstName}{" "}{this.state.user.lastName}</p>
                    <p>{this.state.user.username}</p>
                    <p>{this.state.user.email}</p>
                </div>
            </div>
        )
    }
}