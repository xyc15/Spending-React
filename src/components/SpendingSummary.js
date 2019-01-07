import React from 'react';
import {connect} from 'react-redux';
import {totalExpense, totalIncome} from '../selectors/calculateTotal';
import getVisibleItems from '../selectors/getVisibleItems';

const SpendingSummary = ({expenses, incomes, filters}) => {
    const displayIncome = totalIncome(getVisibleItems(incomes, filters));
    const displayExpense = totalExpense(getVisibleItems(expenses, filters));
    const displayBalance = (displayIncome - displayExpense).toFixed(2);

    return (
        <div className='page-header'>
        <div className='content-container'>
            <div className='page-header__info'>
                <p className='green'><span>Income</span> <span>{displayIncome}</span></p>
                <p className='red'><span>Expense</span> <span>{displayExpense}</span></p>
                <p className='blue'><span>Balance</span> <span>{displayBalance}</span></p>
            </div>
        </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    filters: state.filters
});

export default connect(mapStateToProps)(SpendingSummary);