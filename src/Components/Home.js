import { Link } from 'react-router-dom';

export default function Home () {
    // console.log(localStorage.getItem('token'))
    return (
        <div id="home">
            <p>Ready to make a living by doing what you love?</p>
            <Link to="/upload"><button>Sell Sounds</button></Link>
            <button>Purchase Sounds</button>
            <img id="home-background-image" src="https://i.ibb.co/fNnBxJ2/techy.png" />
            <img id="alien" src="https://i.ibb.co/FYw5dpd/alien-146108.png" />
        </div>
    )
}