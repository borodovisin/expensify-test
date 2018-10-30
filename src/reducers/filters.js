
const filterReducerDefaultState = {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
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

export default filtresReducer;