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
                            className="form-control bg-warning mr-sm-2"
                            type="search"
                            placeholder="Search(WIP)"
                            aria-label="Search"
                            // onChange={e => context.handleSearch(e)}
                        />
                        <button className="btn btn-danger" type="submit">
                            Search
                 </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default SearchBar;