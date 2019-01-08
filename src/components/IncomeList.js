import React from 'react';
import {connect} from 'react-redux';
import IncomeListItem from './IncomeListItem';
import getVisibleItems from '../selectors/getVisibleItems';

const IncomeList = ({incomes, filters}) => {
        return (
            <div className='content-container content-container--fixed'>
                <div className='list-header'>
                    <p>Income</p>
                    <p>Amount</p>
                </div>
                <div className='list-body'>
                {getVisibleItems(incomes, filters).map(item => 
                    <IncomeListItem key={item.id} {...item} />)}
                </div>
            </div>
        )

}
const mapStateToProps = (state) => ({
    incomes: state.incomes,
    filters: state.filters
});

export default connect(mapStateToProps)(IncomeList);