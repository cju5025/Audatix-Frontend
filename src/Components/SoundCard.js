import './SoundCard.css';
export default function SoundCard (props) {
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
            <button>Add To Cart</button>
            <audio src={props.sound.location} controls />
        </div>
        </div>
        
    )
}