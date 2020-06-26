import React from 'react';
import axios from 'axios';
import './NUShappenings.css';
import {Button} from "./Button.js";
import { BeatLoader } from 'react-spinners';


class nushappenings extends React.Component {
    state = {
        page: 1,
        limit: 600,
        posts: [],
        scrolling: false,
        totalPages: null,
        loading: true,
        hasMore: null
    };
    
    componentDidMount = () => {
        this.getData();
        this.scrollListener = window.addEventListener('scroll', (event) => {
            this.handleScroll(event)
        })
    };

    handleScroll = (event) => {
        const { scrolling, totalPages, page } = this.state
        if (scrolling) return
        if (totalPages <= page) return
        const lastLi = document.querySelector('div.event > p:last-child')
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
        const pageOffset = window.pageYOffset + window.innerHeight 
        var bottomOffset = 30
        if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
    };

    getData = () => {
        axios.get(`/happenings/?page=${this.state.page}&limit=${this.state.limit}`)
            .then(response => {
                const data = response.data;
                this.setState({
                    posts: this.state.posts.concat(data.happenings),
                    scrolling: false,
                    totalPages: JSON.total_pages,
                    loading: false
                });
                console.log('Data retrieved into React.');
            })
            .catch(() => {
                console.log('Error retrieving data into React.');
                alert('Error retrieving data into React');
            });
    }

    
    displayData = (happeningsArray) => {
        if (!happeningsArray.length) return null; // if no information in happenings

        return happeningsArray.map((event, index) => (
            <div className='event' key={index}>
                <p className='event-message-content'>{event.message_content}</p>
                <Button buttonStyle='btn--moreinfo--solid'>
                    <a className='event-message-link' href={event.message_link} target="_blank">More Info</a>
                </Button>
                <p className='event-message-date'>{event.message_date}</p>
            </div>
        ));
    };

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true,
            loading: true
        }), this.getData())
    }

    render() {
        console.log('State: ', this.state);

        return (

        <div>
            <input type='text'></input>
            <div className='data'>
                {this.displayData(this.state.posts)}
            </div>

            <div className='loading-spinner'>
                <BeatLoader size={24} color='#7395AE' loading/>
            </div>
        </div>
        );
    }
}

export default nushappenings;