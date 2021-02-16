import './App.css';
import './Meyer-Reset.css';

import { Component } from 'react';

import Header from './Components/Header';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Home from './Components/Home';
import Upload from './Components/Upload';
import FindSoundsPage from './Containers/FindSoundsPage';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import UploadContainer from './Containers/UploadContainer';
import ProfilePage from './Components/ProfilePage';

import { Route, Redirect } from 'react-router-dom';

// Client ID AazB4ztMTc-OC1tHIS37H1JY_g4lBVKXjKxjg2qjn9DWRZ_aiTqW0ADaafGP8aVJLgTfUxAPgDeRE9zP

export default class App extends Component {

  state = {
    discover: false,
    userID: parseInt(localStorage.getItem('user_id')),
    cartItems: []
  }

  addItemToCartItems = (item) => {
    this.setState({ cartItems: [...this.state.cartItems, item]})
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/cartitems')
      .then(response => response.json())
      .then(result => result.items)
      .then(items => this.setState({ cartItems: items }))
  }

  showDiscoverDropdown = () => {
    this.setState({ discover: !this.state.discover })
}

  render () {
    return (
      <div id="App">
        <Header handleClick={this.showDiscoverDropdown}/>
        <main id="main">
          {this.state.discover ?   
            <div id="discover-dropdown">
                <a>Film</a>
                <a>Game</a>
                <a>Electronics</a>
                <a>Machine</a>
                <a>Foley</a>
            </div>
          :
          null}
          <Route path='/home' render={(routerProps) => <Home {...routerProps} />} />
          <Route path="/signup" render={(routerProps) => <Signup {...routerProps} />} />
          <Route path="/signin" render={(routerProps) => <Signin {...routerProps} />} />
          <Route path="/upload" render={(routerProps) => <Upload {...routerProps} userID={this.state.userID} />} />
          <Route path="/soundCollection" render={(routerProps) => <FindSoundsPage {...routerProps} userID={this.state.userID} cartItems={this.state.cartItems} addItemToCartItems={this.addItemToCartItems} />} />
          <Route path="/cart" render={(routerProps) => <Cart {...routerProps} cartItems={this.state.cartItems} />} />
          <Route path='/checkout' render={(routerProps) => <Checkout {...routerProps} /> } />
          <Route path='/profilePage' render={(routerProps) => <ProfilePage {...routerProps} userID={this.state.userID} /> } />
        </main>
        {/* <Redirect to="/home"/> */}
      </div>
    )
  }
}

