import database from '../firebase/firebase';
import moment from 'moment';

const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//add data to firebase and redux store

const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            date = moment(),
            amount = 0, 
            category = ''
        } = expenseData;

        const expense = {date, amount, category};
        console.log('in startAddExpense, expense is: ', expense);
        return database.ref(`users/${uid}/expenses`).push(expense).then(snapshot => {
            dispatch(addExpense({
                id: snapshot.key,
                ...expense
            }));
        });

    }
}
const editExpense = (id, expense) => ({
    type: 'EDIT_EXPENSE',
    id,
    expense
});
const startEditExpense = (id, expense) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
         return database.ref(`users/${uid}/expenses/${id}`).update({
             ...expense
         }).then(() => {
            dispatch(editExpense(id, expense));
         });

    }
}

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});
const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense(id));
        });
    }
}
const setExpense = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
})

const startSetExpense = () => {
   return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
        .once('value')
        .then(snapshot => {
            const expenses = [];
            snapshot.forEach(childSnapshot => {
               expenses.push({
                   id: childSnapshot.key,
                   ...childSnapshot.val()
               });
           })
           dispatch(setExpense(expenses));
        });
        
       
    }
}

export {addExpense, editExpense, removeExpense, setExpense, 
    startAddExpense, startEditExpense, startRemoveExpense, startSetExpense};
