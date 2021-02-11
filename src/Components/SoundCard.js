export default function SoundCard (props) {
    return (
        <div id="sound-card">
            <h1>{props.sound.name}</h1>
            <h2>{props.sound.category}</h2>
            <h3>${props.sound.price}</h3>
            <img src="" />
            <audio src={props.sound.location} controls />
        </div>
    )
}