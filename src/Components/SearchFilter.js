import './SearchFilter.css';

export default function SearchFilter () {
    return (
        <div id="search-filter-container">
            <h1>Showing 1-25 of 100 sounds</h1>

            <form>
                <label>Sort By</label>
                <select name="" id="">
                    <option>Alphabetical</option>
                    <option>Price: Lowest First</option>
                    <option>Price: Highest First</option>
                </select>
            </form>
        </div>
    )
}