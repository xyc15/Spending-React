import React from 'react';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expense';
import {startAddIncome} from '../actions/income';
import Form from './Form';

export class AddItemPage extends React.Component {
    constructor(props){
        super(props);
    };
    onAddExpense = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('./dashboard');
    };
    onAddIncome = (income) => {
        this.props.startAddIncome(income);
        this.props.history.push('./dashboard');
    };
    render() {
        const pathName = this.props.match.path;
        if(pathName === '/addExpense'){
            return (
                    <div>
                        <div className='page-header'>
                            <div className='content-container'>
                                <h1 className='page-header__title'>Add Expense</h1>
                            </div>
                        </div>
                        <div className='content-container'>
                        <Form onSubmit={this.onAddExpense} type='expense' />
                        </div>
                    </div>
                )
        }
        else if(pathName === '/addIncome'){
            return (
                <div>
                    <div className='page-header'>
                        <div className='content-container'>
                            <h1 className='page-header__title'>Add Income</h1>
                        </div>
                    </div>
                    <div className='content-container'>
                        <Form onSubmit={this.onAddIncome} type='income' />
                    </div>
                </div>
            )
        }
        else return null;
    }
};


const mapDispatchToProps = (dispatch) =>({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    startAddIncome: (income) => dispatch(startAddIncome(income))
});

export default connect( undefined, mapDispatchToProps)(AddItemPage);