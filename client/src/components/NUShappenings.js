import React from 'react';
import axios from 'axios';

class NUShappenings extends React.Component {
    state = {
        channel_name: '', 
        message_link: '',
        message_date: '',
        posts: []
    };
    
    componentDidMount = () => {
        this.getData();
    }

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
            })
    }

    
    displayData = (happeningsArray) => {
        if (!happeningsArray.length) return null; // if no information in happenings

        happeningsArray.map((event, index) => (
            <div key={index}>
                <h3>{event.channel_name}</h3>
            </div>
        ))
    }

    render() {
        return (
        <div>
            <h3> Hello happenings</h3>
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