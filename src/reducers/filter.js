import moment from 'moment';

const initialState = {
    text: '',
    sortBy: 'date',
    sortByAmount: 'highToLow',
    sortByDate: 'newToOld',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return ({...state, text: action.text});
        case 'SORT_BY_DATE':
            return ({...state, sortBy: 'date'});
        case 'SORT_BY_AMOUNT':
            return ({...state, sortBy: 'amount'});
        case 'SORT_BY_AMOUNT_HTL':
            return ({...state, sortByAmount: 'highToLow'});
        case 'SORT_BY_AMOUNT_LTH':
            return ({...state, sortByAmount: 'lowToHigh'});
        case 'SORT_BY_DATE_NTO':
            return ({...state, sortByDate: 'newToOld'});
        case 'SORT_BY_DATE_OTN':
            return ({...state, sortByDate: 'oldToNew'});
        case 'SET_START_DATE':
            return ({...state, startDate: action.startDate});
        case 'SET_END_DATE':
            return ({...state, endDate: action.endDate});
        default:
            return state;
    }
}
 
export default filterReducer;