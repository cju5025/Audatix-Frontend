import { Link } from 'react-router-dom';
import './Header.css';

export default function Header (props) {
    
    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        window.location.reload()
    }

        return (
            <header id="header">
                <Link id='logo-link' to='/home' >
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
                {
                    localStorage.getItem('token')
                    ?
                    <>
                    <Link to='/profilePage'>
                    <img id="user-icon" src="https://i.ibb.co/5KKGT06/USERICON-removebg-preview.png" />
                    </Link>
                    <Link to="/cart">
                    <img id="cart-image" src="https://i.ibb.co/cYPhFMJ/image.png" />
                    </Link>
                    <Link id='signout-link' to='/home' onClick={signOut}>
                    Sign Out
                    </Link>
                    </>
                    :
                    <div>
                    <Link id='signup-link' to='/signup'>
                    Sign Up
                    </Link>
                    <Link id='signin-link' to='/signin'>
                    Sign In
                    </Link>
                    </div>
                }
            </header>
        )
}