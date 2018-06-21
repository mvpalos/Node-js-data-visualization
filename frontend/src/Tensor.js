import React, {Component} from 'react'
import SpinningTensor from './SpinningTensor';

class Tensor extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <center>
                <div className = "text">
                <p>What is a Tensor?</p>
                <p>In mathematics, tensors are geometric objects
                   that describe linear relations between geometric 
                   vectors, scalars, and other tensors. Elementary 
                   examples of such relations include the dot product, 
                   the cross product, and linear maps.</p>
                </div> 
                </center>  
                <SpinningTensor width = {1300} height = {600} />
            </div>
        )
    }
}

export default Tensor;