import { Component } from 'react';
import { Link } from 'react-router-dom';

import './ThankYou.css';

export default class ThankYou extends Component {

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
    
    render(){
        return (
            <div id="thank-you-container">
                <h1 id="thanks">Thanks, {this.state.user.firstName}!</h1>
            </div>
        )
    }
}