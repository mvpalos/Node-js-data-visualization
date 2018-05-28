import React, { Component } from 'react';
import axios from 'axios';

class Daily extends Component{
    constructor(){
        super()
        this.state = {
            results: " "
        };
    }
componentDidMount(){
    axios.get('http://localhost:5555/events/hourly')
        .then((results)=>{
            console.log(results.data);
        })
            .catch((error)=>{
                console.log(error);
        })
}
    render(){
        return(
            <div>
                <h1>this is the Daily page</h1>
                <p>{this.state.results}</p>
            </div>
        )
    }
}

export default Daily;