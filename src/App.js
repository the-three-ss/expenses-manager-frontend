import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddExpenses from './components/AddExpenses';
import SearchExpenses from './components/SearchExpenses';
import ExpensesList from './components/ExpensesList';
import ExpensesTotal from './components/ExpensesTotal';


class App extends Component {
  state = {
    ListofItems: [
      {
        "Expenses": "TutionFees", "date": "2019-06-10", "Category": "Eduction", "Status": "Paid", "Payment": "Card",
        "Notes": "Englisgh", "Amount": 100
      },
      {
        "Expenses": "WaterBill", "date": "2019-06-07", "Category": "Bill", "Status": "UnPaid", "Payment": "Cash",
        "Notes": "Veollio", "Amount": 120
      },
      {
        "Expenses": "Mortgage", "date": "2019-06-09", "Category": "Loan", "Status": "Paid", "Payment": "Card",
        "Notes": "Housing Loan", "Amount": 1200
      }],

    total: [1420]
  };

  addExpenses = (newText, newCategory, newDate, newAmount, newPaymentType, newNotes, newStatus) => {

    const currentListofExpenses = this.state.ListofItems;

    const newExpenses = {
      Expenses: newText,
      date: newDate,
      Category: newCategory,
      Status: newStatus,
      Payment: newPaymentType,
      Notes: newNotes,
      Amount: newAmount
    };

    currentListofExpenses.push(newExpenses);
    this.setState({
      ListofItems: currentListofExpenses
    })
  }



  onDeleteClicked = (rowNum) => {
    let currentDeleteTask = this.state.ListofItems;
    currentDeleteTask.splice(rowNum, 1);
    this.setState({ ListofItems: currentDeleteTask });
    this.totalExpAmt();
  }

  totalExpAmt = () => {
    let data = this.state.ListofItems;
    if (data) {
      let result = 0;
      data.forEach(element => {
        result += parseFloat(element.Amount);
      });
      this.setState({ total: result });
    }
  }

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div><br></br></div>
        <div className="row">
          <AddExpenses addExpenses={this.addExpenses.bind(this)} />
        </div>
        <div><br></br></div>
        <div className="row">
          <SearchExpenses />
        </div>
        <div><br></br></div>
        <div className="row expensesList">
          <div className="col">Expenses</div>
          <div className="col">Exp Date</div>
          <div className="col">Category</div>
          <div className="col">Status</div>
          <div className="col">Payment</div>
          <div className="col">Notes</div>
          <div className="col">Amount</div>
          <div className="coll">Update</div>
          <div className="coll">Delete</div>
          <div className="container ">
            {
              this.state.ListofItems.map((item, index) => {
                return <ExpensesList
                  Expenses={item.Expenses}
                  date={item.date}
                  Category={item.Category}
                  Status={item.Status}
                  Payment={item.Payment}
                  Notes={item.Notes}
                  Amount={item.Amount}
                  Delete={this.onDeleteClicked}
                  key={index}
                  rowNum={index}
                />
              })
            }
          </div>
        </div>
        <div className="row total">
          <ExpensesTotal totalAmount={this.state.total}
          /></div>
      </div>
    );

  }
}

export default App;

