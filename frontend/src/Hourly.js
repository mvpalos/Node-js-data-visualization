import React, { Component } from 'react';
import axios from 'axios';
import Graph from './Graph';

class Hourly extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Graph />
            </div>
        )
    }
}

export default Hourly;