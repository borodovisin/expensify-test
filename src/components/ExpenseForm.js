import React, { Component } from 'react';

export default class ExpenseForm extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            error: ''
        }
    }

    onDescriptionChanges = e => {
        const description =  e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChanges = e => {
        const note =  e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChanges = e => {
        const amount = e.target.value;
        if (!amount ||  amount.match(/^\d*(\.\d{0,2})?$/)) this.setState(() => ({amount}));
    }

    onSubmit = e => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Description and amount are mandatory fields" }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description}
                        onChange={this.onDescriptionChanges} />
                    <input type="text" placeholder="Amount" value={this.state.amount} 
                    onChange={this.onAmountChanges}/>
                    <textarea placeholder="Add a note for your expense (optional)" onChange={this.onNoteChanges} value={this.state.note} />
                    <button>Add Expense</button>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        );
    }
}