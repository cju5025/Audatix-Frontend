import './App.css';
import './Meyer-Reset.css';

import { Component } from 'react';

import Header from './Components/Header';

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
        </main>
      </div>
    )
  }
}

