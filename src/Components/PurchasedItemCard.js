import { Component } from 'react';
import './PurchasedItemCard.css';

export default class PurchasedItemCard extends Component {

    state = {
        audioFile: {}
    }

    componentDidMount () {
        fetch(`http://localhost:4000/sounds/${this.props.item.itemID}`)
            .then(response => response.json())
            .then(result => result.file)
            .then(audioFile => this.setState({ audioFile: audioFile }))
    }
    render () {
        return (
            <div id="purchased-item-card">
                <div>
                    <div id="name-and-creator">
                        <div id="name">
                            <h1>{this.state.audioFile.name}</h1>
                        </div>
                        <div id="contact">
                            <button>Contact the Creator</button>
                        </div>
                    </div>
                    <div id="category">
                        <h2>{this.state.audioFile.category}</h2>
                    </div>
                    <div id="audio">
                        <audio src={this.state.audioFile.location} controls />
                    </div>
                </div>
            </div>
        )
    }
}