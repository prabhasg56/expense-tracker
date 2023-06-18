import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const addTitle = (e) => {
    const title = e.target.value;
    setEnteredTitle(title);
  };

  const addDate = (e) => {
    const date = e.target.value;
    setEnteredDate(date);
  };

  const addAmount = (e) => {
    const amount = e.target.value;
    setEnteredAmount(amount);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={addTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" max="0.01" onChange={addAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-06-18"
            max="2030-06-19"
            onChange={addDate}
          />
        </div>
        <div className="btn">
          <button className="expense_add_btn">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
