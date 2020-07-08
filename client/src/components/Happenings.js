import React, { useRef, useState, useCallback } from 'react';
import useHappeningsSearch from './HappeningsSearch.js';
import './Happenings.css';
import { BeatLoader } from 'react-spinners';


export default function Happenings() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const limit = useState(25)

    const {
        posts,
        hasMore,
        loading,
    } = useHappeningsSearch(query, pageNumber,limit)

    const observer = useRef()
    const lastPostElementRef = useCallback(node => {
        if (loading) return 
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
            setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
        console.log(node)
    }, [loading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    return (
        <>
            <input type='text' onChange={handleSearch}></input>
            <div className='data'>
            {posts.map((post, index) => {
                if (posts.length == index + 1) {
                    return <div className='event' ref={lastPostElementRef} key={index}>
                        <p className='event-message-content'>{post.message_content}</p>
                        <a className="waves-effect waves-light btn" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                        <p className='event-message-date'>{post.message_date}</p>
                    </div>
                } else {
                    return <div className='event' key={index}>
                        <p className='event-message-content'>{post.message_content}</p>
                        <a className="waves-effect waves-light btn" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                        <p className='event-message-date'>{post.message_date}</p>
                    </div>
                }
            })}
            </div>
            <div className='loading-spinner'>
                {loading ? <BeatLoader size={24} color='#7395AE'/> : 'End of Feed'}
            </div>
        </>
    )
}

