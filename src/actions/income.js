import database from '../firebase/firebase'
const addIncome = (income) => ({
    type: 'ADD_INCOME',
    income
});
const startAddIncome = (incomeData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            date = moment(),
            amount = 0, 
            category = ''
        } = incomeData;

        const income = {date, amount, category};
        
        return database.ref(`users/${uid}/incomes`).push(income).then(snapshot => {
            dispatch(addIncome({
                id: snapshot.key,
                ...income
            }));
        });

    }
}
const editIncome = (id, income) => ({
    type: 'EDIT_INCOME',
    id,
    income
});
const startEditIncome = (id, income) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
         return database.ref(`users/${uid}/incomes/${id}`).update({
             ...income
         }).then(() => {
            dispatch(editIncome(id, income));
         });

    }
}
const removeIncome = (id) => ({
    type: 'REMOVE_INCOME',
    id
});
const startRemoveIncome = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/incomes/${id}`).remove().then(() =>{
            dispatch(removeIncome(id));
        });
    }
}
const setIncome = (incomes) => ({
    type: 'SET_INCOME',
    incomes
})

const startSetIncome = () => {
    return (dispatch, getState) => {
         const uid = getState().auth.uid;
         return database.ref(`users/${uid}/incomes`)
         .once('value')
         .then(snapshot => {
             const incomes = [];
             snapshot.forEach(childSnapshot => {
                incomes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            })
            dispatch(setIncome(incomes));
         });
        
     }
 }
export {addIncome, editIncome, removeIncome, setIncome,
        startAddIncome, startEditIncome, startRemoveIncome, startSetIncome};
