import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './ThankYou.css';

export default class ThankYou extends Component {

    state = {
        user: {}
    }

    timeoutRedirect = () => {
        setTimeout(() => { window.location.replace('http://localhost:3000/profilePage') }, 3000)
    }

    componentDidMount = () => {

        this.timeoutRedirect()

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
                <h2>If you don't find yourself redirected to your profile page after a few seconds, click <Link to="profilePage">here</Link></h2>
            </div>
        )
    }
}