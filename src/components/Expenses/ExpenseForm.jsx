import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const addTitle = (e) => {
    let title = e.target.value;
    console.log(title);
  };

  const addDate = (e) => {
    let date = e.target.value;
    console.log(date);
  };

  const addAmount = (e) => {
    let amount = e.target.value;
    console.log(amount);
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
          <input type="number" onChange={addAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={addDate} />
        </div>
        <div className="btn">
          <button className="expense_add_btn">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
