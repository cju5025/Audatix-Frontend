export default function SoundCard (props) {
    return (
        <div id="sound-card">
            <h1>{props.sound.name}</h1>
            {/* <h1>{props.sound.category}</h1> */}
            <audio src={props.sound.location} controls />
        </div>
    )
}