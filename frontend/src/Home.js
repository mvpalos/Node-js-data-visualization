import React, {Component} from 'react';
import axios from 'axios';

import SpinningBox from './SpinningBox';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            results: " " 
        };
    }
componentDidMount(){
   axios.get('http://localhost:5555/')
    .then((result)=>{
        this.setState({
            results: result.data
        }); 
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
}
    render(){

         return(
            <div>
                <h4>{this.state.results}</h4>
                <center><SpinningBox width = {1300} height = {600} /></center>
            </div>    
        )
    }
}
export default Home;

