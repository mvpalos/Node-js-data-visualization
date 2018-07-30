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
}