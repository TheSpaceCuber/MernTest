import React, { useRef, useState, useCallback } from 'react';
import useHappeningsSearch from './HappeningsSearch.js';
import ScrollToTop from './ScrollToTop.js';
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
    }, [loading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    String.prototype.replaceAll = function(str1, str2, ignore) {
        return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
    } 

    return (
        <>
            <div className='intro'>
                <h5>Discover all <strong style={{ color:'#ffa726' }}>EVENTS</strong> happenings around NUS.</h5>
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
                    let title = post.message_content.split('\n')[0].replaceAll('**','').replaceAll('**','').replaceAll('__', '').replace('***','').replace('___', '');
                    let content = post.message_content.split('\n').slice(2).join('\n').replaceAll('**','').replaceAll('__', '').replace('***','').replace('___', '');
                    return <> 
                        <div className="card white" ref={lastPostElementRef} key={index}>
                            <div className="card-content">
                                <div className='card-top'>
                                    <span className="card-title black-text"><strong>{title}</strong></span>
                                    <div className='event-message-date'><i className="tiny material-icons grey-text text-darken-1">date_range</i><p ><strong>{post.message_date}</strong></p></div>
                                </div>
                                <div className='channelname'>@{post.channel_name}</div>
                            </div>
                            
                            <div className='card-action'>
                                <p className='event-message-content'>{content}</p>
                            
                            <div className='event-message-link'>
                            <a className="btn waves-effect waves-light btn orange lighten-2" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                            </div>
                            </div>
                        </div>
                    </>
                } else if (index == 0) {
                    let title = post.message_content.split('\n')[0].replaceAll('**','').replaceAll('**','').replaceAll('__', '').replace('***','').replace('___', '');
                    let content = post.message_content.split('\n').slice(2).join('\n').replaceAll('**','').replaceAll('__', '').replace('***','').replace('___', '');
                    return <> 
                        <div className="card white" key={index}>
                            <div className="card-content">
                                <div className='card-top'>
                                    <span className="card-title black-text"><strong>{title}</strong></span>
                                    <div className='event-message-date'><i className="tiny material-icons grey-text text-darken-1">date_range</i><p ><strong>{post.message_date}</strong></p></div>
                                </div>
                                <div className='channelname'>@{post.channel_name}</div>
                            </div>
                            
                            <div className='card-action'>
                                <p className='event-message-content'>{content}</p>
                            
                            <div className='event-message-link'>
                            <a className="btn waves-effect waves-light btn orange lighten-1" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                            </div>
                            </div>
                        </div>
                        </>
                } else {
                    let title = post.message_content.split('\n')[0].replaceAll('**','').replaceAll('**','').replaceAll('__', '').replace('***','').replace('___', '');
                    let content = post.message_content.split('\n').slice(2).join('\n').replaceAll('**','').replaceAll('__', '').replace('***','').replace('___', '');
                    return <> 
                        <div className="card white" key={index}>
                            <div className="card-content">
                                <div className='card-top'>
                                    <span className="card-title black-text"><strong>{title}</strong></span>
                                    <div className='event-message-date'><i className="tiny material-icons grey-text text-darken-1">date_range</i><p ><strong>{post.message_date}</strong></p></div>
                                </div>
                                <div className='channelname'>@{post.channel_name}</div>
                            </div>
                            
                            <div className='card-action'>
                                <p className='event-message-content'>{content}</p>
                            
                            <div className='event-message-link'>
                            <a className="btn waves-effect waves-light btn orange lighten-2" href={post.message_link} target='blank'><i className="material-icons left">cloud</i>More Info</a>
                            </div>
                            </div>
                        </div>
                    </>
                }
            })}
            </div>
            
            <div className='loading-spinner'>
                {loading ?  
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                : 'End of Feed'}
            </div>
            {/* <BeatLoader size={24} color='#7395AE'/> */}
            <ScrollToTop/>
        </>
    )
}