import { Component } from 'react';
import SoundCard from '../Components/SoundCard';

export default class SoundCollection extends Component {

    showSounds () {
        return this.props.sounds.map(sound => {
            return <SoundCard sound={sound} key={sound.id}/>
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