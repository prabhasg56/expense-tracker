import React from "react";
import "./ExpenseItems.css";

const ExpenseItems = () => {
  const expenseDate = new Date(2023, 6, 16);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 310.50;
  const locationOfExpenditure = 'India';

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price"> {locationOfExpenditure}</div>
        <div className="expense-item__price"> ${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItems;
