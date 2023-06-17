import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({date, title, amount, locationOfExpenditure, id}) => {
  const deleteExpense = (e) => {
    console.log('called');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <div className='expense-item__price'>{locationOfExpenditure}</div>
        <button onClick={deleteExpense} className='expense-item__price' style={{backgroundColor:'darkred', borderRadius: '8px'}}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;