import React from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import './assets/scss/main.scss'

const App = () => {
    return (
        <div className='_container'>
            <ExpenseTracker />
        </div>
    );
};

export default App;
