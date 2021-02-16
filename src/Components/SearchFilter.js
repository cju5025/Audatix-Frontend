import './SearchFilter.css';

export default function SearchFilter () {
    return (
        <div id="search-filter-container">
            <h1>Showing 1-25 of 100 sounds</h1>

            <form id="sort-form">
                <label>Sort By:</label>
                <select name="" id="">
                    <option>Alphabetical</option>
                    <option>Price: Lowest First</option>
                    <option>Price: Highest First</option>
                </select>
            </form>

            <form id="category-form">
                <label>Category:</label>
                <br/>
                <div>
                    <input type="checkbox" value="Film & Game" id="film-and-game" />
                    <label htmlFor="film-and-game">Film & Game</label>
                </div>
                <div>
                    <input type="checkbox" value="Electronics" id="electronics"/>
                    <label htmlFor="electronics">Electronics</label>
                </div> 
                <div>
                    <input type="checkbox" value="Machine" id="machine"/>
                    <label htmlFor="machine">Machine</label>
                </div>
                <div>
                    <input type="checkbox" value="Score" id="score"/>
                    <label htmlFor="score">Score</label>
                </div>
                <div>
                    <input type="checkbox" value="Foley" id="foley"/>
                    <label htmlFor="foley">Foley</label>
                </div>
            </form>
            <form id="sub-category-form">
                <label>Sub-Category:</label>
                <br/>
                <div>
                    <input type="checkbox" value="Film & Game" id="film-and-game-sub" />
                    <label htmlFor="film-and-game-sub">Film & Game</label>
                </div>
                <div>
                    <input type="checkbox" value="Electronics" id="electronics-sub"/>
                    <label htmlFor="electronics-sub">Electronics</label>
                </div> 
                <div>
                    <input type="checkbox" value="Machine" id="machine-sub"/>
                    <label htmlFor="machine-sub">Machine</label>
                </div>
                <div>
                    <input type="checkbox" value="Score" id="score-sub"/>
                    <label htmlFor="score-sub">Score</label>
                </div>
                <div>
                    <input type="checkbox" value="Foley" id="foley-sub"/>
                    <label htmlFor="foley-sub">Foley</label>
                </div>
            </form> 
            <form id="price-form">
                <label id="price-label">Price:</label>
                <div id="min-max-container">
                <div>
                <label>Min</label>
                <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                </div>
                <div>
                <label>Max</label>
                <select>
                    <option value="∞">∞</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                </div>
                </div>
            </form>
        </div>
    )
}