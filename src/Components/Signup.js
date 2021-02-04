import { Component } from 'react';

export default class Signup extends Component {

    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user: this.state })
        })
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
    
                <label>Verify Password</label>
                <input type="password" name="passwordVerification" placeholder="••••••••" />
    
                <input type="submit" value="Sign Up" id="sign-up-button" />
            </form>
        </div>
        )
    }
}
