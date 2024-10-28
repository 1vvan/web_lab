import React from 'react';

const ExpensesChart = ({ expenses }) => {
  const monthlyData = Array(12).fill(0);

  expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    monthlyData[month] += expense.amount;
  });

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ].map(month => month.slice(0, 3)); 

  return (
    <div className="expenses-chart">
      <div className="chart-bars">
        {monthlyData.map((amount, index) => (
          <div key={index} className="chart-bar-wrapper">
            <div className='chart-bar'>
              <div
                className="chart-bar-fill"
                style={{ height: `${(amount / Math.max(...monthlyData)) * 100}%` }}
              ></div>
            </div>
            <span className="chart-bar-label">{monthNames[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesChart;
