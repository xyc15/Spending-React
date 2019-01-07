
import moment from 'moment';

const getVisibleItems = (items, {text, sortBy, sortByDate, sortByAmount, startDate, endDate}) => {
    const filteredItems =  items.filter(item => {
        //note: we use includes here, instead of indexOf
        const textFilter = text ? item.category.toLowerCase().includes(text.toLowerCase()) : true;
        const startDateFilter = moment(item.date).isAfter(startDate);
        const endDateFilter = moment(item.date).isBefore(endDate);

        return textFilter && startDateFilter && endDateFilter;
    })
    
    let sortedItems = [];
    if(sortBy === 'date'){
        sortedItems = filteredItems.sort((a, b) => {
            if(sortByDate === 'newToOld'){
                return b.date -a.date;
            } else {
                return a.date - b.date;
            }
        });
    } else {
        sortedItems = filteredItems.sort((a, b) => {
            if(sortByAmount === 'highToLow') {
                return b.amount - a.amount;
            } else {
                return a.amount - b.amount;
            }
        });
    }

    return sortedItems;
}

export default getVisibleItems;
