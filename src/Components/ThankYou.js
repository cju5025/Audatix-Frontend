import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './ThankYou.css';

export default class ThankYou extends Component {

    state = {
        user: {}
    }

    timeoutRedirect = () => {
        setTimeout(() => { 
            window.location.replace('http://localhost:3000/profilePage') 
        }, 2000)
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
                <img id="thanks-gif" src="https://media1.giphy.com/media/xULW8l2gXuRPmsQe8U/giphy.gif"/>
                <h1 id="thanks">Thanks, {this.state.user.firstName}!</h1>
                <h2 id="redirect-offer">If you don't find yourself redirected to your profile page after a few seconds, click <Link to="profilePage" id="profile-link">here</Link></h2>
                <img id="thanks-gif" src="https://media1.giphy.com/media/xULW8l2gXuRPmsQe8U/giphy.gif"/>
            </div>
        )
    }
}