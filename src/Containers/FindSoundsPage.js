import { Component } from 'react';
import SearchFilter from '../Components/SearchFilter';
import SoundCollection from './SoundCollection';

import './FindSoundsPage.css';

export default class FindSoundsPage extends Component {
    state = {
        sounds: []
    }

    componentDidMount () {
        fetch('http://localhost:4000/sounds')
            .then(response => response.json())
            .then(response => response.files)
            .then(sounds => this.setState({ sounds: sounds }))
    }


    render() {
        return (
            <div id="find-sounds-page">
                <SearchFilter cartItems={this.props.cartItems} />
                <SoundCollection sounds={this.state.sounds} userID={this.props.userID} addItemToCartItems={this.props.addItemToCartItems} />
            </div>
        )
    }
}