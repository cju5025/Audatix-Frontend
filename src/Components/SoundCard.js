import './SoundCard.css';
export default function SoundCard (props) {

    const addToCart = () => {
        fetch('http://localhost:4000/cartItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cartItem: {
                userID: props.userID,
                soundID: props.sound.id,
                price: props.sound.price,
                soundUploaderID: props.sound.user_id
                }
            })
        })
    }

    return (
        <div id="sound-card">
        <div id="name">
            <h1>{props.sound.name}</h1>
        </div>
        <div id="category">
            <h2>{props.sound.category}</h2>
        </div>
        <div id="price">
            <h3>${props.sound.price}</h3>
        </div>
        <div id="button-and-audio">
            <button onClick={addToCart}>Add To Cart</button>
            <audio src={props.sound.location} controls />
        </div>
        </div>
        
    )
}