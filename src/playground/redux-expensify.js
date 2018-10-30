import  { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ({id, updates}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setFilter = (update = {}) => ({
    type: 'SET_FILTER',
    update
});

const sortByDate = date => ({
    type: 'SORT_BY_DATE',
    date
});

const expensiveReducerDefaultState = []
const filterReducerDefaultState = {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const expensiveReducer = (state = expensiveReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
         return state.filter(({ id }) => id !== action.id);
         case 'EDIT_EXPENSE':
            return state.map(expense => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            });
        default:
            return state;
    }
}

const filtresReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_FILTER':
            return {...state, ...action.update}
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.date
            }
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensiveReducer,
        filters: filtresReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));

const expenseTwo = store.dispatch(addExpense({description: 'Coffe', amount: 3}));

store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

store.dispatch(editExpense({id: expenseOne.expense.id, updates: { amount: 99, createdAt: 10}}));

store.dispatch(setFilter({'text': 'rent'}));

store.dispatch(sortByDate(125));

const demoState = {
    expenses: [{
        id: ',dmfdfm',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}