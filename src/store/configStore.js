import { createStore, combineReducers } from 'redux';
import expensiveReducer from '../reducers/expenses';
import filtresReducer from '../reducers/filters';


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensiveReducer,
            filters: filtresReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
