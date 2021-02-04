import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class Signup extends Component {

    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordVerification: '',
        passwordMatch: true,
        redirect: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.passwordVerification === this.state.password){
            fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    }
                })
            })
            .then(this.setState({ redirect: !this.state.redirect }))
        } else {
            this.setState({ passwordMatch: !this.state.passwordMatch })
        }

    }

    render () {
        return (
        <div id="signup">
            <form id="signup-form" onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" placeholder="First Name"/>
    
                <label>Last Name</label>
                <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" placeholder="Last Name"/>
    
                <label>Username</label>
                <input onChange={this.handleChange} value={this.state.username} type="text" name="username" placeholder="Username"/>

                <label>Email</label>
                <input onChange={this.handleChange} value={this.state.email} type="text" name="email" placeholder="example@example.com" />
    
                <label>Password</label>
                <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="••••••••" />
                {
                    this.state.passwordMatch 
                    ? 
                    null 
                    : 
                    <p id="password-match-error-message">Passwords do not match</p>
                }
                <label>Verify Password</label>
                <input onChange={this.handleChange} value={this.state.passwordVerification} type="password" name="passwordVerification" placeholder="••••••••" />
    
                <input type="submit" value="Sign Up" id="sign-up-button" />
                {
                    this.state.redirect
                    ?
                    <Redirect to='/' />
                    :
                    null
                }
            </form>
        </div>
        )
    }
}
