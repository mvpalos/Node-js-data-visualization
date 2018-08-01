import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {

    componentWillMount(){
        axios.post('http://localhost:8080/validtoken',({jwt:localStorage.getItem("jwt")}))
        .then((result)=>{
            if(!result.data.error){
                this.props.history.push("/home");
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    handleSubmit = (event)=> {
        event.preventDefault(); 
        axios.post('http://localhost:8080/login', {
            userName: event.target.userName.value, 
            password: event.target.password.value
            })
            .then((result)=>{
                if(!result.data.error){
                    if(result.data.jwt){
                        localStorage.setItem("jwt", result.data.jwt);
                        this.props.history.push('/home');
                    }
                }
                else {
                    console.log("Failed to login");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    render(){
        let submitType ={
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '15px'
        }
        return(
            <div className ="Register">

            
                <h1>Login</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <input style={submitType} name="userName" type="text" placeholder="user name" />
                    <br/>
                    <input style={submitType} name="password" type="password" placeholder="password" />
                    <br/>
                    <br/>
                    <button id="submitButton" style={submitType} type="submit"> Submit </button>
                </form>
                <p><Link to ="/register" style = {{color : '#2DFDB9', fontSize : '1.5em', textDecoration : 'none'}}>Register</Link></p>

        </div>
        )
    }
}

export default SignIn;