import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Events from './Events'
import Testing from './Testing';
import SignIn from './SignIn';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menuPressed: "close",
      listDisplay: "none"
    }
    this.menuToggle = this.menuToggle.bind(this);
  }


menuToggle=()=>{
  if (this.state.menuPressed === "close") {
    this.setState({
      menuPressed: "open",
      listDisplay: "block"
    });
  }
  else if (this.state.menuPressed === "open") {
    this.setState({
      menuPressed: "close",
      listDisplay: "none" 
    });
  }
}

  render() {
    return (
      <div className="App">
    <div onClick ={this.menuToggle} className="container">
     <div className = {"stick stick-1 " + this.state.menuPressed}></div>
      <div className = {"stick stick-2 .close " + this.state.menuPressed}></div>
      <div className = {"stick stick-3 .close " + this.state.menuPressed}></div>
    </div>
      <nav className = 'mainNav' onClick = {this.menuToggle} >
        <li style = {{display: this.state.listDisplay}}><Link className = "header" to = "/">Home</Link></li>
        <li style = {{display: this.state.listDisplay}}><Link className = "header" to = "/events">Events</Link></li>
        <li style = {{display: this.state.listDisplay}}><Link className = "header" to = "/testing">Testing</Link></li>
      </nav>
      <Route exact path = "/" component = {SignIn} />
      <Route path = "/home" component = {Home} />
      <Route path = "/events" component = {Events}/>
      <Route path = "/testing" component = {Testing} />

      </div>

    );
  }
}

export default withRouter (App);