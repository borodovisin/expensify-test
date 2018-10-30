import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions/filters';

const ExpenseListFilter = props => (
    <div>
        <input type="text" value={props.filters.text} onChange={e => {
            props.dispatch(setFilter({text: e.target.value}));
        }} />
        <select>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = state => ({ filters: state.filters});

export default connect(mapStateToProps)(ExpenseListFilter);