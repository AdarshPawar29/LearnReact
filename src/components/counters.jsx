import React, { Component } from 'react';
import Counter from "./counter";
//import uuid from "uuid";

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     }
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters});
    } 
    render() {
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    //id={counter.id}
                    onDelete={this.handleDelete} 
                    //value={counter.value}
                    counter = {counter} //with help of these we no longer need the id and value properties we can use them in counters whie writing counters.id and counters.value
                    > 
                </Counter>)}
            </div>
          );
    }
}

export default Counters;
