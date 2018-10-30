import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const store = configStore();

console.log(store.getState());

store.dispatch(addExpense({description: "Water bill", amount: 12, createdAt: 3}));
store.dispatch(addExpense({description: "Electric bill", amount: 18, createdAt: 6}));
store.dispatch(addExpense({description: "Rent", amount: 100, createdAt: 9}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));