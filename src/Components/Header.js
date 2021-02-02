import { Component } from 'react';

export default class Header extends Component {
    state = {
        discover: false
    }

    showDiscoverDropdown = () => {
        this.setState({ discover: !this.state.discover })
    }

    render () {
        return (
            <header id="header">
                <img 
                id="logo" 
                src="https://i.ibb.co/KcgHynZ/7eb338a5-abe6-45fd-92cf-b7c84fc43022-200x200.png" 
                alt="logo"
                />
                <button 
                id="discover-button"
                onClick={this.showDiscoverDropdown}
                >
                Discover
                </button>
                {this.state.discover ?   
                <div id="discover-dropdown">
                    <a>Category 1</a>
                    <a>Category 2</a>
                    <a>Category 3</a>
                    <a>Category 4</a>
                </div>
                :
                null}
                <h1></h1>
            </header>
        )
    }
}