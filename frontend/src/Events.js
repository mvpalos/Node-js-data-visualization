import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Hourly from './Hourly';
import Daily from './Daily';

class Events extends Component{
    constructor(){
        super();
        
    }

    render(){
        return(
            <div>
                <h1>
                    Events
                </h1>
                <Router>
                    <div>
                        <nav>
                            <Link to = "/events/hourly">Hourly</Link>
                            <Link to = "/events/daily">Daily</Link>
                            
                        </nav>
                    <Switch>
                        <Route path='/events/hourly' component={Hourly} />
                        <Route path='/events/daily' component={Daily} /> 
 
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Events;