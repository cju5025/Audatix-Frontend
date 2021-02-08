import { Component } from 'react';

export default class Signin extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user: {
                email: this.state.email,
                password: this.state.password
            }})
        }).then(response => {
            if (!response.ok) throw new Error('Incorrect email or password')
            return response.json()
        }).then(response => localStorage.setItem('token', response.token))
        .catch(error => alert(error.message))
    }

    render () {
        return (
            <div id="sign-in">
                <form id="sign-in-form" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input onChange={this.handleChange} value={this.state.email} type="text" name="email" placeholder="example@example.com" />
    
                    <label>Password</label>
                    <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="••••••••" />
    
                    <input type="submit" value="Sign In" id="sign-in-button" />
                </form>
            </div>
        )
    }
}