import React, { Component } from 'react';

class counter extends Component {
     fromateCount = () => {
        const {value} = this.props.counter;
        if(value<0){
            this.state.value=0;
            return "Zero";
        }
        return value === 0 ? "Zero" : value;
     }

    render() { 
        return (
            <div>
                <span className="badge badge-warning m-2">{this.props.counter.id}</span>
                <span className="badge badge-primary">{this.fromateCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
                >
                    +
                </button>
                <button onClick={() =>  this.props.onDecrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
                >
                    -
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
}
 
export default counter;