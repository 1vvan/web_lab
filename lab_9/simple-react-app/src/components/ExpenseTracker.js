import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import YearFilter from './YearFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const handleChangeYear = (year) => {
    setSelectedYear(year.value)
  }

  useEffect(() => {
    setExpenses(() => {
      return expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
      );
    })
  }, [selectedYear])

  return (
    <div>
        <ExpenseForm onSaveExpenseData={addExpenseHandler}/>

        <div className='expenses-wrapper'>
            <YearFilter selectedYear={selectedYear} onChangeYear={handleChangeYear} />
            <ExpensesChart expenses={expenses} />

            {expenses && expenses.map((expense, index) => (
              <ExpenseItem
                  key={index}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date} 
              />
            ))}
        </div>
    </div>
  );
}

export default ExpenseTracker;
