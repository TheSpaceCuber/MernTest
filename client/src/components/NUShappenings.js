import React from 'react';


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
    