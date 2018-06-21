import React, {Component} from 'react'
import SpinningTensor from './SpinningTensor';

class Tensor extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <p>what is a tensor?</p>
                <SpinningTensor width = {1300} height = {600} />
            </div>
        )
    }
}

export default Tensor;