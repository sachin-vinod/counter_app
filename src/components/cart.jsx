import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class cart extends Component { 
    subTotal = () =>{
        let value=0;
        for(let i=0;i<this.props.counters.length;i++){
            value+=this.props.counters[i].value;
        }
        return value;

    };

    render() { 
        return (
        <div>
            {<h1>This is cart</h1>}
            <span className="badge badge-primary m-2">{<p className="badge badge-secondary">Subtotal</p>}{this.subTotal()}</span>
            <Link to="/" className="btn btn-primary m-2">Home</Link>
        </div>
        );
    }
}
 
export default cart;