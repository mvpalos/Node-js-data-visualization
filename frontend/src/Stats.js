import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Hourly from './Hourly';
import Daily from './Daily';

class Stats extends Component{
    constructor(){
        super();
        
    }

    render(){
        return(
            <div>
                <h1>
                    Stats
                </h1>
                <Router>
                    <div>
                        <nav>
                            <Link to = "/stats/hourly">Hourly</Link>
                            <Link to = "/stats/daily">Daily</Link>
                            
                        </nav>
                    <Switch>
                        <Route path = '/stats/hourly' component={Hourly} />
                        <Route path = '/stats/daily' component={Daily} /> 
 
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Stats;