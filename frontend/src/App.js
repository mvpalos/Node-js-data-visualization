import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Stats from './Stats';
import Home from './Home';
import Events from './Events'

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <Link className = "header" to = "/">Home</Link>
        <Link className = "header" to = "/stats">Stats</Link>
        <Link className = "header" to = "/events">Events</Link>
      </nav>
      <Route exact path = "/" component = {Home} />
      <Route path = "/stats" component = {Stats} />
      <Route path = "/events" component = {Events}/>
      </div>
    );
  }
}

export default withRouter (App);