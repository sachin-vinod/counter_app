import React, { Component, useEffect } from 'react';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Counters from './components/counters';
import NavBar from './components/navbar';
import Cart from './components/cart';


class App extends Component { 

  state = {
    counters : [
        { id : 1 , value : 0},
        { id : 2 , value : 0},
        { id : 3 , value : 0},
        { id : 4 , value : 0},
        { id : 5 , value : 0},
    ]
};

handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({counters});
   console.log(counter);
 };

 handleDecrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if(counters[index].value<0){
        counters[index].value=0;
    }
    this.setState({counters});
   console.log(counter);
 };

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value=0;
        return c;
    });
    console.log(counters);
    this.setState({ counters });
 };

 handleDelete = counterId =>{
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    console.log(counters);
    this.setState({counters});
 };

  render() {
    return (
      
      <div>
          <BrowserRouter>
                <NavBar
                  totalCounters={this.state.counters.filter(c => c.value>0).length}
                />
                <Routes>
                  <Route path="/" element={<Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>}/>
                  <Route path="/cart" element={< Cart counters={this.state.counters}/>} />
                </Routes>
          </BrowserRouter>
      </div>
    );
  }
}
 
export default App;
