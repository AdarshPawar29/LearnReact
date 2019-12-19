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
        //debugger;
        console.log(counterId);
        console.log("Handled Delete....");
    } 
    render() { 
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    id={counter.id}
                    onDelete={this.handleDelete} 
                    value={counter.value}> 
                </Counter>)}
            </div>
          );
    }
}

export default Counters;