import { Component } from 'react';

export default class Header extends Component {

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
                onClick={this.props.handleClick}
                >
                Discover
                </button>
                <input
                id="search-bar"
                type="text"
                name="search"
                placeholder="Search for Sounds..."
                />
            </header>
        )
    }
}