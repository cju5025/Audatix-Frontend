import './App.css';
import './Meyer-Reset.css';

import { Component } from 'react';

import Header from './Components/Header';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Home from './Components/Home';
import SellSounds from './Components/SellSounds';

import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {

  state = {
    discover: false
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
                <a>Category 1</a>
                <a>Category 2</a>
                <a>Category 3</a>
                <a>Category 4</a>
            </div>
          :
          null}
          <Route path='/home' render={(routerProps) => <Home {...routerProps} />} />
          <Route path="/signup" render={(routerProps) => <Signup {...routerProps} />} />
          <Route path="/signin" render={(routerProps) => <Signin {...routerProps} />} />
          <Route path="/sellsounds" render={(routerProps) => <SellSounds {...routerProps} />} />
        </main>
        <Redirect to="/"/>
      </div>
    )
  }
}

