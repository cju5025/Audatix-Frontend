import './CartItem.css';

export default function CartItem (props) {
    return (
        <div id='cart-item'>
            <h1>{props.item.name}</h1>
            <h2>${props.item.price}</h2>
            <audio src={props.item.location} controls />
            <button>Remove From Cart</button>
        </div>
    )
}