import React, {useContext} from 'react';
import SearchContext from "../utils/SearchContext";

function SearchBar() {

    const context = useContext(SearchContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="search-area col-4">

                <div className="searchbox">
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={e => context.handleSearchChange(e)}
                        />
                        <button className="btn my-2 my-sm-0" type="submit">
                            Search
                 </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default SearchBar;