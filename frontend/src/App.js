import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Stats from './Stats';
import Home from './Home';
import Events from './Events'

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
      <nav style = {{textAlign: "left"}} onClick = {this.menuToggle} >
        <li style = {{display: this.state.listDisplay}}><Link className = "header" to = "/">Home</Link></li>
        <li style = {{display: this.state.listDisplay}}><Link className = "header" to = "/stats">Stats</Link></li>
        <li style = {{display: this.state.listDisplay}}><Link className = "header" to = "/events">Events</Link></li>
      </nav>
      <Route exact path = "/" component = {Home} />
      <Route path = "/stats" component = {Stats} />
      <Route path = "/events" component = {Events}/>

      </div>

    );
  }
}

export default withRouter (App);