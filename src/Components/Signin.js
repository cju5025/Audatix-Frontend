import { Component } from 'react';
import { Link } from 'react-router-dom';

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
        }).then(response => response.json())
        .then(response => {
            if (response.token) {
                localStorage.setItem('token', response.token)
                localStorage.setItem('user_id', response.user.id)
                window.location.replace('http://localhost:3000/home')
            }
            else {
                throw new Error(response)
            }
        })
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
                    <p>Don't have an account yet? <Link id='link-to-signup' to='/signup'>Register here.</Link></p>
                </form>
            </div>
        )
    }
}