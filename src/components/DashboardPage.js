import React from 'react';
import { FaPlus } from "react-icons/fa";
import {Link} from 'react-router-dom';
import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';
import Filters from './Filters';
import SpendingSummary from './SpendingSummary';

export const DashboardPage = () => {

    return (
        <div>
            <SpendingSummary />
            <div className='content-container page-header__buttons'>
                <Link className='button--login button--click button--add' to='/addExpense'><FaPlus className='button--plus'/> Expense</Link>
                <Link className='button--login button--click button--add' to='/addIncome'><FaPlus className='button--plus' /> Income</Link>    
            </div>   
            <Filters />
            <ExpenseList />
            <IncomeList />
  
        </div>
    );
};


export default DashboardPage;