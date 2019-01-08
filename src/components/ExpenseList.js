import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleItems from '../selectors/getVisibleItems';

const ExpenseList = ({expenses, filters}) => {
    return (
        <div className='content-container content-container--fixed'>
            <div className='list-header'>
                <p>Expense</p>
                <p>Amount</p>
            </div>
            <div className='list-body'>
            {getVisibleItems(expenses, filters).map(item => 
                <ExpenseListItem key={item.id} {...item} />)}
            </div>
        </div>
        )

}
const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseList);