const initialState = [];

const IncomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_INCOME':{
            return [...state, action.income]
        };
        case 'EDIT_INCOME':
            return state.map((income)=>{
                if(action.id === income.id){
                    return {...income, ...action.income}
                } else {
                    return income;
                }
            });
        case 'REMOVE_INCOME':
            return state.filter((income) => action.id !== income.id);
        case 'SET_INCOME':
            return action.incomes;
        default:
            return state;
    }
}

export default IncomeReducer;