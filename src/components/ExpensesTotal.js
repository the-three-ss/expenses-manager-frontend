import React, { Component } from 'react';

class ExpensesTotal extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div class="col-md-12">Total = {this.props.totalAmount}

                    </div>
                </div>
            </div>
        )
    }
}

export default ExpensesTotal;