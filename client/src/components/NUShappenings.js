import React from 'react';
import axios from 'axios';
import './NUShappenings.css';
import {Button} from "./Button.js";
import { BeatLoader } from 'react-spinners';


class nushappenings extends React.Component {
    state = {
        page: 1,
        limit: 25,
        posts: [],
        scrolling: null,
        totalPages: null,
        loading: true,
        hasMore: true,
        search: ""
    };
    
    componentDidMount = () => {
        this.getData();
        this.scrollListener = window.addEventListener('scroll', (event) => {
            this.handleScroll(event)
        })
    };

    loadMore = () => {
        if (this.state.hasMore) {
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true,
            loading: true
        }), this.getData())}
    };

    handleScroll = (event) => {
        const { scrolling, totalPages, page, hasMore} = this.state
        if (scrolling) return
        if (totalPages <= page) return
        const lastLi = document.querySelector('div.event > p:last-child')
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
        const pageOffset = window.pageYOffset + window.innerHeight 
        var bottomOffset = 30
        if ((pageOffset > lastLiOffset - bottomOffset) && hasMore) this.loadMore()
    };


    getData = () => {
        axios.get(`/happenings/?search=${this.state.search}&page=${this.state.page}&limit=${this.state.limit}/`)
        .then(response => {
                const data = response.data;
                this.setState({
                    posts: this.state.posts.concat(data.happenings),
                    scrolling: false,
                    totalPages: data.total_pages,
                    loading: false,
                    hasMore: data.hasMore
                });
                console.log('Data retrieved into React.');
            }) 
            .catch(() => {
                console.log('Error retrieving data into React.');
                alert('Error retrieving data into React');
            })
    }

    
    displayData = (happeningsArray)=> {
        if (!happeningsArray.length) return null; // if no information in happenings

        return happeningsArray.map((event, index) => (
            <div className='event' key={index}>
                <p className='event-message-content'>{event.message_content}</p>
                <a class="waves-effect waves-light btn" href={event.message_link} target='blank'><i class="material-icons left">cloud</i>More Info</a>
                <p className='event-message-date'>{event.message_date}</p>
            </div>
        ));
    };

    handleSearch = (e) => {
        this.setState({
            search: e.target.value,
            page: 1,
            posts:[]
        });
        this.getData();
    }

    render() {
        console.log('State: ', this.state);

        return (

        <div>
            <input type='text' onChange={this.handleSearch}>
            </input>
            
            <div className='data'>
                {this.displayData(this.state.posts)}
            </div>

            <div className='loading-spinner'>
                {this.state.loading ? <BeatLoader size={24} color='#7395AE'/> : 'End of Feed'}
            </div>
        </div>
        );
    }
}

export default nushappenings;