import './SearchFilter.css';
import Cart from './Cart';

export default function SearchFilter (props) {
    return (
        <div id="search-filter-container">
            <h1>Showing 1-25 of 100 sounds</h1>

            <form id="search-filter-form">
                <label>Sort By</label>
                <select name="" id="">
                    <option>Alphabetical</option>
                    <option>Price: Lowest First</option>
                    <option>Price: Highest First</option>
                </select>
            </form>

            <form>
                <label>Category:</label>
                <br/>
                    <label htmlFor="film-and-game">Film & Game</label>
                    <input type="checkbox" value="Film & Game" id="film-and-game" />

                    <label htmlFor="electronics">Electronics</label>
                    <input type="checkbox" value="Electronics" id="electronics"/>

                    <label htmlFor="machine">Machine</label>
                    <input type="checkbox" value="Machine" id="machine"/>
            </form>
            <form>
                <label>Sub-Category</label>
            </form> 
            {/* <div id="cart-section">
                <Cart cartItems={props.cartItems} />
            </div>        */}
        </div>
    )
}