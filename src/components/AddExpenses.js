import React, { Component } from 'react';

class AddExpenses extends Component {
    state = {
        ExpensesName: "",
        date: "",
        ExpAmount: "",
        PaymentType: "",
        Notes: "",
        Status: "",
        Category: ""
    }
    onSaveClicked = (event) => {
        
    }
    onCancelClicked = (event) => {
        event.target.value = "";

    }
    onTextChanged = (event) => {
        this.setState({ ExpensesName: event.target.value });

    }
    onAmountChanged = (event) => {
        this.setState({ ExpAmount: event.target.value });

    }

    onNotesChanged = (event) => {
        this.setState({ Notes: event.target.value });

    }

    onPaymentChanged = (event) => {
        this.setState({ PaymentType: event.target.value });

    }

    onStatusChanged = (event) => {
        this.setState({ Status: event.target.value });
    }

    onDateChange = (event) => {

        this.setState({ date: event.target.value });

    }

    onCategoryChanged = (event) => {

        this.setState({ Category: event.target.value });

    }
    render() {
        return (

            <div className="addExpeneses">
                <div className="row divheight">
                    <div class="col-md-4 col-sm-6">
                        <div >
                            <span class="input-group-text" id="basic-addon1">Expenses Name
                            <input type="text" class="form-control" onChange={this.onTextChanged} value={this.state.ExpensesName} /></span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="form-group">
                            <span class="input-group-text" id="basic-addon1" for="ExpensesCategory">Category
                                <select class="form-control" id="ExpensesCategory" onChange={this.onCategoryChanged} value={this.state.Category}>
                                    <option>Select</option>
                                    <option>Bill</option>
                                    <option>Loan</option>
                                    <option>Education</option>
                                    <option>Holiday</option>
                                    <option>Party</option>
                                </select></span>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div>
                            <span class="input-group-text" id="basic-addon1">Amount
                            <input type="text" class="form-control" onChange={this.onAmountChanged} placeholder="0" value={this.state.ExpAmount} /></span>
                        </div>
                    </div>

                </div>

                <div className="row divheight">
                    <div class="col-md-4 col-xs-6">
                        <div >
                            <span class="input-group-text" id="basic-addon1">Expeneses Date
                            <input id="dateInput" class="form-control" type="date" onChange={this.onDateChange} value={this.state.date} /></span>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="form-group">
                            <span class="input-group-text" id="basic-addon1" for="PaymentType">Payment Type
                            <select class="form-control" id="PaymentType" onChange={this.onPaymentChanged} value={this.state.PaymentType}>
                                    <option>Select</option>
                                    <option>Card</option>
                                    <option>Cash</option>
                                    <option>Others</option>
                                </select></span>
                        </div>
                    </div>


                    <div class="col-md-4 col-xs-6">
                        <div class="form-group">
                            <span class="input-group-text" id="basic-addon1" for="ExpensesStatus">Status
                            <select class="form-control" id="ExpensesStatus" onChange={this.onStatusChanged} value={this.state.Status}>
                                    <option>Select</option>
                                    <option>Paid</option>
                                    <option>UnPaid</option>
                                </select></span>
                        </div>
                    </div>



                </div>
                <div className="row divheight">
                    <div class="col-md-8 col-sm-6">
                        <span class="input-group-text" id="basic-addon1" for="ExpensesDetails">Notes
                        <textarea class="form-control" id="ExpensesDetails" rows="1" onChange={this.onNotesChanged} value={this.state.Notes}></textarea></span>
                    </div>


                    <div class="col-md-1 col-sm-6">
                        <button type="button" class="btn btn-lg" onClick={this.onSaveClicked} >Save</button>
                    </div>
                    <div class="col-md-1 col-sm-6">
                        <button type="button" class="btn btn-lg" onClick={this.onCancelClicked}>Cancel</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddExpenses;

