import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 }) => ({
        type: "INCREMENT",
        incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 }) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
});   

const setCount = ({ setBy = 1}) => ({
    type: "SET",
    setBy: setBy
});

const resetCount = () => ({
    type: "RESET"
});


// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.setBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(setCount({ setBy: 9 }));

store.dispatch(resetCount());