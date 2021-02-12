import './CartItem.css';

export default function CartItem (props) {

    const removeFromCart = () => {
        const id = props.item.cartItemID
        fetch(`http://localhost:4000/cartitems/${id}`, { method: 'DELETE' })
    }

    return (
        <div id='cart-item'>
            <h1>{props.item.file.name}</h1>
            <h2>${props.item.file.price}</h2>
            <audio src={props.item.file.location} controls />
            <button onClick={removeFromCart}>Remove From Cart</button>
        </div>
    )
}