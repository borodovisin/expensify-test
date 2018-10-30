import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseiveListIten';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map(expense => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateProps = state => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateProps)(ExpenseList);