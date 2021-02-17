import { Component } from 'react';
import SoundCard from '../Components/SoundCard';

export default class SoundCollection extends Component {

    state = {
    }

    toggleContactInfo = () => {
        
    }

    showSounds () {
        return this.props.sounds.map(sound => {
            return <SoundCard sound={sound} key={sound.id} userID={this.props.userID} addItemToCartItems={this.props.addItemToCartItems}/>
        })
    }

    render() {
        return (
            <div id="sound-collection">
            {this.showSounds()}
            </div>
        )
    }
}