export default function SoundCard (props) {
    return (
        <div id="sound-card">
            <h1>{props.sound.name}</h1>
            <h2>{props.sound.category}</h2>
            <h3>$1</h3>
            <audio src={props.sound.location} controls />
        </div>
    )
}