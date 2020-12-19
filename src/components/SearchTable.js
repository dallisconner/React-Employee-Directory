import React, { useContext } from "react";
import SearchBody from "./SearchBody";
import SearchContext from "../utils/SearchContext";

const SearchTable = () => {
    const context = useContext(SearchContext);

    return (

        <div className="searchtable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <SearchBody />
            </table>
        </div>
    );
}

export default SearchTable;