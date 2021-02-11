import { Component } from 'react';
import SearchFilter from '../Components/SearchFilter';
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
                <SearchFilter />
                <SoundCollection sounds={this.state.sounds} userID={this.props.userID} />
            </div>
        )
    }
}