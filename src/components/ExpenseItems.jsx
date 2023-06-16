import React from "react";
import "./ExpenseItems.css";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItems = ({ title, date, amount, locationOfExpenditure }) => {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <ExpenseDetails amount={amount} location={locationOfExpenditure} />
      </div>
    </div>
  );
};

export default ExpenseItems;
