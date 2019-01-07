import numeral from 'numeral';

const totalExpense = (expenses) => {
    let totalExpense = 0;
    expenses.forEach((expense)=>{
        totalExpense += numeral(expense.amount).value();
    });
    return totalExpense.toFixed(2);
}
const totalIncome = (incomes) => {
    let totalIncome = 0;
    incomes.forEach((income)=>{
        totalIncome += numeral(income.amount).value();
    });
    return totalIncome.toFixed(2);
}

export {totalExpense, totalIncome};