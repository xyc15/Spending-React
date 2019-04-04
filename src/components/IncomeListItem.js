import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const IncomeListItem = ({id, date, amount, category}) => {
    return (
        <Link to={`/editIncome/${id}`} className='list-item'>
            <div>
                <h3 className='list-item__title'> {category} </h3>
                <span className='list-item__subtitle'>{moment(date).format('MMMM Do YYYY')}</span>
            </div>
            <h3 className='list-item__data'>${amount}</h3>
        </Link>
    )
};


export default IncomeListItem;
