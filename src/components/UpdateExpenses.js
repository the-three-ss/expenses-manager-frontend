import React, { Component } from 'react';


class UpdateExpenses extends Component {

    state = {
        expenseName: this.props.parentState.expenses_name,
        expenseDate: this.props.parentState.exp_date,
        expenseAmount: this.props.parentState.amount,
        paymentType: this.props.parentState.payment_type,
        notes: this.props.parentState.notes,
        status: this.props.parentState.status,
        category: this.props.parentState.category_name
    }


    onUpdateClicked = (event) => {

        const updateExpName = this.state.expenseName;
        const updateCategory = this.state.category;
        const updateExpDate = this.state.expenseDate;
        const updatAmount = this.state.expenseAmount;
        const updatePaymentType = this.state.paymentType;
        const updateNotes = this.state.notes;
        const updateStatus = this.state.status;

        if (updateExpName === "" || updateCategory === "" || updateExpDate === "" || updatAmount === "" ||
            updatePaymentType === "" || updateStatus === "") {
            alert("Please enter the all the fileds");
        } else {
            this.props.updateExpenses(updateExpName, updateCategory, updateExpDate, updatAmount, updatePaymentType, updateNotes, updateStatus, this.props.parentState.expenses_id);
            this.setState({ expenseName: "" });
            this.setState({ expenseDate: "" });
            this.setState({ expenseAmount: "" });
            this.setState({ paymentType: "" });
            this.setState({ notes: "" });
            this.setState({ status: "" });
            this.setState({ category: "" });
        }
    }


    onTextChanged = (event) => {
        this.setState({ expenseName: event.target.value });
    }

    onAmountChanged = (event) => {
        this.setState({ expenseAmount: event.target.value });
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
        this.setState({ expenseDate: event.target.value });
    }

    onCategoryChanged = (event) => {
        this.setState({ category: event.target.value });
    }

    componentWillReceiveProps({ parentState }) {
        this.setState({ expenseName: parentState.expenses_name });
        this.setState({ expenseDate: parentState.exp_date });
        this.setState({ expenseAmount: parentState.amount });
        this.setState({ paymentType: parentState.payment_type });
        this.setState({ notes: parentState.notes });
        this.setState({ status: parentState.status });
        this.setState({ category: parentState.category_name });

    }

    render() {
        return (
            <div class="container">
                <div className="addExpenses">
                    <div className="row divheight">
                        <div class="col-md-4 col-sm-12">
                            <div >
                                <span class="input-group-text" id="basic-addon1">Expenses Name
                                <input type="text" class="form-control" id="expenseName" onChange={this.onTextChanged} value={this.state.expenseName} /></span>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="form-group">
                                <span class="input-group-text" id="basic-addon1" for="ExpensesCategory">Category
                                    <select class="form-control" id="ExpensesCategory" onChange={this.onCategoryChanged} value={this.state.category}>
                                        <option>Select</option>
                                        <option>Food</option>
                                        <option>Travel</option>
                                        <option>Education</option>
                                        <option>Holiday</option>
                                        <option>Shopping</option>
                                        <option>Home</option>
                                    </select></span>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <div>
                                <span class="input-group-text" id="basic-addon1">Amount
                            <input type="text" class="form-control" id="amount" onChange={this.onAmountChanged} placeholder="0" value={this.state.expenseAmount} /></span>
                            </div>
                        </div>

                    </div>

                    <div className="row divheight">
                        <div class="col-md-4 col-xs-12 col-sm-12">
                            <div >
                                <span class="input-group-text" id="basic-addon1">Date
                            <input id="expDate" class="form-control" type="date" onChange={this.onDateChange}
                                        value={new Date(this.state.expenseDate).toISOString().substr(0, 10)} /></span>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
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

                        <div class="col-md-4 col-sm-12">
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
                        <div class="col-md-8 col-sm-12">
                        <span class="   input-group-text" id="basic-addon1" for="ExpNotes">Notes
                        <textarea class="form-control" id="ExpNotes" rows="1" onChange={this.onNotesChanged} value={this.state.notes}></textarea></span>
                    </div>


                    <div class="col-md-1 col-sm-6">
                        <button type="button" class="btn btn-lg" onClick={this.onUpdateClicked}>Update</button>
                    </div>

                </div>
                </div>
            </div>
        );
    }
}

export default UpdateExpenses;