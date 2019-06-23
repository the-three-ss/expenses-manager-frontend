import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddExpenses from './components/AddExpenses';
import SearchExpenses from './components/SearchExpenses';
import ExpensesList from './components/ExpensesList';
import ExpensesTotal from './components/ExpensesTotal';
import axios from 'axios';
import UpdateExpenses from './components/UpdateExpenses';

class App extends Component {
  state = {
    listofItems: [],
    total: 0
  };

  updateMode = false;

  apiEndpoint = "https://2xelevltn5.execute-api.eu-west-2.amazonaws.com/dev/expenses/";

  componentDidMount = () => {
    axios.get(this.apiEndpoint)
      .then(result => {
        this.setState({
          listofItems: result.data.expenses
        });
        this.totalExpAmt();
      })
      .catch(err => {
      });
  }


  addExpenses = (newText, newCategory, newDate, newAmount, newPaymentType, newNotes, newStatus) => {

    const currentListofExpenses = this.state.listofItems;

    const newExpenses = {
      expenses_name: newText,
      category_name: newCategory,
      exp_date: newDate,
      amount: newAmount,
      status: newStatus,
      payment_type: newPaymentType,
      notes: newNotes,
      user_id: 1
    };

    axios.post(this.apiEndpoint, newExpenses)
      .then(result => {
        const expensesId = result.data.expenses_id;

        newExpenses.expenses_id = expensesId;
        currentListofExpenses.push(newExpenses);
        this.setState({
          listofItems: currentListofExpenses
        })
        this.totalExpAmt();
      })
      .catch(err => {
      })
  }

  searchExpenses = (newToDate, newFromDate) => {

    const currentListofExpenses = this.state.listofItems;
    let filterDate = currentListofExpenses.filter((item) => {
      return item.exp_date.getTime() >= newFromDate.getTime() &&
        item.date.getTime() <= newToDate.getTime();

    });
    this.setState({ listofItems: filterDate });
  }

  onUpdateClicked = (expenses_id) => {
    this.updateMode = true;
    let updateTask;
    let currentSelectTask = this.state.listofItems;
    currentSelectTask.forEach(item => {
      if (item.expenses_id === expenses_id) {
        updateTask = item;
      }
    });
    axios.put(this.apiEndpoint + expenses_id, updateTask)

      .then(result => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log("inside err");
      })

  }

  onDeleteClicked = (expenses_id) => {

    axios.delete(this.apiEndpoint + expenses_id)
      .then(result => {
        this.componentDidMount();
      })
      .catch(err => {
      })
    this.totalExpAmt();
    alert(expenses_id);
  }


  totalExpAmt = () => {
    let data = this.state.listofItems;
    if (data) {
      let result = 0;
      data.forEach(element => {
        result += parseFloat(element.amount);
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
          <SearchExpenses
            searchExpenses={this.searchExpenses.bind(this)} />
        </div>
        <div><br></br></div>
        <div className="row expensesList ">
          <div className="col bold">Expenses</div>
          <div className="col bold">Exp Date</div>
          <div className="col bold">Category</div>
          <div className="col bold">Status</div>
          <div className="col bold">Payment</div>
          <div className="col bold">Notes</div>
          <div className="col bold">Amount</div>
          <div className="coll bold">Update</div>
          <div className="coll bold">Delete</div>
          <div className="container ">
            {
              this.state.listofItems.map((item, index) => {
                return <ExpensesList
                  expenses_name={item.expenses_name}
                  exp_date={item.exp_date}
                  category_name={item.category_name}
                  status={item.status}
                  payment_type={item.payment_type}
                  notes={item.notes}
                  amount={item.amount}
                  delete={this.onDeleteClicked}
                  update={this.onUpdateClicked}
                  key={index}
                  rowNum={index}
                  user_id={item.user_id}
                  expenses_id={item.expenses_id}
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

