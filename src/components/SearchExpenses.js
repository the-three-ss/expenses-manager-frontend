import React, { Component } from 'react';


    

class SearchExpenses extends Component {
    state = {
            todate:"",
            fromdate:""
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
           
                <div class= "col-md-3 col-sm-6 col-xs-6">
                    <span class="input-group-text" id="basic-addon1">From
                        <input id="dateInput" class="form-control" type="date" 
                            onChange={this.onFromDateChange} value={this.state.date} /></span>
                </div>

                <div class= "col-md-3 col-sm-6 col-xs-6">
                    <span class="input-group-text" id="basic-addon1">To
                        <input id="dateInput" class="form-control" type="date" 
                        onChange={this.onToDateChange} value={this.state.date} /></span>
                </div>
              
                <div class= "col-md-3 col-sm-6 col-xs-6">
                    <div class="form-group">
                        <span class="input-group-text" id="basic-addon1" for="ExpensesStatus"
                         onChange={this.onStatusChanged} value={this.state.status}>Status
                            <select class="form-control" id="ExpensesStatus">
                                <option >Paid</option>
                                <option >UnPaid</option>
                                
                            </select></span>
                    </div>
                </div>
               
                <div class="col-md-1 col-sm-6">
                    <button type="button" class="btn btn-lg" onClick={this.onSearchClicked} >Search</button>
                </div>
            </div>
            </div>
</div>
        );
    }
}




export default SearchExpenses;

