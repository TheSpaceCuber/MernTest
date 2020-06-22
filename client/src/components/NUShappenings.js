import React from 'react';
import axios from 'axios';
import './NUShappenings.css';
import {Button} from "./Button.js";

class NUShappenings extends React.Component {
    state = {
        channel_name: 'Happenings', 
        posts: []
    };
    
    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        axios.get('/happenings')
            .then((response) => {
                const data = response.data;
                this.setState({posts: data});
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
                <a className='event-message-link' href={event.message_link}> {event.message_link} </a>
                <p className='event-message-date'>{event.message_date}</p>
            </div>
        ));
    };

    render() {
        console.log('State: ', this.state);

        return (

        <div className='data'>
            <h3>Welcome to {this.state.channel_name}</h3>
            {this.displayData(this.state.posts)}
        </div>
        );
    }
}

export default NUShappenings;





/*
export default class nushappenings extends React.Component {

    state = {
        loading: true
    };

    async componentDidMount() {
        const url = 'https://localhost:5000/happenings';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }


    render() {
        return (
        <div>
            {this.state.loading ? <div>loading...</div> : <div>Error in loading...</div>}
        </div>
        );
    }
}
    
*/