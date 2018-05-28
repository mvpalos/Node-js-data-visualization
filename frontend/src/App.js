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
      menuPressed: false
    }
    this.menuToggle = this.menuToggle.bind(this);
  }


menuToggle=()=>{
  this.setState({
    menuPressed: !this.state.menuPressed
  })
}

  render() {
    return (
      <div className="App">
    <div onClick ={this.menuToggle} className="container">
     <div className="stick stick-1"></div>
      <div className="stick stick-2"></div>
      <div className="stick stick-3"></div>
    </div>
      <nav>
        <li><Link className = "header" to = "/">Home</Link></li>
        <li><Link className = "header" to = "/stats">Stats</Link></li>
        <li><Link className = "header" to = "/events">Events</Link></li>
      </nav>
      <Route exact path = "/" component = {Home} />
      <Route path = "/stats" component = {Stats} />
      <Route path = "/events" component = {Events}/>
      </div>
    );
  }
}

export default withRouter (App);