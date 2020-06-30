import React, { useState } from 'react';
import useFoodSearch from './FoodSearch.js';


export default function Food() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    useFoodSearch(query, pageNumber)
    return (
        <>
            <input type='text' onChange={handleSearch}></input>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Loading...</div>
            <div>Error</div>
        </>
    )
}

