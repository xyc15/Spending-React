import React from 'react';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import {connect} from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, sortByAmountHighToLow, sortByAmountLowToHigh,
    sortByDateNewToOld, sortByDateOldToNew, setStartDate, setEndDate } from '../actions/filter'; 
import { FaChevronDown,  FaChevronUp} from "react-icons/fa";

class Filters extends React.Component {
    state = {
        text: this.props.filters.text,
        sortByAmount: this.props.filters.sortByAmount,
        sortByAmountIcon: 'down',
        sortByDate: this.props.filters.sortByDate,
        sortByDateIcon: 'down',
        startDate: this.props.filters.startDate,
        endDate: this.props.filters.endDate,
        focusedInput: null,
    }
    onTextChange = (e) => {
        const text = e.target.value;
        this.props.setTextFilter(text);
        return  this.setState(() => ({text}));

    }
    onSortByAmountChange = () => {
        this.props.sortByAmount();
        if(this.state.sortByAmount === 'lowToHigh'){
            this.props.sortByAmountHTL();
            return this.setState(() => ({
                sortBy: 'amount',
                sortByAmount: 'highToLow',
                sortByAmountIcon: 'down'
            }));   
        } else {
            this.props.sortByAmountLTH();
            return this.setState(() => ({
                sortBy: 'amount',
                sortByAmount: 'lowToHigh',
                sortByAmountIcon: 'up'
            })); 
        }
    }
    onSortByDateChange = () => {
        this.props.sortByDate();
        if(this.state.sortByDate === 'oldToNew') {
            this.props.sortByDateNewToOld();
            return this.setState(() => ({
                sortBy: 'date',
                sortByDate: 'newToOld',
                sortByDateIcon: 'down'
            }));
        }
        else {
            this.props.sortByDateOldToNew();
            return this.setState(() => ({
                sortBy: 'date',
                sortByDate: 'oldToNew',
                sortByDateIcon: 'up'

            }));  
        }
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
        return this.setState(() => ({startDate, endDate}))
    };
    onFocusChange = (focusedInput) => (
        this.setState(() => ({focusedInput}))
    )

    render() {
        return (
            <div className='input-group content-container'>
                <input className='input-group__item' type='text' placeholder = 'Search expenses' value={this.state.text} onChange={this.onTextChange}/>
                <button className='input-group__item' onClick={this.onSortByDateChange}>Sort by Date 
                    <span>
                        {this.state.sortByDateIcon === 'down' && <FaChevronDown className='icon' />}
                        {this.state.sortByDateIcon === 'up' && <FaChevronUp className='icon' />}
                    </span>
                </button>
                <button className='input-group__item' onClick={this.onSortByAmountChange}>Sort by Amount
                    <span>
                        {this.state.sortByAmountIcon === 'down' && <FaChevronDown className='icon' />}
                        {this.state.sortByAmountIcon === 'up' && <FaChevronUp className='icon' />}
                    </span>
                </button>
                <DateRangePicker 
                    
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => (dispatch(setTextFilter(text))),
    sortByDate: () => (dispatch(sortByDate())),
    sortByAmount: () => (dispatch(sortByAmount())),
    sortByAmountHTL: () => (dispatch(sortByAmountHighToLow())),
    sortByAmountLTH: () => (dispatch(sortByAmountLowToHigh())),
    sortByDateNewToOld: () => (dispatch(sortByDateNewToOld())),
    sortByDateOldToNew: () => (dispatch(sortByDateOldToNew())),
    setStartDate: (startDate) => (dispatch(setStartDate(startDate))),
    setEndDate: (endDate) => (dispatch(setEndDate(endDate)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);