import { Link } from 'react-router-dom';
import { Component } from 'react';

export default class Home extends Component {

    render () {
        return (
            <div id="home">
                <p>Ready to make a living by doing what you love?</p>
                <Link to="/upload"><button>Upload Sounds</button></Link>
                <Link to="/soundCollection"><button>Find Sounds</button></Link>
                <img id="home-background-image" src="https://i.ibb.co/fNnBxJ2/techy.png" />
                <img id="alien" src="https://i.ibb.co/FYw5dpd/alien-146108.png" />
            </div>
        )
    }
}