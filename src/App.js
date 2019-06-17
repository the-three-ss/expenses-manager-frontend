import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddExpenses from './components/AddExpenses';
import DisplayExpenses from './components/DisplayExpenses'


class App extends Component {


  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div><br></br></div>
        <div className="row">
          <AddExpenses />
        </div>
        <div className="row">
          <DisplayExpenses />
        </div>
        
      </div>
      
    );

  }
}

export default App;
