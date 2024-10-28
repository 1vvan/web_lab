import { DatePicker, Input, InputNumber } from 'antd';
import React, { useState } from 'react';

function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [showForm, setShowForm] = useState(false);

  const resetForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  }

  const closeForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
    resetForm();
  }

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData({ title, amount: +amount, date: date ? date.toDate() : null });
    closeForm();
  };

  return (
    <div className='form-wrapper'>
        {!showForm && (
            <button 
                onClick={() => setShowForm((prevShowForm) => !prevShowForm)} 
                className='form-wrapper__show violet-btn'>
                    Add New Expense
            </button>
        )}

        {showForm ? (
            <form onSubmit={submitHandler} className="expense-form">
                <div className="expense-form__body">
                    <Input size="large" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <InputNumber size="large" 
                      min={1} 
                      max={1000} 
                      placeholder="Amount" 
                      value={amount} 
                      onChange={(value) => setAmount(value)} required
                      style={{width: '100%'}}
                    />
                    <DatePicker size="large" value={date} onChange={(date) => setDate(date)} required/>
                </div>

                <div className='expense-form__buttons'>
                    <button type="button" className='violet-btn' onClick={closeForm}>Cancel</button>
                    <button type="submit" className='violet-btn'>Add Expense</button>
                </div>
            </form>
        ) : ''}
    </div>
  );
}

export default ExpenseForm;
