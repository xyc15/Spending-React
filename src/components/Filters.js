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
          <div className="content-container">
              <div className='row align-items-center mb-4'>
                  <div className="col-1 d-lg-none">
                  </div>
                  <input className='col-10 col-lg-3 mb-3 ml-lg-3 mr-lg-3 mb-lg-0  py-4 px-0' type='text' placeholder = 'Search expenses' value={this.state.text} onChange={this.onTextChange}/>
                  <div className="col-1 col-lg-0 d-lg-none">
                  </div>
                  <div className="col-1 d-lg-none">
                  </div>
                  <button className='col-10  col-lg-2 mb-3  mb-lg-0  mr-lg-3 py-4 px-0' onClick={this.onSortByDateChange}>Sort by Date
                      <span>
                          {this.state.sortByDateIcon === 'down' && <FaChevronDown className='icon' />}
                          {this.state.sortByDateIcon === 'up' && <FaChevronUp className='icon' />}
                      </span>
                  </button>
                  <div className="col-1 d-lg-none">
                  </div>
                  <div className="col-1 d-lg-none">
                  </div>
                  <button className='col-10 col-lg-2 mb-3 mb-lg-0  mr-lg-3 py-4 px-0' onClick={this.onSortByAmountChange}>Sort by Amount
                      <span>
                          {this.state.sortByAmountIcon === 'down' && <FaChevronDown className='icon' />}
                          {this.state.sortByAmountIcon === 'up' && <FaChevronUp className='icon' />}
                      </span>
                  </button>
                  <div className="col-1 d-lg-none">
                  </div>
                  <div className="col-1 d-lg-none">
                  </div>

                  <DateRangePicker
                      className='col-10 col-lg-5 px-0'
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onDatesChange={this.onDatesChange}
                      focusedInput={this.state.focusedInput}
                      onFocusChange={this.onFocusChange}
                      numberOfMonths={1}
                      isOutsideRange={()=>false}
                  />

                  <div className="col-1 d-lg-none">
                  </div>
              </div>
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
