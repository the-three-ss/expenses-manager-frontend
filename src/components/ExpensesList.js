import React, { Component } from 'react';

class ExpensesList extends Component {
    render() {
        let dateFromApi = this.props.exp_date;
        let localDate = new Date(dateFromApi);
        let localDateString = localDate.toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
        return (
            <div>
                <div className="row expensesList listhover">
                    <div className="col">                       
                        {this.props.expenses_name}
                    
                    </div>
                    <div className="col">
                        {localDateString}
                    </div>
                    <div className="col">
                        {this.props.category_name}
                    </div>
                    <div className="col">
                        {this.props.status}
                    </div>
                    <div className="col">
                        {this.props.payment_type}
                    </div>
                    <div className="col">
                        {this.props.notes}
                    </div>
                    <div className="col">
                        {this.props.amount}
                    </div>
                    <div className="coll">
                        <i class="material-icons" onClick={this.props.update.bind(this, this.props.expenses_id)}>
                        <img src="https://img.icons8.com/material-two-tone/24/000000/update-file.png"></img></i>
                    </div>
                    <div className="coll">
                        <i class="material-icons" onClick={this.props.delete.bind(this, this.props.expenses_id)}>
                        <img src="https://img.icons8.com/material-two-tone/24/000000/delete-forever.png"></img></i>
                    </div>
                </div>
            </div>

        )
    }
}


export default ExpensesList;