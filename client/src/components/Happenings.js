import React, { useRef, useState, useCallback } from 'react';
import useHappeningsSearch from './HappeningsSearch.js';
import ScrollToTop from './ScrollToTop.js';
import './Happenings.css';
import { BeatLoader } from 'react-spinners';
import FormatText from './TextFormat.js';


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

    // function boldFormatter(text) {
    //     counter = 0
    //     for (let i=0 ; i < text.length; i++) {
    //         if ( (counter%2==0) && (text.charAt(i) == '*') && (text.charAt(i+1) == '*')) {
    //             text.replaceAt(i, "/");
    //             text.replaceAt(i+1, "b");
    //         } 
    //     }
    // }

    return (
        <>
            <div className='intro'>
                <h5>Discover all <strong style={{ color:'#ffa500' }}>EVENTS</strong> happenings around NUS.</h5>
                <p>Enter an event keyword to narrow your search!</p>
            </div>
            <div className='searchbar'>
                <div className='searchbar-icon'>
                <i className="small material-icons light-blue-text text-darken-3">search</i> 
                </div>
                <div className='searchbar-textinput'>
                <input type="search" placeholder="Search" onChange={handleSearch}></input>
                </div>
            </div>

            <div className='feed'>
            {posts.map((post, index) => {
                if (posts.length == index + 1) {
                    return <div className='event' ref={lastPostElementRef} key={index}>
                        <p className='event-message-content'>{post.message_content}</p>
                        <a className="waves-effect waves-light btn orange lighten-2" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                        <div className='event-message-date'><i className="small material-icons light-blue-text text-darken-3">date_range</i><p>{post.message_date}</p></div>
                    </div>
                } else if (index == 0) {
                    // let content = post.message_content.split('(**)').map((part)=> <p>{part}</p>)
                    return <> 
                    <div className='event' key={index}>
                        {/* {content} */}
                        <p className='event-message-content'>{post.message_content}</p>
                        <a className="waves-effect waves-light btn orange lighten-2" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                        <div className='event-message-date'><i className="small material-icons light-blue-text text-darken-3">date_range</i><p>{post.message_date}</p></div>
                    </div></>
                } else {
                    return <div className='event' key={index}>
                        <p className='event-message-content'>{post.message_content}</p>
                        <a className="waves-effect waves-light btn orange lighten-2" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                        <div className='event-message-date'><i className="small material-icons light-blue-text text-darken-3">date_range</i><p>{post.message_date}</p></div>
                    </div>
                }
            })}
            </div>
            <div className='loading-spinner'>
                {loading ? <BeatLoader size={24} color='#7395AE'/> : 'End of Feed'}
            </div>
            
            <ScrollToTop/>
        </>
    )
}