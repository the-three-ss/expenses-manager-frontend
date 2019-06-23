import React, { Component } from 'react';

class SearchExpenses extends Component {
    render() {
        return (
            <div class="container">
                <div className="searchExpenses">
                    <div className="row ">

                        <div class="col-md-6">
                            <span class="input-group-text" id="basic-addon1">From
                        <input id="dateInput" class="form-control" type="date" /></span>
                        </div>

                        <div class="col-md-6">
                            <span class="input-group-text" id="basic-addon1">To
                        <input id="dateInput" class="form-control" type="date" /></span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <span class="input-group-text" id="basic-addon1" for="ExpensesStatus">Status
                            <select class="form-control" id="ExpensesStatus">
                                        <option >Paid</option>
                                        <option >UnPaid</option>
                                    </select></span>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <button type="button" class="btn btn-lg">Search</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}




export default SearchExpenses;

