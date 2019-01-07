import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import expenseReducer from '../reducers/expense';
import incomeReducer from '../reducers/income';
import filterReducer from '../reducers/filter';

//store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            incomes: incomeReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
