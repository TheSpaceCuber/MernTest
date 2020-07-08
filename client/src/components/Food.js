import React, { useState } from 'react';
import useFoodSearch from './FoodSearch.js';
import './Food.css';


export default function Food() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const limit = useState(25)

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    const {
        posts,
        hasMore,
        loading,
        error
    } = useFoodSearch(query, pageNumber,limit)

    return (
        <>
            <input type='text' onChange={handleSearch}></input>
            <div className='data'>
            {posts.map((post, index) => {
                return <div className='event' key={index}>
                    <p className='event-message-content'>{post.message_content}</p>
                    <a className="waves-effect waves-light btn" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                    <p className='event-message-date'>{post.message_date}</p>
                    
                    </div>
            })}
            </div>
            <div>Loading...</div>
            <div>Error</div>
        </>
    )
}

