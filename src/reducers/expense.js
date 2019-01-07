
const initialState = [];

const ExpenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':{
            return [...state, action.expense];
        };
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(action.id === expense.id){
                    return {...expense, ...action.expense}
                } else {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => action.id !== expense.id);
        case 'SET_EXPENSE':
            return action.expenses;
        default:
            return state;
    }
}

export default ExpenseReducer;