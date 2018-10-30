

export const setFilter = (update = {}) => ({
    type: 'SET_FILTER',
    update
});

export const sortByDate = date => ({
    type: 'SORT_BY_DATE',
    date
});