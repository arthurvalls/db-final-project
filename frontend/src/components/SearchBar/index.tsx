import React from "react";
import './style.css'
import { useHandleSearch } from "../../contexts/search";

function SearchBar () {

    const search = useHandleSearch();

    return (
        <div className="searchContainer">
            <input placeholder="Procure Pokemon" onChange={(event) => search(event)} className='searchBar'></input>
        </div>
    )
};

export default SearchBar;