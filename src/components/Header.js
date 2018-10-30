import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify-</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink></li>
            <li><Link to="/edit">Edit Expense</Link></li>
            <li><Link to="/help">Help</Link></li>
        </ul>
    </header>
);

export default Header;