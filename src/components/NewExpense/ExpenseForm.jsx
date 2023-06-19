import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formDis, setFormDis] = useState(false);

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

  const formSubmitted = (e) => {
    e.preventDefault();

    if (formDis) {
      const expenseObj = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTitle("");

      props.onSaveExpnseData(expenseObj);
      setFormDis(false);
    } else {
      setFormDis(true);
    }
  };

  const onCancelHandler = (e) => {
    e.preventDefault();
    setFormDis(false);
  };

  return (
    <form onSubmit={formSubmitted}>
      <div className="new-expense__controls">
        {formDis && (
          <>
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                required
                value={enteredTitle}
                onChange={addTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                required
                value={enteredAmount}
                onChange={addAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2023-01-01"
                max="2025-12-31"
                onChange={addDate}
              />
            </div>
          </>
        )}

        <div className="btn">
          {formDis && <button
            onClick={onCancelHandler}
            style={{ backgroundColor: "darkred" }}
          >
            Cancel
          </button>}
          <button type="submit" style={{ backgroundColor: "darkgreen" }}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
