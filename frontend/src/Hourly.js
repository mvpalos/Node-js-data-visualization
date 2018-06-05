import React, { Component } from 'react';
import axios from 'axios';
import Graph from './Graph';

class Hourly extends Component{
    constructor(){
        super()
        this.state = {
            results: " ",

        };
    }
componentDidMount() {
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
                <Graph />
                <div>{this.state.results}</div>
            </div>
        )
    }
}

export default Hourly;