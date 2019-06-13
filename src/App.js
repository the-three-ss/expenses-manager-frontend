import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddExpenses from './components/AddExpenses';
import SearchExpenses from './components/SearchExpenses';


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
        <div><br></br></div>
        <div className="row">
          <SearchExpenses />
        </div>
      </div>

    );

  }
}

export default App;
