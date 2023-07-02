import React from "react";
import { useHandleSearch } from "../../contexts/search";

function SearchBar () {

    const search = useHandleSearch();

    return (
        <input placeholder="Procure Pokemon" onChange={(event) => search(event)}></input>
    )
};

export default SearchBar;