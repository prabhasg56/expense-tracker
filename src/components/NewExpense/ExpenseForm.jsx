import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const addTitle = (e) => {
    const title = e.target.value;
    setEnteredTitle(title);
  };

  const addDate = (e) => {
    const date = new Date(e.target.value);
    setEnteredDate(date);
  };

  const addAmount = (e) => {
    const amount = e.target.value;
    setEnteredAmount(amount);
  };

  const formSubmitted = (e) => {
    e.preventDefault();

    const expenseObj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    props.onSaveExpnseData(expenseObj);
  };

  return (
    <form onSubmit={formSubmitted}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={addTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={addAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2023-06-18"
            max="2030-06-19"
            onChange={addDate}
          />
        </div>
        <div className="btn">
          <button type="submit" style={{backgroundColor:'darkgreen'}} >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
