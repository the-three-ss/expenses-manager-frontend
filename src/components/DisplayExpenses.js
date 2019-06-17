import React, { Component } from 'react';



class DisplayExpenses extends Component {
    constructor(){
        super();
        this.state={
            isDisplay: true
        }
    }
    RowDisplay() {
        return (
            <tr>
                <td>{this.props.ExpensesName}</td>
                <td>{this.props.date}</td>
                <td>{this.props.ExpAmount}</td>
                <td>{this.props.PaymentType}</td>
                <td>{this.props.Note}</td>
                <td>{this.props.Status}</td>
                <td>{this.props.Category}</td>
                <td>
                    <button className="btn btn-info-edit"
                       >Edit</button></td>
                <td> <button className="btn btn-info-delete"
                        >Delete</button>
                </td>
            </tr>
        )
    }
    RowEdit(){
        return(
            <tr>
              <td><input type="text" className="form-control" defaultValue={this.props.entry.date} ref="date" /></td>
              <td><input type="text" className="form-control" defaultValue={this.props.entry.title} ref="title" /></td>
              <td><input type="text" className="form-control" defaultValue={this.props.entry.amount} ref="amount" /></td>
              <td>
                <button className="btn btn-info mr-1" >Update</button>
                <button className="btn btn-danger" >Cancel</button>
              </td>
            </tr>
      );
    }
    render() {

        return this.state.isDisplay ? this.RowDisplay() : this.RowEdit();

    }
}

export default DisplayExpenses;
