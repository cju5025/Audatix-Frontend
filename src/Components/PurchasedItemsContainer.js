import PurchasedItemCard from "./PurchasedItemCard";
import './PurchasedItemsContainer.css';

export default function PurchasedItemsContainer (props) {
    const showItems = () => {
        return props.purchasedItems.map(item => {
            return <PurchasedItemCard item={item} />
        })
    }
    return (
        <div id="purchased-items-container">
            {showItems()}
        </div>
    )
}