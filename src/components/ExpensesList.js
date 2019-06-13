import React, { Component } from 'react';

class ExpensesList extends Component {
    render() {
        return (
            <div>
                <div className="row expensesList">

                    <div className="col">
                        {this.props.Expenses}
                    </div>
                    <div className="col">
                        {this.props.date}
                    </div>
                    <div className="col">
                        {this.props.Category}
                    </div>
                    <div className="col">
                        {this.props.Status}
                    </div>
                    <div className="col">
                        {this.props.Payment}
                    </div>
                    <div className="col">
                        {this.props.Notes}
                    </div>
                    <div className="col">
                        {this.props.Amount}
                    </div>

                    <div className="coll">
                        <i class="material-icons" >update</i>
                    </div>
                    <div className="coll">
                        <i class="material-icons" onClick={this.props.Delete.bind(this, this.props.rowNum)}>delete</i>
                    </div>
                </div>
            </div>

        )
    }
}


export default ExpensesList;