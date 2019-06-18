import React, { Component } from 'react';

class ExpensesList extends Component {
    render() {
        return (
            <div>
                <div className="row expensesList ">

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
                    
                    <div className="col">
                    <button type="button" onClick={()=>this.props.update(this.props.rowNum)}  >
                    <i class="fa fa-edit"></i></button>
                </div>
                <div className="col-md-1 col-sm-6" >
                    <button type="button" onClick={()=>this.props.Delete.bind(this.props.rowNum)} >
                    <i class="fa fa-trash"></i>

                    </button>
                </div>
                    
                </div>
            </div>

        )
    }
}


export default ExpensesList;