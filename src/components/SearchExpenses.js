import React, { Component } from 'react';




class SearchExpenses extends Component {
    
        state = {
            todate: this.props.toDate,
            fromdate: this.props.fromDate,
            status: this.props.status
        }
    
    onSearchClicked = (event) => {

        const newToDate = this.state.todate;
        const newFromDate = this.state.fromdate;
        const newstatus=this.state.status;
        this.props.searchExpenses(newToDate, newFromDate, newstatus);
       // alert(newstatus)
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
                            <span class="input-group-text" id="basic-addon1" onChange={this.onFromDateChange} 
                            value={this.state.toDate}>From
                                 <input id="dateInput" class="form-control" type="date" /></span>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <span class="input-group-text" id="basic-addon1" onChange = {this.onToDateChange} 
                            value={this.state.fromDate}>To
                                 <input id="dateInput" class="form-control" type="date" /></span>
                        </div>

                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <span class="input-group-text" id="basic-addon1" onChange={this.onStatusChanged} 
                                value ={this.state.status} for="ExpensesStatus">Status
                                    <select class="form-control" id="ExpensesStatus">
                                    <option>Select</option>
                                    <option>Paid</option>
                                    <option>UnPaid</option>

                                    </select></span>
                            </div>
                        </div>

                        <div class="col-md-2 col-sm-12">
                            <button type="button" class="btn btn-lg" onClick={this.onSearchClicked}>Search</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}




export default SearchExpenses;

