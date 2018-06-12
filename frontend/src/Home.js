import React, {Component} from 'react';
import axios from 'axios';

import Canvas from './Canvas';

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
                <Canvas width = {800} height = {600} />
               <h4>{this.state.results}</h4>
            </div>    
        )
    }
}
export default Home;

