import { Link } from 'react-router-dom';

export default function Header (props) {
        return (
            <header id="header">
                <Link id='logo-link' to='/' >
                <img 
                id="logo" 
                src="https://i.ibb.co/KcgHynZ/7eb338a5-abe6-45fd-92cf-b7c84fc43022-200x200.png" 
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