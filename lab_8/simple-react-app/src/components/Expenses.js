import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ expenses }) => {
    return (
        <div className="expenses">
            {expenses.map(expense => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} 
                />
            ))}
        </div>
    );
};

export default Expenses;
