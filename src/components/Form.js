import React from 'react';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import FlashMessage from 'react-flash-message';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: props.expense ? moment(props.expense.date) : (props.income ? moment(props.income.date): moment()),
            focused: props.expense ? props.expense.focused : (props.income ? props.income.focused: false),
            amount: props.expense ? props.expense.amount : (props.income ? props.income.amount : ''),
            category: props.expense ? props.expense.category : (props.income ? props.income.category : ''),
            error: ''
        };
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    };
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(()=>({category}));
    }
    onDateChange = (date) => (
        this.setState({date})
    );
    onFocusChange = ({focused}) => (
        this.setState({focused})
    );
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.amount){
            this.setState(()=>({error: 'Please enter valid amount!'}));
        } else if(!this.state.category) {
            this.setState(()=>({error: 'Please select a category!'}));
        } else {
            this.setState(()=>({error: ''}));
            const item = {
                date: this.state.date.valueOf(), //firebase does not support moment() data type, it only accept string or number
                amount: this.state.amount,
                category: this.state.category
            };
            this.props.onSubmit(item);
        }

    }
    render() {
        return (
            <div>
            {  this.state.error &&
                <FlashMessage duration={5000} persistOnHover={true}>
                    <p className='red font-size-medium'>{this.state.error}</p>
                </FlashMessage>
            }
            <form onSubmit={this.onSubmit} className='form'>
                <SingleDatePicker
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
                <input className='text-input' type='number' min= '0.01' step='0.01' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
                {this.props.type==='expense'?
                    <select className='text-input' onChange={this.onCategoryChange} value={this.state.category}>
                        <option >Select</option>
                        <option>General</option>
                        <option>Holidays</option>
                        <option>Shopping</option>
                        <option>Clothes</option>
                        <option>Eating</option>
                        <option>Entertainment</option>
                        <option>Fuel</option>
                        <option>Gifts</option>
                        <option>Kids</option>
                        <option>Sports</option>
                        <option>Travel</option>
                    </select>
                : (this.props.type==='income' ?
                    <select className='text-input' onChange={this.onCategoryChange} value={this.state.category} >
                        <option >Select</option>
                        <option>Salary</option>
                        <option>Other</option>
                    </select> : null)

                }
                <div>
                <button className='button'>Save</button>
                </div>
            </form>
            </div>
        );
    }
}
