import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: []
        };
    this.registerHandler = this.registerHandler.bind(this);
    this.removeErrorHandler = this.removeErrorHandler.bind(this);
    }
componentWillMount(){
        axios.post('/validtoken',({jwt:localStorage.getItem("jwt")}))
        .then((result)=>{
            if(!result.data.error){
                this.props.history.push("/feed");
            }
        })
        .catch((err)=>{
            console.log(err);
        })
   }
   registerHandler(e){
    e.preventDefault();
    if (e.target.username && e.target.password)
    {
        axios.post("/register", {
            username: e.target.username.value,
            password: e.target.password.value
        })
        .then((results) =>
        {
            if (!results.data.error)
            {
                if (results.data.jwt)
                {
                    localStorage.setItem("jwt", results.data.jwt);
                    this.props.history.push("/feed");
                }
            }
            else
            {
                this.setState({
                    error: results.data.reason
                });
            }
        })
        .catch((error) =>
        {
            console.log(error);
        });
    }
}
removeErrorHandler(){
    this.setState({
        error: []
    })
}
}