export const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByAmountHighToLow = () => ({
    type: 'SORT_BY_AMOUNT_HTL'
});

export const sortByAmountLowToHigh = () => ({
    type: 'SORT_BY_AMOUNT_LTH'
});

export const sortByDateNewToOld = () => ({
    type: 'SORT_BY_DATE_NTO'
});

export const sortByDateOldToNew = () => ({
    type: 'SORT_BY_DATE_OTN'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})