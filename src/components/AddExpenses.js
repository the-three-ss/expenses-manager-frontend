import React, { Component } from 'react';

class AddExpenses extends Component {
    state = {
        expensesName: "",
        date: "",
        expAmount: "",
        paymentType: "",
        notes: "",
        status: "",
        category:""
    }

    onSaveClicked = (event) => {
        const newText = this.state.expensesName;
        const newCategory = this.state.category;
        const newDate = this.state.date;
        const newAmount = this.state.expAmount;
        const newPaymentType = this.state.paymentType;
        const newNotes = this.state.notes;
        const newStatus = this.state.status;

        if(newText === "" || newCategory === "" || newDate === "" || newAmount === "" ||
        newPaymentType ==="" || newStatus === "" ){
            alert("Please enter the all the fileds");
        } else {
        this.props.addExpenses(newText, newCategory, newDate, newAmount, newPaymentType, newNotes, newStatus);
        this.setState({ expensesName: "" });
        this.setState({ date: "" });
        this.setState({ expAmount: "" });
        this.setState({ paymentType: "" });
        this.setState({ notes: "" });
        this.setState({ status: "" });
        this.setState({ category: "" });
    }
}
    onCancelClicked =(event) => {
        event.target.value = "";       

    }
    onTextChanged = (event) => {
        this.setState({ expensesName: event.target.value });

    }
    onAmountChanged = (event) => {
        this.setState({ expAmount: event.target.value });

    }

    onNotesChanged = (event) => {
        this.setState({ notes: event.target.value });

    }

    onPaymentChanged = (event) => {
        this.setState({ paymentType: event.target.value });

    }

    onStatusChanged = (event) => {
        this.setState({ status: event.target.value });
    }

    onDateChange = (event) => {

        this.setState({ date: event.target.value });

    }

    onCategoryChanged = (event) => {

        this.setState({ category: event.target.value });

    }
    render() {
        return (

            <div className="addExpeneses">
                <div className="row divheight">
                <div class= "col-md-4 col-sm-6">
                        <div >
                            <span class="input-group-text" id="basic-addon1">Expenses Name
                            <input type="text" class="form-control" onChange={this.onTextChanged} value={this.state.expensesName} /></span>
                        </div>
                    </div>
                    <div class= "col-md-4 col-sm-6">
                        <div class="form-group">
                            <span class="input-group-text" id="basic-addon1" for="ExpensesCategory">Category
                                <select class="form-control" id="ExpensesCategory" onChange={this.onCategoryChanged} value={this.state.category}>
                                    <option>Select</option>
                                    <option>Bill</option>
                                    <option>Loan</option>
                                    <option>Education</option>
                                    <option>Holiday</option>
                                    <option>Party</option>
                                </select></span>
                        </div>
                    </div>                    

                    <div class= "col-md-4 col-sm-6">
                        <div>
                            <span class="input-group-text" id="basic-addon1">Amount
                            <input type="text" class="form-control" onChange={this.onAmountChanged} placeholder="0" value={this.state.expAmount} /></span>
                        </div>
                    </div>
                   
                </div>

                <div className="row divheight">
                <div class= "col-md-4 col-xs-6">
                        <div >
                            <span class="input-group-text" id="basic-addon1">Expeneses Date
                            <input id="dateInput" class="form-control" type="date" onChange={this.onDateChange} value={this.state.date} /></span>
                        </div>
                    </div>
                    <div class= "col-md-4 col-xs-6">
                        <div class="form-group">
                            <span class="input-group-text" id="basic-addon1" for="PaymentType">Payment Type
                            <select class="form-control" id="PaymentType" onChange={this.onPaymentChanged} value={this.state.paymentType}>
                                    <option>Select</option>
                                    <option>Card</option>
                                    <option>Cash</option>
                                    <option>Others</option>
                                </select></span>
                        </div>
                    </div>
                   
                   
                    <div class= "col-md-4 col-xs-6">
                        <div class="form-group">
                            <span class="input-group-text" id="basic-addon1" for="ExpensesStatus">Status
                            <select class="form-control" id="ExpensesStatus" onChange={this.onStatusChanged} value={this.state.status}>
                                    <option>Select</option>
                                    <option>Paid</option>
                                    <option>UnPaid</option>
                                </select></span>
                        </div>
                    </div>

                    

                </div>
                <div className="row divheight">
                <div class= "col-md-8 col-sm-6">
                        <span class="input-group-text" id="basic-addon1" for="ExpensesDetails">Notes
                        <textarea class="form-control" id="ExpensesDetails" rows="1" onChange={this.onNotesChanged} value={this.state.notes}></textarea></span>
                    </div>

                    
                    <div class= "col-md-1 col-sm-6">
                        <button type="button" class="btn btn-lg" onClick={this.onSaveClicked} >Save</button>
                    </div>
                    <div class= "col-md-1 col-sm-6">
                        <button type="button" class="btn btn-lg" onClick ={this.onCancelClicked}>Cancel</button>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default AddExpenses;