import React, { Component } from 'react';




class SearchExpenses extends Component {
    state = {
        todate: "",
        fromdate: ""
    }
    onSearchClicked = (event) => {

        const newToDate = this.state.todate;
        const newFromDate = this.state.fromdate;
        this.props.searchExpenses(newToDate, newFromDate);

    }
    onFromDateChange = (event) => {

        this.setState({ fromdate: event.target.value });

    }
    onToDateChange = (event) => {

        this.setState({ todate: event.target.value });

    }
    onStatusChanged = (event) => {
        this.setState({ status: event.target.value });
    }

    render() {
        return (
            <div className="container" >
                <div className="searchExpenses">
                    <div className="row divheight">

                        <div class="col-md-3 col-sm-12">
                            <span class="input-group-text" id="basic-addon1">From
                                 <input id="dateInput" class="form-control" type="date" /></span>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <span class="input-group-text" id="basic-addon1">To
                                 <input id="dateInput" class="form-control" type="date" /></span>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <span class="input-group-text" id="basic-addon1" for="ExpensesStatus">Status
                                    <select class="form-control" id="ExpensesStatus">
                                        <option >Paid</option>
                                        <option >UnPaid</option>

                                    </select></span>
                            </div>
                        </div>

                        <div class="col-md-2 col-sm-12">
                            <button type="button" class="btn btn-lg">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}




export default SearchExpenses;

