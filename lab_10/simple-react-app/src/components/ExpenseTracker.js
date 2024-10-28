import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import YearFilter from './YearFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';
import expenseService from '../services/expenseService';
import { Loader } from './Loader';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);

  const addExpenseHandler = async (expense) => {
    await expenseService.addExpense(expense);
    loadExpenses();
  };

  const loadExpenses = async () => {
    setLoading(true);
    const expensesData = await expenseService.getExpenses();
    setExpenses(expensesData);
    setLoading(false);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleChangeYear = (year) => {
    setSelectedYear(year.value);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />

      <div className='expenses-wrapper'>
        <YearFilter selectedYear={selectedYear} onChangeYear={handleChangeYear} />
        <ExpensesChart expenses={expenses} />

        {loading ? (
          <Loader/>
        ) : (
          expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ExpenseTracker;
