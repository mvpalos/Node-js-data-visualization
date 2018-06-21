import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Tensor from './Tensor';
import Prototype from './Prototype';

class Testing extends Component{
    constructor(){
        super();
        
    }

    render(){
        return(
            <div>
                <h1>
                    Testing
                </h1>
                <Router>
                    <div>
                        <nav>
                            <Link className = "btn-2" to = "/testing/tensor">Tensor</Link>
                            <Link className = "btn-2" to = "/testing/prototype">Prototype</Link>
                            
                        </nav>
                    <Switch>
                        <Route path = '/testing/tensor' component={Tensor} />
                        <Route path = '/testing/prototype' component={Prototype} /> 
 
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Testing;