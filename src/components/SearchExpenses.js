import React, { Component } from 'react';

class SearchExpenses extends Component {
    render() {
        return (
            <div className="searchExpeneses">
            <div className="row ">
           
                <div class= "col-md-4">
                    <span class="input-group-text" id="basic-addon1">From
                        <input id="dateInput" class="form-control" type="date" /></span>
                </div>

                <div class= "col-md-4">
                    <span class="input-group-text" id="basic-addon1">To
                        <input id="dateInput" class="form-control" type="date" /></span>
                </div>
              
                <div class= "col-md-3">
                    <div class="form-group">
                        <span class="input-group-text" id="basic-addon1" for="ExpensesStatus">Status
                            <select class="form-control" id="ExpensesStatus">
                                <option >Paid</option>
                                <option >UnPaid</option>
                            </select></span>
                    </div>
                </div>
               
                <div  class= "col-md-1">
                    <button type="button" class="btn btn-lg">Search</button>
                </div>
            </div>
            </div>

        );
    }
}




export default SearchExpenses;

