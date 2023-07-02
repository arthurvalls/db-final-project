import React, { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext('');
const HandleSearchContext = createContext((event: any) => {});

export const SearchProvider = ({ children } : any) => {
    
    const[searchValue, setSearchValue] = useState('');

    const handleSearch = (event : any) => {
        setSearchValue(event.target.value);
    };

    return (
        <SearchContext.Provider value={searchValue}>
            <HandleSearchContext.Provider value={handleSearch}>
                { children }
            </HandleSearchContext.Provider>
        </SearchContext.Provider>
    )

};

export const useSearchValue = () => {
    const searchValue = useContext(SearchContext);

    return searchValue;
};

export const useHandleSearch = () => {
    const handleSearch = useContext(HandleSearchContext);

    return handleSearch;
}

