import React from 'react';
import Form from './Form';
import {startEditExpense, startRemoveExpense} from '../actions/expense';
import {startEditIncome, startRemoveIncome} from '../actions/income';
import {connect} from 'react-redux';

export class EditExpensePage extends React.Component {
    onEditExpense = (expense) => {
        this.props.startEditExpense(this.props.match.params.id, expense);
        this.props.history.push('/dashboard');
    };
    onRemoveExpense = () => {
        this.props.startRemoveExpense(this.props.match.params.id);
        this.props.history.push('/dashboard');
    }
    onEditIncome = (income) => {
        this.props.startEditIncome(this.props.match.params.id, income);
        this.props.history.push('/dashboard');
    };
    onRemoveIncome = () => {
        this.props.startRemoveIncome(this.props.match.params.id);
        this.props.history.push('/dashboard');
    }
    render(){
        const pathName = this.props.match.path; 
        if (pathName === '/editExpense/:id'){
            return (
                <div>
                    <div className='page-header'>
                        <div className='content-container'>
                            <h1 className='page-header__title'>Edit Expense</h1>
                        </div>
                    </div>
                    <div className='content-container'>
                        <Form expense={this.props.expense} type='expense' onSubmit={this.onEditExpense}/>
                        <button className='button button-secondary' onClick={this.onRemoveExpense}>Delete</button>                    </div>
                </div>
            );
        }
        else if (pathName === '/editIncome/:id') {
            return (

                <div>
                    <div className='page-header'>
                        <div className='content-container'>
                            <h1 className='page-header__title'>Edit Income</h1>
                        </div>
                    </div>
                    <div className='content-container'>
                        <Form income={this.props.income} type='income' onSubmit={this.onEditIncome}/>
                        <button className='button button-secondary' onClick={this.onRemoveIncome}>Delete</button>
                    </div>
                </div>
            );
        }
        else return null;
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense)=>(expense.id === props.match.params.id)),
    income: state.incomes.find((income)=>(income.id === props.match.params.id))
});
const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense : (id) => dispatch(startRemoveExpense(id)),
    startEditIncome: (id, income) => dispatch(startEditIncome(id, income)),
    startRemoveIncome : (id) => dispatch(startRemoveIncome(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);