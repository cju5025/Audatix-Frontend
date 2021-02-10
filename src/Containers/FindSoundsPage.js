import { Component } from 'react';
import SoundCollection from './SoundCollection';

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
            <div>
                <SoundCollection sounds={this.state.sounds} />
            </div>
        )
    }
}