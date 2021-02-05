import { Link } from 'react-router-dom';

export default function Header (props) {
        return (
            <header id="header">
                <Link id='logo-link' to='/' >
                <img 
                id="logo" 
                src="https://i.ibb.co/BwQ9hh6/7aeba71c6ab745b6b2e5cf0861a3196f.png" 
                alt="logo"
                />
                </Link>
                <button 
                id="discover-button"
                onClick={props.handleClick}
                >
                Discover
                </button>
                <input
                id="search-bar"
                type="text"
                name="search"
                placeholder="Search for Sounds..."
                />
                <Link id='signup-link' to='/signup'>
                    Sign Up
                </Link>
                <Link id='signin-link' to='/signin'>
                    Sign In
                </Link>
            </header>
        )
}