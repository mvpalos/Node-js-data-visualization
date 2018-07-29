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
        axios.post("http://localhost:8080/validtoken",{
            jwt: localStorage.getItem("jwt")
        })
        .then(result=>{
            if(result.data.error){
                this.props.history.push('/');
            }
            else
            {
                this.setState({
                    userName: result.data.alias
                });
            }
        })
}   

logoutHandler()
{
    localStorage.removeItem("jwt");
    this.props.history.push("/");
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

